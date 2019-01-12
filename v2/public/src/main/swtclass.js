/*function swtclass(){
    class1 = document.getElementById('tst').className; 
class1 = document.getElementById('tst').className;
    if(class1 == 'tab'){
       document.getElementById('tst').className = 'tab selected-tab';
   }else{
       document.getElementById('tst').className = 'tab';
   }
}*/

function switch1(){
	class1 = document.getElementById('bar1').className; 
	if(class1 == 'tab'){
       document.getElementById('bar1').className = 'tab selected-tab';
       document.getElementById('bar2').className = 'tab';
   }
};

function switch2(){
	class2 = document.getElementById('bar2').className; 
	if(class2 == 'tab'){
       document.getElementById('bar2').className = 'tab selected-tab';
       document.getElementById('bar1').className = 'tab';
   }
};

/*document.getElementById.onclick = function() {swtclass()};*/
/*alert("goool");

	var el = document.getElementById('menu');
	el.addEventListener('click', function(e) {
	alert(e.target.id);
	if (e == 'bar1' ){
		document.getElementById('bar1').className = 'tab selected-tab';
		document.getElementById('bar2').className = 'tab';
	else{
		document.getElementById('bar2').className = 'tab selected-tab';
		document.getElementById('bar1').className = 'tab';}
	});
}); */	
		/*class1 = document.getElementById(clickid).className;
		if(class1 == 'tab'){
       		document.getElementById('tst').className = 'tab selected-tab';}
        else{
      	    document.getElementById('tst').className = 'tab';}*/




