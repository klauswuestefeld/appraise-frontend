'use strict';

function cloneTemplateAsGhostCardOnLevel(cardIndex, level) {
  var card = document.getElementById('id-card');
  var newCard = card.cloneNode(true);
  newCard.id = 'ghost-card' + cardIndex;
  document.getElementById(level).appendChild(newCard);
}

function createGhostCards() {
	var cardIndex = 0;
  cloneTemplateAsGhostCardOnLevel(cardIndex, 'cards-level2');

  for (cardIndex = 1; cardIndex <= 29; cardIndex++) {
    cloneTemplateAsGhostCardOnLevel(cardIndex, 'cards-level0');
  }

  for (cardIndex=30; cardIndex <= 36; cardIndex++) {
    cloneTemplateAsGhostCardOnLevel(cardIndex, 'cards-level-1');
  }

  for (cardIndex = 37; cardIndex <= 39; cardIndex++) {
    cloneTemplateAsGhostCardOnLevel(cardIndex, 'cards-level-2');
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
