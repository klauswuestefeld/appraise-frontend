import { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { hexToRgba } from '../../theme/utils'
import { post } from '../../utils/api'
import AuthService from '../common/AuthService'
import Button from '../common/Button'
import css from '../../theme/variables'
import Flex from '../common/Flex'

export default class SetMembers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: false,
      errorMessage: '',
      members: props.members,
      success: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      members: nextProps.members
    })
  }

  handleChange = event => {
    this.setState({ members: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ error: false, success: false })
    post(
      'api/set-team',
      { members: this.state.members },
      new AuthService().getToken()
    )
      .then(response => {
        if (response.status === 200) {
          this.setState({
            members: response.message.members,
            error: false,
            success: true
          })
        } else {
          this.setState({
            error: true,
            success: false,
            errorMessage: response.message.error
          })
        }
      })
      .catch(err => {
        if (err.status === 401) {
          new AuthService().logout()
        }
      })
  }

  handleKeyDown(event) {
    const keyCode = event.keyCode || event.which

    if (keyCode === 9) {
      event.preventDefault()
      const start = event.target.selectionStart
      const end = event.target.selectionEnd
      let members = `${this.state.members.substring(
        0,
        start
      )}\t${this.state.members.substring(end)}`

      this.setState({ members: members }, () => {
        this.textarea.selectionStart = this.textarea.selectionEnd = start + 1
      })
    }
  }

  render() {
    const { members, error, errorMessage, success } = this.state
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <Flex direction="column">
          <Flex justifyContent="space-between" alignItems="flex-end">
            <StyledTitle>Team Members</StyledTitle>
            <StyledInstruction>{`E-mail <tab> Name`}</StyledInstruction>
          </Flex>
          <StyledTextarea
            placeholder={
              'johndoe@acme.com <tab> John Doe\nmarydoe@acme.com <tab> Mary Doe'
            }
            innerRef={comp => (this.textarea = comp)}
            value={members}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown.bind(this)}
          />
          <Flex justifyContent="center" alignItems="flex-start">
            {error && <StyledMessage error>{errorMessage}</StyledMessage>}
            {success && (
              <StyledMessage success>
                Team members successfully saved
              </StyledMessage>
            )}
          </Flex>

          <Flex justifyContent="space-between" alignItems="flex-start">
            <StyledInstruction>
              (Copy-and-paste from a spreadsheet works too)
            </StyledInstruction>
            <StyledSubmit disabled={members.length === 0}>Save</StyledSubmit>
          </Flex>
        </Flex>
      </StyledForm>
    )
  }
}

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: calc(100% - 40px);
  width: 480px;
`

const StyledTitle = styled.h2`
  color: ${css.color.riverBed};
  font-family: ${css.font.family};
  font-size: 18px;
  font-weight: 600;
  margin: 8px 0;
`

const StyledInstruction = styled.span`
  color: ${css.color.towerGray};
  font-family: ${css.font.family};
  font-size: 14px;
  font-style: italic;
`

const StyledTextarea = styled.textarea`
  background-color: ${css.color.white};
  border-radius: 4px;
  border: 0;
  box-shadow: inset 0 0 6px 0 ${hexToRgba(css.color.black, 0.5)};
  font-size: 14px;
  font-weight: 300;
  height: 208px;
  line-height: 1.4;
  margin: 0 0 10px;
  padding: 20px;
  width: 100%;

  &::placeholder {
    color: ${css.color.towerGray};
    font-size: 14px;
    font-style: italic;
    font-weight: 300;
    line-height: 1.4;
  }
`

const StyledMessage = styled.p`
  color: ${props => (props.error ? css.color.orange : css.color.deYork)};
  margin: 0;
  text-align: center;
`

const StyledSubmit = styled.button`
  ${Button};
  ${props =>
    props.disabled &&
    `
      background-color: ${css.color.towerGray};

      &:hover {
        cursor: not-allowed;
      }
  `};
`

SetMembers.propTypes = {
  members: PropTypes.string.isRequired
}
