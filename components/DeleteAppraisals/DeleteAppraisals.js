import { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { hexToRgba } from '../../theme/utils'
import { post } from '../../utils/api'
import AuthService from '../common/AuthService'
import Button from '../common/Button'
import css from '../../theme/variables'
import Flex from '../common/Flex'

export default class DeleteAppraisals extends Component {
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

  handleDelete = event => {
    event.preventDefault()
    this.setState({ error: false, success: false })
    post(
      'api/delete-appraisals',
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

  render() {
    const { members, error, errorMessage, success } = this.state
    return (
      <StyledForm onDelete={this.handleDelete}>
   <Flex justifyContent="center" alignItems="flex-start">
            {error && <StyledMessage error>{errorMessage}</StyledMessage>}
            {success && (
              <StyledMessage success>
                All appraisals successfully deleted
              </StyledMessage>
            )}
    </Flex>
          <Flex justifyContent="space-between" alignItems="flex-start">
            <StyledInstruction>
              (If you want your team to restart all appraisals from scratch, you can delete them. Do this once a year or so, to make the team rethink old appraisals.
)
            </StyledInstruction>
            <StyledDelete>Delete all appraisals</StyledDelete>
          </Flex>
        </Flex>
      </StyledForm>
    )
  }
}

const StyledMessage = styled.p`
  color: ${props => (props.error ? css.color.orange : css.color.deYork)};
  margin: 0;
  text-align: center;
`
const StyledInstruction = styled.span`
  color: ${css.color.towerGray};
  font-family: ${css.font.family};
  font-size: 14px;
  font-style: italic;
`

const StyledSubmit = styled.button`
  background-color: ${css.color.coral};
`};
`


DeleteAppraisals.propTypes = {
  members: PropTypes.string.isRequired
}



