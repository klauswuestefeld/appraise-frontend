'use strict';

function showAppraisal(appraisal) {
	console.log(appraisal);
}

function showAppraisals(appraisals) {
  appraiseEmptyScreen();
  appraisals.forEach(showAppraisal);
}

