window.addEventListener("load", function() {
     document.getElementByTagName(textarea).onclick = function() {disableSave()};
});


function disableSave(){
	var texto = document.getElementByTagName(textarea);	
	if(texto.value.length == 0)	{
			alert("O campo deve ser preenchido");				
			textarea.focus();
			return false;	
    }
 }