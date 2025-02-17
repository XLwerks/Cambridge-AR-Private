/*
  This script displays the disclaimer screen when the user first visits the Locations page. 
  It is only used on `locations.html`
  `localStorage` is used to store the disclaimer screen state
  If the disclaimer screen has been displayed, it will not be displayed again. 
  The user must click the "I agree" button to hide the disclaimer screen.
*/

// On first load; disclaimer screen not yet seen
if (!localStorage.getItem('disclaimer-agreed')) {
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('disclaimer').style.display = 'block';
    // Hide the disclaimer screen when the user clicks the "I agree" button
    document.getElementById('disclaimer-agree-button').addEventListener('click', function () {
      document.getElementById('disclaimer').style.display = 'none';
      console.log('Agreed to disclaimer');
      localStorage.setItem('disclaimer-agreed', true);
    });
  });
} else {
  // If the disclaimer has alteady been agreed to, hide it
  document.getElementById('disclaimer').style.display = 'none';
}