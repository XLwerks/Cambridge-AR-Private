/*
  This script displays the splash screen for 3 seconds
  It is only used on `index.html`
  `localStorage` is used to store the splash screen state
  If the splash screen has been displayed, it will not be displayed again
*/

// On first load; splash screen not yet seen
if (!localStorage.getItem('splash-seen')) {
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('splash').style.display = 'block';
    // Hide the splash screen after 3 seconds
    setTimeout(function () {
      document.getElementById('splash').style.display = 'none';
      // Store the splash screen state in `localStorage`
      localStorage.setItem('splash-seen', true);
    }, 3000);
  });
} else {
  // If the splash screen has been displayed, hide it
  document.getElementById('splash').style.display = 'none';
}
