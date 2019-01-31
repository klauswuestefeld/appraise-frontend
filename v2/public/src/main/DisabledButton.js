window.addEventListener("load", function() {
     document.getElementById("saveButton2").onclick = function() {disableSave()};
     document.getElementById("saveButton3").onclick = function() {redSave()};
     document.getElementById("saveButton4").onclick = function() {greenSave()};
     document.getElementById("redText").style.display="none";
     document.getElementById("greenText").style.display="none";
});


function disableSave(){
	var texto = document.getElementById("caixaTexto");	
	if(texto.value.length == 0)	{
			alert("O campo deve ser preenchido");					
			document.getElementById("saveButton2").disabled = true;
    }
}

function redSave(){
 	var botaoVermelho = document.getElementById("redText");
 	botaoVermelho.style.display="inline";
}

function greenSave(){
 	var botaoVerde = document.getElementById("greenText");
 	botaoVerde.style.display="inline";
}