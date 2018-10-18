import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { flexGroup } from '../../../theme/utils'
import AuthService from '../../common/AuthService'
import css from '../../../theme/variables'

const Menu = styled.ul`
  ${flexGroup('center')};
  height: 72px;
  margin: 0;
  padding: 0;
`

const borderColor = ({ active }) => (active ? css.color.orange : 'transparent')

const Item = styled.li`
  align-items: center;
  border-bottom: 3px solid ${borderColor};
  border-top: 3px solid transparent;
  display: flex;
  font-size: 14px;
  list-style: none;
  margin: 0 10px;
  padding: 20px;
  text-align: center;

  > a {
    color: ${({ active }) => (active ? css.color.gray : css.color.towerGray)};
  }
`

export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isAdmin: false
    }

    this.authService = new AuthService()
  }

  componentDidMount() {
    const session = this.authService.getSession()
    if (session) {
      this.setState({
        isAdmin: session.isAdmin
      })
    }
  }

  render() {
    const { isAdmin } = this.state
    const { url: { pathname } } = this.props
    return (
      <Menu>
        <Item active={pathname === '/appraisals'}>
          <Link href="/appraisals">
            <a title="Appraisal">Appraisals</a>
          </Link>
        </Item>
        {isAdmin && (
          <Item active={pathname === '/admin'}>
            <Link href="/admin">
              <a title="Admin">Admin</a>
            </Link>
          </Item>
        )}
      </Menu>
    )
  }
}
