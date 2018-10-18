import AuthService from '../components/common/AuthService'
const HEADER = { 'Content-Type': 'application/json' }

const API_URL = () => {
  const host = window.location.hostname
  if (host === 'localhost') return 'http://localhost:8080'
  else return `http://api.${window.location.hostname}`
}

const setAuthorization = () => ({
  auth: new AuthService().getToken(),
  ...HEADER
})

const api = (method, url, data, token) => {
  const headers = token ? setAuthorization(token) : HEADER
  const body = data ? JSON.stringify(data) : undefined
  return fetch(`${API_URL()}/${url}`, { method, headers, body })
    .then(async response => {
      try {
        return {
          message: JSON.parse(await response.text()),
          status: response.status
        }
      } catch (err) {
        return Promise.reject(response)
      }
    })
    .then(response => response)
}

export default api
export const get = api.bind(null, 'get')
export const put = api.bind(null, 'put')
export const post = api.bind(null, 'post')
