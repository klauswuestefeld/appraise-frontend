'use strict';

window.addEventListener('load', function() {
  initSituations(function() {
    Percy.initAuth();
    scrollToLevel();
  });
});

