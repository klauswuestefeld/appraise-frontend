'use strict';

function changeTab(tabId) {
	if (tabId == 'appraisals-tab'){
	   document.getElementById('appraisals-tab').classList.add('selected');
	   document.getElementById('admin-tab').classList.remove('selected');
	   displaySituation('sit-appraisals');
	}
	else{
	   document.getElementById('appraisals-tab').classList.remove('selected');
	   document.getElementById('admin-tab').classList.add('selected');
	   displaySituation('sit-admin');
	}
}
