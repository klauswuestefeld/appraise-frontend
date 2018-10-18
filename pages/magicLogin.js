import { Component } from 'react'
import styled from 'styled-components'
import { get } from '../utils/api'
import AuthService from '../components/common/AuthService'
import Layout from '../components/base/layout/layout'

export default class Magic extends Component {
  static getInitialProps({ query: { token } }) {
    return { token }
  }

  constructor(props) {
    super(props)
    this.authService = new AuthService()

    this.state = {
      error: false
    }
  }

  componentDidMount() {
    const { token } = this.props
    get(`auth-magic?token=${token}`)
      .then(({ message }) => this.authService.login(message))
      .catch(() => this.setState({ error: true }))
  }

  render() {
    const { error } = this.state
    return (
      <Layout>
        <StyledWapper>
          {error ? (
            <StyledInstruction>User not found</StyledInstruction>
          ) : (
            <StyledInstruction>Identifying</StyledInstruction>
          )}
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

const StyledInstruction = styled.p`
  font-size: 16px;
  margin: 8px 0;
`
