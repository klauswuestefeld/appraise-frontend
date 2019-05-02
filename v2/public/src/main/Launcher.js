'use strict';

window.addEventListener('load', function() {
  if (!Situations.isActive())
    Percy.initAuth();
});
