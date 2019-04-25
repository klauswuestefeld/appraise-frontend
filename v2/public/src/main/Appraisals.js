'use strict';

console.log('CARREGOU');

function showAppraisal(appraisal) {
	console.log(appraisal);
}

function showAppraisals(appraisals) {
  appraiseEmptyScreen();
  appraisals.forEach(showAppraisal);
}

