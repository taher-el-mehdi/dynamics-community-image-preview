/**
 * Dynamics Community Image Viewer - Content Script
 * 
 * Enables inline image preview on Microsoft Dynamics Community forums
 * without downloading files. Supports click-to-preview and hover-to-preview modes.
 */

(function() {
  'use strict';

  // Configuration stored in chrome.storage.sync
  let config = {
    hoverPreview: false,
    clickPreview: true,
    hoverDelay: 300,
    zoomEnabled: true
  };

  // Modal state
  let modal = null;
  let modalImage = null;
  let currentZoom = 1;
  let isDragging = false;
  let dragStart = { x: 0, y: 0 };
  let imagePosition = { x: 0, y: 0 };
  let hoverTimeout = null;

  /**
   * Initialize the extension
   */
  function init() {
    loadConfig();
    processImages();
    observeDOMChanges();
    createModal();
    addKeyboardListeners();
  }

  /**
   * Load configuration from chrome.storage
   */
  function loadConfig() {
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.sync.get(config, (items) => {
        config = items;
      });
    }
  }

  /**
   * Detect and process all images on the page
   */
  function processImages() {
    // Find all links that point to images
    const imageLinks = document.querySelectorAll('a[href]');
    
    imageLinks.forEach(link => {
      const href = link.href;
      
      // Check if link points to an image
      if (isImageURL(href) && !link.classList.contains('dciv-processed')) {
        enhanceImageLink(link);
        link.classList.add('dciv-processed');
      }
    });

    // Find all img tags (attachments, embedded images)
    const images = document.querySelectorAll('img:not(.dciv-processed)');
    
    images.forEach(img => {
      // Skip small icons and avatars
      if (img.width > 50 && img.height > 50) {
        enhanceImageElement(img);
        img.classList.add('dciv-processed');
      }
    });
  }

  /**
   * Check if URL points to an image
   */
  function isImageURL(url) {
    const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|webp|svg)(\?.*)?$/i;
    return imageExtensions.test(url);
  }

  /**
   * Enhance a link that points to an image
   */
  function enhanceImageLink(link) {
    // Add visual indicator
    link.classList.add('dciv-image-link');
    
    // Add preview icon
    const icon = document.createElement('span');
    icon.className = 'dciv-preview-icon';
    icon.innerHTML = '🔍';
    icon.title = 'Click to preview image';
    
    // Prevent default link behavior
    link.addEventListener('click', (e) => {
      if (config.clickPreview) {
        e.preventDefault();
        showImageModal(link.href);
      }
    });

    // Hover preview
    if (config.hoverPreview) {
      link.addEventListener('mouseenter', (e) => {
        hoverTimeout = setTimeout(() => {
          showImageModal(link.href);
        }, config.hoverDelay);
      });

      link.addEventListener('mouseleave', () => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
          hoverTimeout = null;
        }
      });
    }

    // Add icon to link
    if (!link.querySelector('.dciv-preview-icon')) {
      link.appendChild(icon);
    }
  }

  /**
   * Enhance an existing image element
   */
  function enhanceImageElement(img) {
    // Add cursor pointer
    img.style.cursor = 'pointer';
    img.classList.add('dciv-clickable-image');
    img.title = 'Click to view full size';

    // Click to preview
    img.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Use the image's src or a higher resolution version if available
      const fullSizeUrl = img.getAttribute('data-fullsize') || 
                         img.getAttribute('data-src') || 
                         img.src;
      
      showImageModal(fullSizeUrl);
    });

    // Hover preview
    if (config.hoverPreview) {
      img.addEventListener('mouseenter', () => {
        hoverTimeout = setTimeout(() => {
          const fullSizeUrl = img.getAttribute('data-fullsize') || 
                             img.getAttribute('data-src') || 
                             img.src;
          showImageModal(fullSizeUrl);
        }, config.hoverDelay);
      });

      img.addEventListener('mouseleave', () => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
          hoverTimeout = null;
        }
      });
    }
  }

  /**
   * Create the modal container
   */
  function createModal() {
    modal = document.createElement('div');
    modal.id = 'dciv-modal';
    modal.className = 'dciv-modal';
    modal.style.display = 'none';

    // Modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'dciv-overlay';
    overlay.addEventListener('click', closeModal);

    // Image container
    const imageContainer = document.createElement('div');
    imageContainer.className = 'dciv-image-container';

    // Loading spinner
    const loader = document.createElement('div');
    loader.className = 'dciv-loader';
    loader.innerHTML = '<div class="dciv-spinner"></div>';

    // Modal image
    modalImage = document.createElement('img');
    modalImage.className = 'dciv-modal-image';
    modalImage.alt = 'Preview';

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'dciv-close-btn';
    closeBtn.innerHTML = '×';
    closeBtn.title = 'Close (ESC)';
    closeBtn.addEventListener('click', closeModal);

    // Zoom controls
    const zoomControls = document.createElement('div');
    zoomControls.className = 'dciv-zoom-controls';
    
    const zoomIn = document.createElement('button');
    zoomIn.className = 'dciv-zoom-btn';
    zoomIn.innerHTML = '+';
    zoomIn.title = 'Zoom In';
    zoomIn.addEventListener('click', () => adjustZoom(0.2));

    const zoomOut = document.createElement('button');
    zoomOut.className = 'dciv-zoom-btn';
    zoomOut.innerHTML = '−';
    zoomOut.title = 'Zoom Out';
    zoomOut.addEventListener('click', () => adjustZoom(-0.2));

    const zoomReset = document.createElement('button');
    zoomReset.className = 'dciv-zoom-btn';
    zoomReset.innerHTML = '⟲';
    zoomReset.title = 'Reset Zoom';
    zoomReset.addEventListener('click', resetZoom);

    zoomControls.appendChild(zoomOut);
    zoomControls.appendChild(zoomReset);
    zoomControls.appendChild(zoomIn);

    // Assemble modal
    imageContainer.appendChild(loader);
    imageContainer.appendChild(modalImage);
    modal.appendChild(overlay);
    modal.appendChild(imageContainer);
    modal.appendChild(closeBtn);
    
    if (config.zoomEnabled) {
      modal.appendChild(zoomControls);
    }

    document.body.appendChild(modal);

    // Enable image dragging when zoomed
    modalImage.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);

    // Mouse wheel zoom
    imageContainer.addEventListener('wheel', (e) => {
      if (config.zoomEnabled && modal.style.display === 'flex') {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        adjustZoom(delta);
      }
    });
  }

  /**
   * Show image in modal
   */
  function showImageModal(imageUrl) {
    if (!modal || !modalImage) return;

    // Reset state
    resetZoom();
    
    // Show modal with loader
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    const loader = modal.querySelector('.dciv-loader');
    loader.style.display = 'flex';
    modalImage.style.display = 'none';

    // Load image
    const img = new Image();
    
    img.onload = () => {
      modalImage.src = imageUrl;
      modalImage.style.display = 'block';
      loader.style.display = 'none';
    };

    img.onerror = () => {
      loader.innerHTML = '<div class="dciv-error">Failed to load image</div>';
      setTimeout(closeModal, 2000);
    };

    img.src = imageUrl;
  }

  /**
   * Close the modal
   */
  function closeModal() {
    if (!modal) return;
    
    modal.style.display = 'none';
    document.body.style.overflow = '';
    
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      hoverTimeout = null;
    }
  }

  /**
   * Adjust zoom level
   */
  function adjustZoom(delta) {
    currentZoom = Math.max(0.5, Math.min(5, currentZoom + delta));
    applyZoom();
  }

  /**
   * Reset zoom to default
   */
  function resetZoom() {
    currentZoom = 1;
    imagePosition = { x: 0, y: 0 };
    applyZoom();
  }

  /**
   * Apply current zoom and position
   */
  function applyZoom() {
    if (!modalImage) return;
    
    modalImage.style.transform = 
      `scale(${currentZoom}) translate(${imagePosition.x}px, ${imagePosition.y}px)`;
    
    // Enable dragging if zoomed in
    modalImage.style.cursor = currentZoom > 1 ? 'grab' : 'default';
  }

  /**
   * Start dragging the image
   */
  function startDrag(e) {
    if (currentZoom <= 1) return;
    
    isDragging = true;
    modalImage.style.cursor = 'grabbing';
    dragStart = {
      x: e.clientX - imagePosition.x,
      y: e.clientY - imagePosition.y
    };
    e.preventDefault();
  }

  /**
   * Drag the image
   */
  function drag(e) {
    if (!isDragging) return;
    
    imagePosition = {
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    };
    applyZoom();
  }

  /**
   * Stop dragging the image
   */
  function stopDrag() {
    if (!isDragging) return;
    
    isDragging = false;
    if (modalImage && currentZoom > 1) {
      modalImage.style.cursor = 'grab';
    }
  }

  /**
   * Add keyboard event listeners
   */
  function addKeyboardListeners() {
    document.addEventListener('keydown', (e) => {
      if (modal && modal.style.display === 'flex') {
        switch(e.key) {
          case 'Escape':
            closeModal();
            break;
          case '+':
          case '=':
            if (config.zoomEnabled) adjustZoom(0.2);
            break;
          case '-':
          case '_':
            if (config.zoomEnabled) adjustZoom(-0.2);
            break;
          case '0':
            if (config.zoomEnabled) resetZoom();
            break;
          case 'ArrowLeft':
            imagePosition.x += 50;
            applyZoom();
            break;
          case 'ArrowRight':
            imagePosition.x -= 50;
            applyZoom();
            break;
          case 'ArrowUp':
            imagePosition.y += 50;
            applyZoom();
            break;
          case 'ArrowDown':
            imagePosition.y -= 50;
            applyZoom();
            break;
        }
      }
    });
  }

  /**
   * Observe DOM changes to detect dynamically loaded images
   */
  function observeDOMChanges() {
    const observer = new MutationObserver((mutations) => {
      let shouldProcess = false;
      
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // Element node
              if (node.tagName === 'IMG' || 
                  node.tagName === 'A' || 
                  node.querySelector('img') || 
                  node.querySelector('a[href]')) {
                shouldProcess = true;
              }
            }
          });
        }
      });

      if (shouldProcess) {
        // Debounce processing
        setTimeout(processImages, 300);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Toggle configuration setting
   */
  function toggleSetting(setting) {
    config[setting] = !config[setting];
    
    if (typeof chrome !== 'undefined' && chrome.storage) {
      chrome.storage.sync.set(config);
    }
    
    // Re-process images if hover preview changed
    if (setting === 'hoverPreview') {
      processImages();
    }
  }

  // Expose settings toggle for popup/options page
  window.dcivToggleSetting = toggleSetting;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
