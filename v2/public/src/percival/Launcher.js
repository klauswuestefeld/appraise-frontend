'use strict';

function initLauncher() {
  console.log('INIT LAUNCHER');
  if (Situations.isActive())
    return;

  const clientId = '902472309288-h34e3l0vo9e3bkr4dc29f4bco99q0t9s.apps.googleusercontent.com' //Appraise
  // const clientId = '696992508397-9pna2ebcfkt3olr2hukd9q95v21t1iud.apps.googleusercontent.com' //Percival

  initAuth(clientId, onUserChanged);
}

