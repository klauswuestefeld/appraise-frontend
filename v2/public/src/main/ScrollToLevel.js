window.addEventListener("load", function() {
  scrollToLevel();
  //document.getElementById("situation-appe").onclick = function() {scrollToLevel()};
  //document.getElementById("situation-appf").onclick = function() {scrollToLevel()};
  });

  window.addEventListener("unload", function() {
	console.log("jcjc");
  scrollToLevel();
  });

  function scrollToLevel(){
  	console.log("vasco");
  	var levelScroll = document.getElementById("id-your-level");
    levelScroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  }


