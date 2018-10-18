import { Component } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import css from '../../theme/variables'
import { get } from '../../utils/api'
import Button from '../common/Button'
import Flex from '../common/Flex'

export default class MagicLogin extends Component {
  state = {
    email: ''
  }

  handleChange = event => {
    this.setState({ email: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { email } = this.state
    get(`magic-link-request?email=${email}`)
      .then(() =>
        Router.push(`/sendEmail?email=${email}`, `/send-email/${email}`)
      )
      .catch(err => console.error(err))
  }

  render() {
    const { email } = this.state
    return (
      <StyledContainer onSubmit={e => this.handleSubmit(e)}>
        <span>Get a magic login link in your email</span>
        <Flex justifyContent="center">
          <StyledInput
            type="text"
            name="email"
            value={email}
            onChange={e => this.handleChange(e)}
            placeholder="you@yourcompany.com"
          />
          <StyledSubmit>Send</StyledSubmit>
        </Flex>
      </StyledContainer>
    )
  }
}

const StyledContainer = styled.form`
  margin: 0 auto;
  max-width: 100%;
  text-align: center;
  width: 300px;
`
const StyledInput = styled.input`
  border-radius: 2px;
  border: 1px solid ${css.color.towerGray};
  height: 40px;
  margin-right: -1px;
  padding: 8px;
  width: calc(100% - 80px);

  &,
  &::placeholder {
    color: ${css.color.towerGray};
    font-size: 16px;
  }

  &::placeholder {
    font-style: italic;
  }
`

const StyledSubmit = styled.button`
  ${Button};
  box-shadow: none;
  width: 80px;
`
