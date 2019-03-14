window.addEventListener("load", function() {
  ScrollToLevel();
  });

  function ScrollToLevel(){
  	var levelScroll = document.getElementById("id-your-level");
    levelScroll.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
    console.log("Teste1");
  }
