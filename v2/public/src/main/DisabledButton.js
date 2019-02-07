window.addEventListener("load", function() {
     document.getElementById("saveButton2").onclick = function() {disableSave()};
     document.getElementById("saveButton3").onclick = function() {errorSave()};
     document.getElementById("saveButton4").onclick = function() {okSave()};
     //document.getElementById("error-text-id").style.display="none";
     //document.getElementById("ok-text-id").style.display="none";
});


/*function disableSave(){
	var texto = document.getElementById("caixa-texto");	
	if(texto.value.length == 0)	{
			alert("O campo deve ser preenchido");					
			document.getElementById("save-button2").disabled = true;
    }
}

function okSave(){
 	var botaoVermelho = document.getElementById("error-text-id");
 	botaoVermelho.style.display="inline";
}

function greenSave(){
 	var botaoVerde = document.getElementById("ok-text-id");
 	botaoVerde.style.display="inline";
}*/