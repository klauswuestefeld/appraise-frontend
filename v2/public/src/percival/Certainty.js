'use  strict';

function showModal(clickedCardId) {
	var certaintyModal = document.getElementById('certainty-modal');
	certaintyModal.classList.remove('force-display-none');

	var appraiseId = clickedCardId.substring(5); //email
  currentAppraisal = allAppraisals.find(function(eachAppraisal) {
  	return eachAppraisal.email == appraiseId 
  });

  var appraiseName = currentAppraisal.name;
  var appraiseLevel = currentAppraisal.level;
  var appraiseCertainty = currentAppraisal.certainty;
  var appraisePicture = currentAppraisal.picture;

  document.getElementById('certainty-person-name').innerHTML = appraiseName;
  document.getElementById('certainty-person-picture').src = appraisePicture;
  document.getElementById('certainty-' + appraiseCertainty).classList.add('active');
}

window.addEventListener("click", function (){
	var certaintyModal = document.getElementById('certainty-modal');
	if (event.target == certaintyModal) {
    document.getElementById('certainty-modal').classList.add('force-display-none');
    document.getElementById('certainty-person-name').innerHTML = 'Person\'s Name';
    document.getElementById('certainty-person-picture').src = 'https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png';
  	document.getElementById('certainty-0').classList.remove('active');
  	document.getElementById('certainty-0.2').classList.remove('active');
  	document.getElementById('certainty-0.4').classList.remove('active');
  	document.getElementById('certainty-0.6').classList.remove('active');
  	document.getElementById('certainty-0.8').classList.remove('active');
  }
});

function certaintyClicked(certaintyId){
  currentAppraisal.certainty = certaintyId.substring(10);

  var appraiseId = currentAppraisal.email;
  var appraiseLevel = currentAppraisal.level;
	var appraiseCertainty = currentAppraisal.certainty;
	backendPost(
		'appraise', 
		'{"certainty":' + appraiseCertainty + ',"appraised":"' + appraiseId + '","level":' + appraiseLevel + '}', 
		function(response) {
			document.getElementById('certainty-modal').classList.add('force-display-none');
		});
}