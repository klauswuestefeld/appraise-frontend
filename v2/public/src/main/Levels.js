"use strict";
window.addEventListener("load", function() {
	otherLevels();
  if (window.location.hash == ("#situation-appraisals-empty")){
    noGhostCards();
  }
});
  
function otherLevels(){
	var i = 1;
    var increasing = 10;
    var decreasing = 1;
    var myLevel = document.getElementById('id-level');
    var spanLevel = document.getElementById('span-level');
    var appraisal = document.getElementById("appraisals")

    var card = document.getElementById('id-card');
  	var newCard = card.cloneNode(true);
   	document.getElementById("keep+2").appendChild(newCard);
	      
    for (i=0; i<5;i++){
      var certainty = document.getElementById("id-certainty-icon");
      var newCertainty   = certainty.cloneNode(true);
      document.getElementById("id-card").appendChild(newCertainty);
    }

    for (i = 1; i <= 29; i++) {
      var card = document.getElementById('id-card');
      var newCard   = card.cloneNode(true);
	      if (i == 1){
	      	document.getElementById("id-card").classList.add("dragging-card");
	      }
	      document.getElementById("keep-your").appendChild(newCard);
	      if (i > 1){
	 		document.getElementById("id-card").classList.remove("dragging-card"); //TODO: Is this really necessary?
	      	newCard.id = "ghost-card"+i;
	      }
    }

    /*for (i = 1; i <= increasing; i++) {
      document.getElementById("id-level").classList.remove("drag-target");
      var levelClone   = myLevel.cloneNode(false);
      levelClone.id = "id-extra-"+i;
      appraisal.appendChild(levelClone);
      var levelSpan = spanLevel.cloneNode(true);
      levelClone.appendChild(levelSpan);
      levelSpan.innerHTML=-i;
    }*/

	    for (i=1; i <= 6; i++){
		    var card = document.getElementById('id-card');
		    var newCard   = card.cloneNode(true);
		    document.getElementById("keep-1").appendChild(newCard);
	    }

	    for (i=1; i <= 3; i++){
		    var card = document.getElementById('id-card');
		    var newCard   = card.cloneNode(true);
		    document.getElementById("keep-2").appendChild(newCard);
	    }

}

function noGhostCards(){
      for (var i = 2; i <= 29; i++){
        document.getElementById("ghost-card"+i).classList.add('force-display-none');
      }
}

function yesGhostCards(){
      for (var i = 2; i <= 29; i++){
        document.getElementById("ghost-card"+i).classList.remove('force-display-none');
      }
}
