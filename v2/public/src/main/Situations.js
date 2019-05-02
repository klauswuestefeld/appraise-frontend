'use strict';

var Situations = {};
Situations.all = [];
Situations.index = -1;

function clearBody() {
  const elementsCopy = Array.from(document.body.childNodes);
  elementsCopy.forEach(function (element) {
    document.body.removeChild(element);
  });
}

function displaySituation(situation) {
  console.log(situation);
  clearBody();
  Situations.templates.forEach(function (element) {
    var hasNoClass = !element.classList;
    var hasCurrentSitClass = element.classList && element.classList.contains(situation);
    var hasNoSitClass = !(element.classList && Array.from(element.classList).find(function (clazz) {
      return clazz.startsWith("sit-");
    }));
    if (hasNoClass || hasCurrentSitClass || hasNoSitClass)
      document.body.appendChild(element);
  });
}

function nextSituation(direction) {
  Situations.index = (Situations.index + direction) % Situations.all.length;
  if (Situations.index == -1)
    Situations.index = Situations.all.length -1;
  var situation = Situations.all[Situations.index];
  window.location.hash = situation;
  displaySituation(situation);
}

function onSituationKey(e) {
    e = e || window.event;
    if (!e.altKey)  return;
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

function displayBody() {
    document.getElementsByTagName('body')[0].classList.remove('force-display-none');
}

function initSituations(onLoadWithoutSituationHash) {
  Situations.onLoadWithoutSituationHash = onLoadWithoutSituationHash;
  findSituations(Situations.all, document.body);

    Situations.templates = Array.from(document.body.childNodes);
    clearBody();
    displayBody();

    document.onkeydown = onSituationKey;

    if (window.location.hash.startsWith('#sit-'))
      displaySituation(window.location.hash.substr(1));
    else
      Situations.onLoadWithoutSituationHash();
}


