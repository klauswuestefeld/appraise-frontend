'use  strict'

function showModal(){
	var notModalContent = document.getElementById('certainty');
	notModalContent.classList.remove('force-display-none');
}

window.addEventListener("click", function (){
	var notModalContent = document.getElementById('certainty');
	if (event.target == notModalContent) {
    document.getElementById('certainty').classList.add('force-display-none');
  }
});