window.addEventListener("load", function() {
	setTimeout (function () {
  	scrollToLevel();
  }, 100);
});

function scrollToLevel(){
	var levelScroll = document.getElementById("id-your-level");
  levelScroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
}
