/**
 * TEST HELPER SCRIPT
 * 
 * This script helps you test the extension functionality.
 * Open the browser console (F12) on community.dynamics.com and paste this script.
 * 
 * NOTE: This is for development/testing only, not part of the extension.
 */

// Test 1: Check if extension is loaded
function testExtensionLoaded() {
  const modal = document.getElementById('dciv-modal');
  if (modal) {
    console.log('✅ Extension loaded successfully');
    return true;
  } else {
    console.error('❌ Extension not loaded');
    return false;
  }
}

// Test 2: Find all processed images
function testImageDetection() {
  const processedLinks = document.querySelectorAll('.dciv-processed');
  const imageLinks = document.querySelectorAll('.dciv-image-link');
  const clickableImages = document.querySelectorAll('.dciv-clickable-image');
  
  console.log(`Found ${processedLinks.length} processed elements`);
  console.log(`Found ${imageLinks.length} image links`);
  console.log(`Found ${clickableImages.length} clickable images`);
  
  if (processedLinks.length > 0) {
    console.log('✅ Image detection working');
    return true;
  } else {
    console.warn('⚠️ No images detected yet');
    return false;
  }
}

// Test 3: Create a test image link
function testCreateImageLink() {
  const testDiv = document.createElement('div');
  testDiv.id = 'dciv-test-container';
  testDiv.innerHTML = `
    <h3>Test Image Links:</h3>
    <p>
      <a href="https://via.placeholder.com/800x600.jpg">Test Image 1 (JPG)</a><br>
      <a href="https://via.placeholder.com/1200x800.png">Test Image 2 (PNG)</a><br>
      <a href="https://via.placeholder.com/600x400.gif">Test Image 3 (GIF)</a>
    </p>
    <p>
      <img src="https://via.placeholder.com/300x200.jpg" alt="Test Thumbnail">
    </p>
  `;
  
  testDiv.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: white;
    border: 2px solid #0078d4;
    padding: 15px;
    z-index: 999998;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    border-radius: 8px;
    max-width: 300px;
  `;
  
  document.body.appendChild(testDiv);
  
  console.log('✅ Test container added to page');
  console.log('🔄 Wait a moment for extension to process...');
  
  // Wait and check if test links are processed
  setTimeout(() => {
    const testLinks = testDiv.querySelectorAll('.dciv-image-link');
    if (testLinks.length > 0) {
      console.log(`✅ Test links processed: ${testLinks.length}/3`);
    } else {
      console.warn('⚠️ Test links not processed yet');
    }
  }, 1000);
}

// Test 4: Manually trigger modal
function testOpenModal() {
  const testUrl = 'https://via.placeholder.com/1200x800.jpg?text=Test+Image';
  
  // Trigger click event on a test link
  const modal = document.getElementById('dciv-modal');
  if (modal) {
    modal.style.display = 'flex';
    const img = modal.querySelector('.dciv-modal-image');
    if (img) {
      img.src = testUrl;
      console.log('✅ Modal opened manually');
      console.log('💡 Press ESC or click outside to close');
    }
  } else {
    console.error('❌ Modal not found');
  }
}

// Test 5: Check keyboard shortcuts
function testKeyboardShortcuts() {
  console.log('Keyboard shortcuts to test:');
  console.log('  ESC - Close modal');
  console.log('  + or = - Zoom in');
  console.log('  - or _ - Zoom out');
  console.log('  0 - Reset zoom');
  console.log('  Arrow keys - Pan image');
  console.log('💡 Open an image first, then test these keys');
}

// Test 6: Remove test container
function removeTestContainer() {
  const testDiv = document.getElementById('dciv-test-container');
  if (testDiv) {
    testDiv.remove();
    console.log('✅ Test container removed');
  }
}

// Run all tests
function runAllTests() {
  console.log('🧪 Running Extension Tests...\n');
  
  console.log('Test 1: Extension Loaded');
  testExtensionLoaded();
  
  console.log('\nTest 2: Image Detection');
  testImageDetection();
  
  console.log('\nTest 3: Creating Test Images');
  testCreateImageLink();
  
  console.log('\nTest 4: Keyboard Shortcuts');
  testKeyboardShortcuts();
  
  console.log('\n✅ Tests complete!');
  console.log('💡 Click test images to verify modal functionality');
  console.log('💡 Run removeTestContainer() to clean up');
}

// Expose functions to console
console.log('🛠️ Test Helper Loaded');
console.log('Available commands:');
console.log('  runAllTests()           - Run all tests');
console.log('  testExtensionLoaded()   - Check if extension loaded');
console.log('  testImageDetection()    - Check image detection');
console.log('  testCreateImageLink()   - Add test images');
console.log('  testOpenModal()         - Open modal manually');
console.log('  testKeyboardShortcuts() - Show keyboard shortcuts');
console.log('  removeTestContainer()   - Remove test images');
console.log('\n💡 Start with: runAllTests()');
