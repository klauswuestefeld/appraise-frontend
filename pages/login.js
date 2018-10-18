import React from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import AuthService from '../components/common/AuthService'
import css from '../theme/variables'
import { flexGroup } from '../theme/utils'
import Layout from '../components/base/layout/layout'
import loadAuthAndAttachToButton from '../components/common/gapi'
import MagicLogin from '../components/magicLogin/'

const LoginContainer = styled.div`
  ${flexGroup('center', 'column', 'center')};
  height: 80vh;
  transition: all 0.25s ease-in-out;
`

const StyledIcon = styled.i`
  background: url('/static/images/icon-google.svg') 10px / contain no-repeat;
  border-right: 1px solid ${css.color.white};
  display: inline-block;
  height: 25px;
  margin-right: 15px;
  padding-right: 15px;
  width: 50px;
`

const ImageGoogleButton = styled.div`
  ${flexGroup('center', 'row', 'center')};
  background: #dd5240;
  border-radius: 2px;
  color: ${css.color.white};
  font-size: 16px;
  height: 40px;
  width: 300px;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`

const TextInfo = styled.p`
  text-align: center;
`

export default class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      googleToken: null,
      isAuthenticating: false
    }

    this.authService = new AuthService()

    this.onGoogleLoginSuccess = this.onGoogleLoginSuccess.bind(this)
    this.onGoogleLoginError = this.onGoogleLoginError.bind(this)
  }

  componentDidMount() {
    if (this.authService.isLogged()) {
      Router.push('/appraisals')
    }
  }

  onGoogleLoginSuccess(googleUser) {
    this.setState({ googleToken: googleUser.getAuthResponse().id_token })
  }

  onGoogleLoginError() {}

  componentDidUpdate() {
    const { googleToken, isAuthenticating } = this.state

    if (googleToken && !isAuthenticating) {
      this.setState({ isAuthenticating: true })
      this.authService.auth(this.state.googleToken)
    }
  }

  render() {
    const { googleToken } = this.state
    return (
      <div>
        <Layout showMenu={false} {...this.props}>
          {googleToken ? (
            <LoginContainer>
              <TextInfo>Authenticating...</TextInfo>
            </LoginContainer>
          ) : (
            <LoginContainer>
              <MagicLogin />
              <TextInfo>or</TextInfo>
              <ImageGoogleButton
                innerRef={input => {
                  loadAuthAndAttachToButton(
                    input,
                    this.onGoogleLoginSuccess,
                    this.onGoogleLoginError
                  )
                }}
              >
                <StyledIcon />
                Sign in with Google
              </ImageGoogleButton>
            </LoginContainer>
          )}
        </Layout>
      </div>
    )
  }
}
