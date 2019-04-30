'use strict';

var Situations = {};
Situations.all = [];
Situations.index = -1;

function nextSituation(direction) {
  Situations.index = (Situations.index + direction) % Situations.all.length;
  if (Situations.index == -1)
    Situations.index = Situations.all.length -1;
  window.location.hash = Situations.all[Situations.index];
}

function checkKey(e) {
    e = e || window.event;
    console.log('ALT:' + e.altKey,e.ctrlKey, e.keyCode);
    if (!e.ctrlKey) return;
    if (!e.altKey) return;
    if (e.keyCode == '188') { // ',' key
      if (Situations.index == -1)
        Situations.index = 0;
      nextSituation(-1);
    }
    if (e.keyCode == '190') { // '.' key
      nextSituation(1);
    }
  }

function findSituations(result, element) {
  var classes = element.classList || [];
  classes.forEach(function (clazz) {
    if (clazz.startsWith('sit-'))
      result.push(clazz);
  });
  element.childNodes.forEach(function (child) {
    findSituations(result, child);
  });
}

function displaySituation(situation) {
  document.body.childNodes.forEach(function (element) {
    console.log('REMOVING', element, element.id);
    document.body.removeChild(element);
  });
  document.getElementById('situation-template').childNodes.forEach(function (element) {
    console.log('MOVING', element, element.id);
    document.body.appendChild(element);
  });

}

function displayBody() {
    document.getElementsByTagName('body')[0].classList.remove('force-display-none');
}

function initSituations(onLoadWithoutSituationHash) {
  Situations.onLoadWithoutSituationHash = onLoadWithoutSituationHash;
}

window.addEventListener('load', function() {

  findSituations(Situations.all, document.body);

  document.onkeydown = checkKey;
  if (window.location.hash.startsWith('#sit-'))
    displaySituation(window.location.hash);

  displayBody();

  if (window.location.hash != ('#situation-certainty'))
    document.getElementById('certainty').classList.add('force-display-none');
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

  Situations.onLoadWithoutSituationHash();
});
