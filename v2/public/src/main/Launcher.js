'use strict';

window.addEventListener('load', function() {
  createGhostCards();

  if (window.location.hash != ('#situation-certainty')){
    document.getElementById('certainty').classList.add('force-display-none');
  } 
  registerSituation('login', loginScreen);
  registerSituation('magic-login', magicLogScreen);
  registerSituation('logout', dropdownScreen);
  registerSituation('admin-empty', adminEmptyScreen);
  registerSituation('admin-filled', adminFilledScreen);
  registerSituation('admin-error', adminErrorScreen);
  registerSituation('admin-ok', adminOkScreen);
  registerSituation('appraise-empty', appraiseEmptyScreen);
  registerSituation('appraise-filled', appraiseFilledScreen);
  registerSituation('certainty', certaintyScreen);
  document.getElementById('easter-egg').ondblclick = function() {easterEgg()};

  Percy.initAuth();

  displayBody();

  scrollToLevel();
});
