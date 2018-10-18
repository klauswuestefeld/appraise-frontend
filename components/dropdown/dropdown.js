import React from 'react'
import styled from 'styled-components'
import AuthService from '../common/AuthService'
import css from '../../theme/variables'
import Dropdown, {
  DropdownTrigger,
  DropdownContent
} from 'react-simple-dropdown'

const Drop = styled.section`
  .dropdown {
    display: inline-block;
  }

  .dropdown__content {
    display: none;
    position: relative;
  }

  .dropdown--active .dropdown__content {
    display: block;
  }
`

const Username = styled.span`
  color: ${css.color.towerGray};
  cursor: pointer;
  font-weight: bold;
  padding: 8px 24px 8px 8px;
  position: relative;

  @media (max-width: 580px) {
    display: none;
  }

  &:hover {
    background-color: ${css.color.alabaster};
  }

  &::after {
    border-color: ${css.color.orange} transparent transparent transparent;
    border-style: solid;
    border-width: 7px 6px 0;
    content: '';
    position: absolute;
    right: 8px;
    top: calc(50% - 3px);
  }
`

const Picture = styled.img`
  border-radius: 50%;
  height: 40px;
  vertical-align: middle;
  width: 40px;
`

const List = styled.ul`
  background: ${css.color.white};
  border-color: ${css.color.orange} ${css.color.tiara} ${css.color.tiara};
  border-radius: ${css.border.radius};
  border-style: solid;
  border-width: 5px 1px 1px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  color: ${css.color.towerGray};
  cursor: pointer;
  margin: 0;
  min-width: 150px;
  padding: 0;
  position: absolute;
  right: 12px;
  top: 8px;
  width: auto;
  z-index: 99999;

  @media (max-width: 580px) {
    right: 18px;
    top: 16px;
  }

  &::before {
    border-color: transparent transparent ${css.color.orange} transparent;
    border-style: solid;
    border-width: 0 0 15px 12px;
    content: '';
    height: 0;
    pointer-events: none;
    position: absolute;
    right: -1px;
    top: -16px;
    width: 0;
  }
`

const Item = styled.li`
  border-bottom: 1px solid ${css.color.tiara};
  line-height: 2.2;
  list-style: none;
  padding: 0 16px;

  &:hover {
    background: ${css.color.alabaster};
  }

  &:first-child {
    border-top-left-radius: ${css.border.radius};
    border-top-right-radius: ${css.border.radius};
  }

  &:last-child {
    border-bottom-left-radius: ${css.border.radius};
    border-bottom-right-radius: ${css.border.radius};
    border: 0;
  }

  a {
    color: ${css.color.towerGray};
  }
`

export default class Dropdow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userImage: null,
      userName: null
    }

    this.authService = new AuthService()

    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    const session = this.authService.getSession()
    if (session) {
      this.setState({
        userImage: session.picture,
        userName: session.name
      })
    }
  }

  logout() {
    this.authService.logout()
  }

  render() {
    const { userImage, userName } = this.state
    return (
      <Drop>
        <Dropdown>
          <DropdownTrigger>
            {userImage && <Picture src={userImage} alt="Avatar" />}
            {userName && <Username>{userName}</Username>}
          </DropdownTrigger>
          <DropdownContent>
            <List>
              <Item>
                <a onClick={this.logout} title="Logout">
                  Log Out
                </a>
              </Item>
            </List>
          </DropdownContent>
        </Dropdown>
      </Drop>
    )
  }
}
