window.addEventListener("load", function() {
  scrollToLevel();
  document.getElementById("situation-appraisals-empty").onclick = function() {scrollToLevel()};
  document.getElementById("situation-appraisals-filled").onclick = function() {scrollToLevel()};
  });

  function scrollToLevel(){
  	var levelScroll = document.getElementById("id-your-level");
    levelScroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
  }
