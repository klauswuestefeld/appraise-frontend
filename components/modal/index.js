import { Component } from 'react'
import styled from 'styled-components'
import { hexToRgba, flexGroup } from '../../theme/utils'
import css from '../../theme/variables'
import Flex from '../common/Flex'

const levels = [20, 40, 60, 80, 100]

export default class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      certainty: props.user.certainty
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.modal) {
      this.modal.focus()
    }
    this.setState({
      certainty: nextProps.user.certainty
    })
  }

  selectCertainty = level => {
    this.setState({ certainty: level / 100 })
  }

  handleSubmit(user, level = 0, certainty = 0.2) {
    this.props.hide()
    this.props.handleSubmit(user, level, certainty)
  }

  handleKeyDown(event) {
    const keyCode = event.keyCode || event.which
    if (keyCode === 27) {
      const { user, handleSubmit } = this.props
      handleSubmit(user, user.level, this.props.user.certainty)
    }
  }

  render() {
    const { user, visible, handleSubmit } = this.props
    const { certainty } = this.state

    return (
      <StyledOverlay
        visible={visible}
        onClick={() =>
          handleSubmit(user, user.level, this.props.user.certainty)}
      >
        <StyledModal
          onClick={e => e.stopPropagation()}
          innerRef={e => (this.modal = e)}
          onKeyDown={this.handleKeyDown.bind(this)}
          tabIndex="0"
        >
          <StyledHeader direction="column" alignItems="center">
            <StyledAvatar>
              <StyledImage
                src={user.picture || 'http://via.placeholder.com/80x80'}
                alt={user.name}
              />
              <StyledLevel>{user.level}</StyledLevel>
            </StyledAvatar>
            <StyledName>{user.name}</StyledName>
          </StyledHeader>
          <StyledContent>
            <StyledQuestion>
              How well do you know {user.name}&#39;s work ?
            </StyledQuestion>
            <StyledList>
              {levels.map(level => (
                <StyledItem
                  key={level}
                  onClick={() => this.selectCertainty(level)}
                  active={certainty === level / 100}
                >
                  <StyledValue>{level}%</StyledValue>
                  <StyledText>certainty</StyledText>
                </StyledItem>
              ))}
            </StyledList>
          </StyledContent>
          <StyledFooter>
            <StyledButton
              cancel
              onClick={() => handleSubmit(user, 0, 0)}
              title="Delete Appraisal"
            >
              Delete Appraisal
            </StyledButton>
            <StyledButton
              onClick={() => handleSubmit(user, user.level, certainty)}
              title="Save"
            >
              Save
            </StyledButton>
          </StyledFooter>
        </StyledModal>
      </StyledOverlay>
    )
  }
}

const StyledOverlay = styled.section`
  background-color: ${hexToRgba(css.color.riverBed, 0.9)};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  ${props =>
    props.visible
      ? `
      opacity: 1;
      z-index: 100;
    `
      : `
      opacity: 0;
      z-index: -100;
    `};
`

const StyledModal = styled.div`
  background-color: ${css.color.white};
  height: auto;
  left: 50%;
  max-width: calc(100% - 40px);
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 700px;
`

const StyledHeader = styled(Flex)`
  margin: -34px auto 30px;
`

const StyledAvatar = styled.div`
  position: relative;
`

const StyledLevel = styled.span`
  background-color: ${css.color.froly};
  border-radius: 50%;
  border: solid 3px ${css.color.white};
  color: ${css.color.white};
  font-size: 10px;
  font-weight: bold;
  height: 24px;
  line-height: 18px;
  position: absolute;
  right: 6px;
  text-align: center;
  top: 55px;
  width: 24px;
`

const StyledImage = styled.img`
  border-radius: 50%;
  border: 8px solid ${css.color.white};
  height: 80px;
  width: 80px;
`

const StyledName = styled.span`
  color: ${css.color.riverBed};
  font-size: 18px;
`

const StyledContent = styled.div`
  background: ${css.color.blackHaze};
  height: 250px;
  padding: 15px 0;
`

const StyledQuestion = styled.p`
  color: ${css.color.riverBed};
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`

const StyledList = styled.ul`
  ${flexGroup('center', 'row', 'flex-start')};
  list-style: none;
  padding: 0;
`

const StyledItem = styled.li`
  background-color: ${css.color.towerGray};
  border-radius: 3px;
  height: 99px;
  margin: 0 1px;
  padding: 25px 0;
  text-align: center;
  transition: all ease 0.3s;
  width: 125px;

  &:hover {
    cursor: pointer;
  }

  ${props =>
    props.active &&
    `
      background-color: ${css.color.coral};
      height: 115px;
      margin-top: -8px;
      position: relative;
      width: 141px;

      &::after {
        background: ${css.color
          .coral} url('/static/images/icon-check.svg') center no-repeat;
        border-radius: 50%;
        border: 3.2px solid ${css.color.white};
        bottom: -15px;
        content: '';
        height: 38px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 38px;
      }
  `};
`

const StyledValue = styled.span`
  color: ${css.color.white};
  display: block;
  font-size: 38px;
  font-weight: bold;
  letter-spacing: 1.5px;
  line-height: 1;
  margin-bottom: 2px;
`

const StyledText = styled.span`
  color: ${css.color.white};
  font-size: 13.6px;
  text-transform: uppercase;
`

const StyledFooter = styled(Flex)`
  margin: 0;
`

const StyledButton = styled.a`
  background-color: ${props => (props.cancel ? 'none' : css.color.deYork)};
  border-radius: 0;
  color: ${props => (props.cancel ? css.color.froly : css.color.white)};
  font-size: 13.6px;
  font-weight: bold;
  height: 80px;
  line-height: 80px;
  text-align: center;
  text-transform: uppercase;
  transition: opacity ease 0.5s;
  width: 50%;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
