'use strict';

function refreshNotAdmin(teamProfiles) {
	displaySituation('sit-not-admin');
	document.getElementById('error-text').innerHTML = 'You are already in a team, with administrator: ' + teamProfiles.admin;
}

function refreshAdmin(teamProfiles) {
	teamProfiles['is-admin'] ? displaySituation('sit-admin') : refreshNotAdmin(teamProfiles);
}

function changeTab(tabId) {
	if (tabId == 'appraisals-tab'){
	   document.getElementById('appraisals-tab').classList.add('selected');
	   document.getElementById('admin-tab').classList.remove('selected');
	   refreshAllAppraisals();
	}
	else{
	   document.getElementById('appraisals-tab').classList.remove('selected');
	   document.getElementById('admin-tab').classList.add('selected');
	   backendGet('team-profiles', refreshAdmin);
	}
}
