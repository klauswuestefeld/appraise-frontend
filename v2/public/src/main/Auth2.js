
Percy.initAuth = function() {

    gapi.load('auth2', function() {
        Percy.auth2 = gapi.auth2.init({
            client_id: '902472309288-h34e3l0vo9e3bkr4dc29f4bco99q0t9s.apps.googleusercontent.com'
        });

        // auth2.attachClickHandler(
        //     element,
        //     {},
        //     onGoogleLoginSuccess,
        //     onGoogleLoginError
        // );

        Percy.auth2.then(function authThen() {

            var signedIn = Percy.auth2.isSignedIn.get();

            if (signedIn) {
                console.log(Percy.auth2.currentUser.get().getAuthResponse().id_token);
                var logged = document.getElementById("logged");
                logged.classList.add("show");
            } else {
                var login = document.getElementById("login");
                login.classList.add("show");
            }

        });

    });

};

Percy.loginClicked = function () {
    Percy.auth2.signIn();
};



Percy.authenticator = {

  login: function() {
      this.user = 1;
  },

  user: 0

};





