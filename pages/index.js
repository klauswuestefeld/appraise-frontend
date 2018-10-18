import { Component } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import Layout from '../components/base/layout/layout'
import AuthService from '../components/common/AuthService'

export default class Index extends Component {
  componentDidMount() {
    const auth = new AuthService()
    if (auth.isLogged()) {
      Router.push('/appraisals')
    } else {
      Router.push('/login')
    }
  }

  render() {
    return (
      <Layout showMenu={false} {...this.props}>
        <StyledWapper>Loading</StyledWapper>
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
