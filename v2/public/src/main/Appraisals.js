'use strict';

console.log('CARREGOU');

function showAppraisals(appraisals) {
  appraiseEmptyScreen();
  appraisals.forEach((appraisal) => console.log(appraisal));
}