import Router from 'next/router'
import { get } from '../../utils/api'

export default class AuthService {
  getToken() {
    const session = JSON.parse(window.localStorage.getItem('session'))
    return session && session.token
  }

  getSession() {
    return JSON.parse(window.localStorage.getItem('session'))
  }

  isLogged() {
    return !!this.getToken()
  }

  checkSession() {
    if (!this.isLogged()) Router.push('/login')
  }

  login(session) {
    window.localStorage.setItem('session', JSON.stringify(session))
    get('api/team-profiles', null, this.getToken())
      .then(response => {
        if (response['is-admin'] === false && response.admin !== null) {
          Router.push('/appraisals')
        } else {
          session.isAdmin = true
          window.localStorage.setItem('session', JSON.stringify(session))
          Router.push('/admin')
        }
      })
      .catch(() => this.logout())
  }

  logout() {
    window.localStorage.clear()
    Router.push('/login')
  }

  auth(googleToken) {
    get(`auth-google?google-id-token=${googleToken}`)
      .then(({ message }) => {
        gapi.auth2.getAuthInstance().signOut()
        this.login(message)
      })
      .catch(error => console.error(error))
  }
}
