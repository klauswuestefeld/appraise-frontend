export default function loadAuthAndAttachToButton(
  element,
  onGoogleLoginSuccess,
  onGoogleLoginError
) {
  gapi.load('auth2', function() {
    const auth2 = gapi.auth2.init({
      client_id:
        '902472309288-h34e3l0vo9e3bkr4dc29f4bco99q0t9s.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin'
    })
    auth2.attachClickHandler(
      element,
      {},
      onGoogleLoginSuccess,
      onGoogleLoginError
    )
  })
}
