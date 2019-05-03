'use strict';

const Situations = {};
Situations.names = [];

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

function refreshSituation() {
  const situation = Situations.names[Situations.index];
  window.location.hash = situation;
  displaySituation(situation);
}

function nextSituation(direction) {
  Situations.index = (Situations.index + Situations.names.length + direction) % Situations.names.length;
  refreshSituation();
}

// Alt+< and Alt+> keys
function onSituationKey(e) {
  e = e || window.event;
  if (!e.altKey)  return;
  if (e.keyCode == '188') nextSituation(-1);
  if (e.keyCode == '190') nextSituation( 1);
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
    const name = window.location.hash.substr(1);
    Situations.index = Situations.names.indexOf(name);
    if (Situations.index == -1) Situations.index = 0;
    refreshSituation();
  }
}

function defaultSituation(situation) {
  if (!Situations.isActive())
    window.location.hash = situation;

  initSituations();
}
