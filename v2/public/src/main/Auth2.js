"use strict";
var i = 1;


Percy.initAuth = function() {

    gapi.load('auth2', function() {
        try {
            Percy.auth2 = gapi.auth2.init({
                client_id: '696992508397-9pna2ebcfkt3olr2hukd9q95v21t1iud.apps.googleusercontent.com'
            });
            Percy.auth2.then(function onInit() {
                console.log("INIT. SignedIn:", Percy.auth2.isSignedIn.get());

                Percy.auth2.isSignedIn.listen(function onSignInChanged(isSignedIn) {
                    console.log("IS SIGNED IN:", isSignedIn);
                    console.log(Percy.auth2.currentUser.get().getAuthResponse().id_token);
                });
            });
        } catch (err) {
            console.log(err.message);
            if (err.message.includes("cookiePolicy"))
                console.log("Serve using http server to avoid this error.");
        }

        // auth2.attachClickHandler(
        //     element,
        //     {},
        //     onGoogleLoginSuccess,
        //     onGoogleLoginError
        // );
    });
};

Percy.loginClicked = function () {
    if (Percy.auth2.isSignedIn.get()) {
        console.log("SIGNED IN");
        Percy.auth2.signOut();
        console.log("AFTER SIGNOUT:", Percy.auth2.isSignedIn.get());
//        var logged = document.getElementById("logged");
//        logged.classList.add("show");
    } else {
        console.log("NOT SIGNED IN.");
        Percy.auth2.signIn();
        console.log("AFTER SIGN IN.");

//        var login = document.getElementById("login-button");
//        login.classList.add("show");
    }

};



Percy.authenticator = {

  login: function() {
      this.user = 1;
  },

  user: 0

};
