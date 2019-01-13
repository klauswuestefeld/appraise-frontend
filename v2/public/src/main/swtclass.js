document.getElementById("appraisals-tab").onclick = function() {appchange()};

function appchange() {
   document.getElementById('appraisals-tab').className = 'tab selected';
   document.getElementById('admin-tab').className = 'tab';
}

document.getElementById("admin-tab").onclick = function() {admchange()};

function admchange() {
   document.getElementById('appraisals-tab').className = 'tab';
   document.getElementById('admin-tab').className = 'tab selected';
}


/*function swtclass(){
    class1 = document.getElementById('tst').className; 
class1 = document.getElementById('tst').className;
    if(class1 == 'tab'){
       document.getElementById('tst').className = 'tab selected-tab';
   }else{
       document.getElementById('tst').className = 'tab';
   }
}*/

/*function switch1(){
       document.getElementById('appraisals-tab').className = 'tab selected';
       document.getElementById('admin-tab').className = 'tab';
};

function switch2(){
       document.getElementById('admin-tab').className = 'tab selected';
       document.getElementById('appraisals-tab').className = 'tab';
};/*

/*document.getElementById.onclick = function() {swtclass()};*/


/*	var el = document.getElementById('menu');
	el.addEventListener('click', function(e) {
	alert(e.target.id);
	if (e == 'admin-tab' ){
		document.getElementById('admin-tab').className = 'tab selected';
		document.getElementById('appraisals-tab').className = 'tab';
	else{
		document.getElementById('appraisals-tab').className = 'tab selected';
		document.getElementById('admin-tab').className = 'tab';}
	});
}); */	
		/*class1 = document.getElementById(clickid).className;
		if(class1 == 'tab'){
       		document.getElementById('tst').className = 'tab selected-tab';}
        else{
      	    document.getElementById('tst').className = 'tab';}*/

/*document.getElementById("appraisals-tab").addEventListener("click", change1);

document.getElementById("appraisals-tab").onlick = change1

function change1() {
	document.getElementById('appraisals-tab').className = 'tab selected';
	document.getElementById('admin-tab').className = 'tab';
}

document.getElementById("admin-tab").addEventListener("click", change2);

document.getElementById("admin-tab") = change2 

function change2() {
	document.getElementById('admin-tab').className = 'tab selected';
	document.getElementById('appraisals-tab').className = 'tab';
}*/


/*document.getElementById("admin-tab").onclick = function() {
	document.getElementById('admin-tab').className = 'tab selected';
	document.getElementById('appraisals-tab').className = 'tab';
};

document.getElementById("appraisals-tab").onclick = function() {
	document.getElementById('admin-tab').className = 'tab';
	document.getElementById('appraisals-tab').className = 'tab selected';
};*/


/*admin-tab.addEventListener('click', function confirmaSaida(e){
  confirm('Tem certeza de que quer sair?')
})*/

/*appraisals-tab.addEventListener('click',confirmaSaida1(),false)

function confirmaSaida1(e){
	alert('vtnc');
}

admin-tab.addEventListener('click',confirmaSaida(),false)

function confirmaSaida(el){
	alert('vtncddd');
}*/

