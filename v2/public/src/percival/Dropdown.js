'use strict';

function dropdownProfile() {
  console.log('DROPDOWN', document.getElementById('profile-dropdown'));
  document.getElementById('profile-dropdown').classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.drop-button')) {
    var dropdowns = document.getElementsByClassName('dropdown-list');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}