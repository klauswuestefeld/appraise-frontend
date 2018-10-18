import { Component } from 'react'
import styled from 'styled-components'
import Router from 'next/router'
import Layout from '../components/base/layout/layout'
import css from '../theme/variables'

export default class Magic extends Component {
  static getInitialProps({ query: { email } }) {
    return { email }
  }

  componentDidMount() {
    if (!this.props.email) {
      Router.push('/login')
    }
  }

  render() {
    const { email } = this.props
    return (
      <Layout showMenu={false}>
        <StyledWapper>
          <StyledInstruction>A magic link has been sent to</StyledInstruction>
          <StyledEmail>{email}</StyledEmail>
          <StyledInstruction>
            Use it to log in to AppRaise from any device.
          </StyledInstruction>
          <StyledInstruction>
            If you did not receive the email after a few minutes, please let us
            know. Look in your spam folder too.
          </StyledInstruction>
        </StyledWapper>
      </Layout>
    )
  }
}

const StyledWapper = styled.div`
  left: 50%;
  max-width: calc(100% - 40px);
  position: absolute;
  text-align: center;
  top: 40%;
  transform: translateY(-50%) translateX(-50%);
  width: 500px;
`

const StyledEmail = styled.h2`
  color: ${css.color.orange};
  font-size: 18px;
`

const StyledInstruction = styled.p`
  font-size: 16px;
  margin: 8px 0;
`
