'use strict';

var Situations = {};
Situations.names = [];
Situations.index = -1;

function clearBody() {
  const elementsCopy = Array.from(document.body.childNodes);
  elementsCopy.forEach(function (element) {
    document.body.removeChild(element);
  });
}

function displaySituationForChildren(situation, element){
    var hasNoClass = !element.classList;
    var hasCurrentSitClass = element.classList && element.classList.contains(situation);
    var hasNoSitClass = !(element.classList && Array.from(element.classList).find(function (clazz) {
      return clazz.startsWith("sit-");
    }));
    if (!(hasNoClass || hasCurrentSitClass || hasNoSitClass)) {
      element.parentElement.removeChild(element);
    } else {
      element.childNodes.forEach(function (child) {
        displaySituationForChildren(situation, child);
      });
    }
}

function displaySituation(situation) {
  console.log(situation);
  clearBody();
  Situations.templates.forEach(function (element) {
    var clonedElement = element.cloneNode(true);
    document.body.appendChild(clonedElement);
    displaySituationForChildren(situation, clonedElement);
  });
}

function nextSituation(direction) {
  Situations.index = (Situations.index + direction) % Situations.names.length;
  if (Situations.index == -1)
    Situations.index = Situations.names.length -1;
  var situation = Situations.names[Situations.index];
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
    if (clazz.startsWith('sit-') && !result.includes(clazz))
      result.push(clazz);
  });
  element.childNodes.forEach(function (child) {
    findSituations(result, child);
  });
}

Situations.isActive = function () {
  return window.location.hash.startsWith('#sit-')
}

function initSituations() {
  findSituations(Situations.names, document.body);

  Situations.templates = Array.from(document.body.childNodes);
  clearBody();

  document.onkeydown = onSituationKey;

  if (Situations.isActive())
    displaySituation(window.location.hash.substr(1));
}

initSituations();
