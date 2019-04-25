'use strict';

function cloneTemplateAsCardOnLevel(cardName, level,picture) {
  var card = document.getElementById('id-card');
  var newCard = card.cloneNode(true);
  newCard.classList.remove('force-display-none');
  newCard.id = 'card-' + cardName;
  document.getElementById(level).appendChild(newCard);
}

function showAppraisal(appraisal) {
	console.log(appraisal);
	cloneTemplateAsCardOnLevel(appraisal.name,'keep-your',appraisal.picture);
}

function showAppraisals(appraisals) {
  appraiseEmptyScreen();
  appraisals.forEach(showAppraisal);
}

