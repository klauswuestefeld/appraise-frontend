'use strict';

function cloneTemplateAsCardOnLevel(appraisal) {
  var card = document.getElementById('id-card');
  var newCard = card.cloneNode(true);

  newCard.id = 'card-' + appraisal.email;
  newCard.childNodes[1].src = appraisal.picture;
  newCard.childNodes[3].innerHTML = appraisal.name;

  var certaintyElementIndex = 5;
  for(var certainty = 0.2; certainty <= appraisal.certainty; certainty += 0.2) {
		newCard.childNodes[certaintyElementIndex].classList.add('active');
		certaintyElementIndex+=2;
  }

  document.getElementById('cards-level' + appraisal.level).appendChild(newCard);

  newCard.classList.remove('force-display-none');
}

function showAppraisal(appraisal) {
	console.log(appraisal);
	cloneTemplateAsCardOnLevel(appraisal);
}

function showAppraisals(appraisals) {
  appraiseEmptyScreen();
  appraisals.forEach(showAppraisal);
  scrollToLevel();
}

function dragStart(event) {
  event.dataTransfer.setData("card-id", event.target.id);
}

function levelChanged(previousLevel, currentLevel) {
  if (previousLevel)
    previousLevel.classList.remove('drag-target');
  currentLevel.classList.add('drag-target');
}

var previousDragTarget;
function dragOver(event) {
  event.preventDefault();
  if (previousDragTarget == event.target)
    return;
  levelChanged(previousDragTarget, event.target);
  previousDragTarget = event.target;
}

function drop(event) {
  event.preventDefault();
  var id = event.dataTransfer.getData("card-id");
  event.target.appendChild(document.getElementById(id));
}
