import { Component } from 'react'
import AuthService from './AuthService'

export default function withAuth(MainComponent) {
  const auth = new AuthService()
  return class Authenticated extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoading: true
      }
    }

    componentDidMount() {
      auth.checkSession()
      this.setState({ isLoading: false })
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <div>LOADING....</div>
          ) : (
            <MainComponent {...this.props} />
          )}
        </div>
      )
    }
  }
}
