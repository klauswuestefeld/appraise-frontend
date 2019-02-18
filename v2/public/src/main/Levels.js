
window.addEventListener("load", function() {
    var i = 1;
    var all = 2;
    var myLevel = document.getElementById('id-level');  
    var spanLevel = document.getElementById('span-level');
    var appraisal = document.getElementById("appraisals")
    for (i = 1; i <= all; i++) {
      var levelClone   = myLevel.cloneNode(false);
      levelClone.id = "id-extra"+i;
      var pele = document.getElementById('id-level');
      appraisal.insertBefore(levelClone, pele); 
      var levelSpan   = spanLevel.cloneNode(true);
      levelClone.appendChild(levelSpan);
      levelSpan.innerHTML=i;  
      if (i == 1){
      	var card = document.getElementById('ret1');  
    	var newCard   = card.cloneNode(true);
    	document.getElementById("id-extra1").appendChild(newCard);
      }
    }

    for (i = 1; i <= 4; i++) {
      var card = document.getElementById('ret1');  
      var newCard   = card.cloneNode(true);
      document.getElementById("id-level").appendChild(newCard);
    }

    for (i = 1; i <= all; i++) {
      var levelClone   = myLevel.cloneNode(false);
      levelClone.id = "id-extra-"+i;
      appraisal.appendChild(levelClone); 
      var levelSpan = spanLevel.cloneNode(true);
      levelClone.appendChild(levelSpan);
      levelSpan.innerHTML=-i;
    }

    for (i=1; i <= 6; i++){
	    var card = document.getElementById('ret1');  
	    var newCard   = card.cloneNode(true);
	    document.getElementById("id-extra-1").appendChild(newCard);
    }

    for (i=1; i <= 3; i++){
	    var card = document.getElementById('ret1');  
	    var newCard   = card.cloneNode(true);
	    document.getElementById("id-extra-2").appendChild(newCard);
    }

    var newLevel = document.getElementById('id-new-level');  
    var newClone   = newLevel.cloneNode(true);
    document.getElementById("appraisals").appendChild(newClone);
});