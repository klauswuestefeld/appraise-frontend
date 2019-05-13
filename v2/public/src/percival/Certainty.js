'use  strict';

function showModal(clickedId){
	var notModalContent = document.getElementById('certainty');
	notModalContent.classList.remove('force-display-none');
	console.log(clickedId);
	// event.dataTransfer.setData('card-id', event.target.id);
	// var cardId = event.dataTransfer.getData('card-id');
  var card = document.getElementById(clickedId);
  var appraiseId = clickedId.substring(5);
  var namePerson = document.getElementById('name-person');
  var cardName= namePerson.textContent;
  var appraiseCertainty = card.getElementsByClassName('active').length * 0.2;
  //var appraiseLevel = event.target.id.substring(11);
  console.log(cardName,appraiseId,appraiseCertainty);
}

window.addEventListener("click", function (){
	var notModalContent = document.getElementById('certainty');
	if (event.target == notModalContent) {
    document.getElementById('certainty').classList.add('force-display-none');
  }
});