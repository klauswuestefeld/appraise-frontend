'use strict';

function cloneTemplateAsGhostCardOnLevel(cardIndex, level) {
  var card = document.getElementById('id-card');
  var newCard = card.cloneNode(true);
  newCard.id = 'ghost-card' + cardIndex;
  document.getElementById(level).appendChild(newCard);
}

function setCertaintyOnGhostCard(expectedCertaintyIndex, cardIndex){
  var certainty = document.getElementsByClassName('certainty-icon').item(0);
  for (var certaintyIndex = 2; certaintyIndex <= expectedCertaintyIndex; certaintyIndex++){
    var newCertainty = certainty.cloneNode(true);
    document.getElementById('ghost-card' + cardIndex).appendChild(newCertainty);
  }
}

function createGhostCards() {
	var cardIndex = 0;
  cloneTemplateAsGhostCardOnLevel(cardIndex, 'keep+2');
	setCertaintyOnGhostCard(5, cardIndex);

  for (cardIndex = 1; cardIndex <= 29; cardIndex++) {
    cloneTemplateAsGhostCardOnLevel(cardIndex, 'keep-your');
    setCertaintyOnGhostCard(3, cardIndex);
  }

  for (cardIndex=30; cardIndex <= 36; cardIndex++) {
    cloneTemplateAsGhostCardOnLevel(cardIndex, 'keep-1');
    setCertaintyOnGhostCard(1, cardIndex);
  }

  for (cardIndex = 37; cardIndex <= 39; cardIndex++) {
    cloneTemplateAsGhostCardOnLevel(cardIndex, 'keep-2');
    setCertaintyOnGhostCard(4, cardIndex);
  }

  document.getElementById('ghost-card7').classList.add('dragging-card');
}

function hideGhostsCards(){
  for (var i = 0; i <= 39; i++){
    document.getElementById('ghost-card'+i).classList.add('force-display-none');
  }
}

function showGhostsCards(){
  for (var i = 0; i <= 39; i++){
    document.getElementById('ghost-card'+i).classList.remove('force-display-none');
  }
}
