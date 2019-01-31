window.addEventListener("load", function() {
	document.getElementById("").onclick = function() {disableSave()};
	for (iLoop = 1; iLoop <= totalCampos; iLoop++) {
        document.write("<div id='div"+iLoop+"' class='normal'></div>");}
});