'use strict';

const Situations = {};
Situations.names = [];
Situations.index = -1;

function clearBody() {
  const elementsCopy = Array.from(document.body.childNodes);
  elementsCopy.forEach(function (element) {
    document.body.removeChild(element);
  });
}

function isIncluded(situation, element) {
  if (!element.classList) return true;
  const classes = Array.from(element.classList).filter(function (clazz) {
    return clazz.startsWith('sit-');
  });
  if (classes.length == 0) return true;
  return (classes.find(function (clazz) {
    return situation.startsWith(clazz);
  }));
}


// https://dictionary.cambridge.org/dictionary/english/prune TODO Delete this line.
function prune(situation, element) {
  if (isIncluded(situation, element))
    element.childNodes.forEach(function (child) { prune(situation, child); });
  else
    element.parentElement.removeChild(element);
}

function displaySituation(situation) {
  clearBody();
  Situations.bodyElements.forEach(function (element) {
    const clone = element.cloneNode(true);
    document.body.appendChild(clone);
    prune(situation, clone);
  });
}

function nextSituation(direction) {
  Situations.index = (Situations.index + direction) % Situations.names.length;
  if (Situations.index == -1)
    Situations.index = Situations.names.length -1;
  const situation = Situations.names[Situations.index];
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

function findSituationNames(result, element) {
  var classes = element.classList || [];
  classes.forEach(function (clazz) {
    if (clazz.startsWith('sit-') && !result.includes(clazz))
      result.push(clazz);
  });
  element.childNodes.forEach(function (child) {
    findSituationNames(result, child);
  });
}

Situations.isActive = function () {
  return window.location.hash.startsWith('#sit-')
}

function initSituations() {
  findSituationNames(Situations.names, document.body);

  Situations.bodyElements = Array.from(document.body.childNodes);
  clearBody();

  if (Situations.isActive()) {
    document.onkeydown = onSituationKey;
    displaySituation(window.location.hash.substr(1));
}

initSituations();
