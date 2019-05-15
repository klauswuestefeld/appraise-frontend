'use strict';

var allAppraisals;
var currentAppraisal;

function cloneTemplateAsCardOnLevel(appraisal) {
  var card = document.getElementById('card-template');
  var newCard = card.cloneNode(true);

  newCard.id = 'card-' + appraisal.email;

  if (appraisal.picture == undefined)
    appraisal.picture = 'https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png';

  newCard.childNodes[1].src = appraisal.picture;

  newCard.childNodes[3].innerHTML = appraisal.name;

  var certaintyElementIndex = 5;
  for(var certainty = 0.2; certainty <= appraisal.certainty; certainty += 0.2) {
    if (certainty == 1) break;
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
  allAppraisals = appraisals;
  displaySituation('sit-appraisals');
  appraisals.forEach(showAppraisal);
  scrollToLevel();
}

function dragStart(event) {
  event.dataTransfer.setData('card-id', event.target.id);
  console.log(event.target.id);
}

function levelChanged(previousLevel, currentLevel) {
  if (previousLevel)
    previousLevel.classList.remove('drag-target');
  currentLevel.classList.add('drag-target');
}

var previousDragTarget;
function dragOver(event) {
  var evTarget = event.target.id;
  if (evTarget.startsWith('cards-level')) {
    event.preventDefault();
    if (previousDragTarget == event.target)
      return;
    levelChanged(previousDragTarget, event.target);
    previousDragTarget = event.target;
  }
}

function drop(event) {
  var cardId = event.dataTransfer.getData('card-id');
  var card = document.getElementById(cardId);
  var appraiseId = cardId.substring(5);
  var appraiseCertainty = card.getElementsByClassName('active').length * 0.2;
  var appraiseLevel = event.target.id.substring(11);
  backendPost(
    'appraise', 
    '{"certainty":' + appraiseCertainty + ',"appraised":"' + appraiseId + '","level":' + appraiseLevel + '}', 
    function(response) {
      event.preventDefault();
      event.target.appendChild(card);
      event.target.classList.remove('drag-target');
    });
}

function fetchAppraisals() {
  backendGet('appraisals', showAppraisals);
}
