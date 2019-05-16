'use strict';

var allAppraisals;
var currentAppraisal;

function refreshAppraisalCertainty() {
  var card = document.getElementById('card-' + currentAppraisal.email);

  var certaintyLevel;
  var certaintyIndex;

  certaintyLevel = 0;
  for (certaintyIndex = 1; certaintyIndex <= 4; certaintyIndex ++) {
    certaintyLevel += certaintyIndex;
    card.querySelector('#card-certainty-' + certaintyLevel).classList.remove('active');
  }

  certaintyIndex = 1;
  for (certaintyLevel = 1; certaintyLevel <= currentAppraisal.certainty; certaintyLevel += certaintyIndex) {
    card.querySelector('#card-certainty-' + certaintyLevel).classList.add('active');
    certaintyIndex ++;
  }
}

function showAppraisal(appraisal) {
  currentAppraisal = appraisal;

  var card = document.getElementById('card-template');
  var newCard = card.cloneNode(true);

  newCard.id = 'card-' + appraisal.email;

  if (appraisal.picture == undefined)
    appraisal.picture = 'https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png';

  newCard.childNodes[1].src = appraisal.picture;

  newCard.childNodes[3].innerHTML = appraisal.name;

  document.getElementById('cards-level' + appraisal.level).appendChild(newCard);

  refreshAppraisalCertainty();

  newCard.classList.remove('force-display-none');
}

function scrollToLevel(){
  var levelScroll = document.getElementById('id-your-level')
  levelScroll.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
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
