'use strict';

function scrollToLevel(){
	var levelScroll = document.getElementById('id-your-level')
  levelScroll.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
}
