
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
                backendAuth(Percy.auth2.currentUser.get().getAuthResponse().id_token);
                Percy.auth2.signOut();
            } else {
                console.log("Abrindo SignIn...");
                Percy.auth2.signIn();
            }

        });

    });

    function backendAuth(token) {
        var req = new XMLHttpRequest();
        req.open("GET", 'auth-google?google-id-token=' + token);
        req.responseType = "json";
        req.timeout = 5000;
        req.onload = function () {
            if (req.status === 200) console.log(req.response);
            else req.onerror();
        };
        req.onerror = req.ontimeout = function () {
           console.log('Error', req.status, req.statusText);
        };
        req.send();
    }

};
