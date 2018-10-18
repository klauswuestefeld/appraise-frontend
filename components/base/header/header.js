import { Component } from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import Dropdown from '../../dropdown/dropdown'
import Menu from '../menu/menu'
import { flexGroup } from '../../../theme/utils'
import css from '../../../theme/variables'
import AuthService from '../../common/AuthService'

const Row = styled.header`
  ${flexGroup('space-between', 'row', 'center')};
  background: ${css.color.white};
  border-bottom: 1px solid ${css.color.tiara};
  border-top: 3px solid ${css.color.orange};
  color: ${css.color.towerGray};
  padding: 0 10px;
  position: fixed;
  width: 100%;
  z-index: 1000;

  > * {
    text-align: right;
    width: 33%;
  }
`

const Logo = styled.section`
  border-right: 1px solid ${css.color.silver};
  float: left;
  margin: 10px 10px 10px 0;
  padding-right: 10px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 580px) {
    border: 0;
  }
`

const Brand = styled.img`
  width: 70px;
`

const Title = styled.h1`
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  text-align: center;
  width: 100%;

  strong {
    font-weight: 700;
  }
`

const Description = styled.p`
  float: left;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.25;
  margin-left: 10px;
  max-height: 47px;
  text-align: left;
  width: 230px;

  @media (max-width: 580px) {
    display: none;
  }
`

export default class Header extends Component {
  state = {
    url: '/login'
  }

  componentDidMount() {
    if (new AuthService().isLogged()) {
      this.setState({ url: '/appraisals' })
    }
  }
  render() {
    return (
      <Row>
        <section>
          <Logo onClick={() => Router.push(this.state.url)} title="Go to home">
            <Brand src="/static/images/logo.png" alt="Appraise" />
            <Title>
              App<strong>Raise</strong>
            </Title>
          </Logo>
          <Description>
            Appraise your colleagues, based on how well you know each one.
          </Description>
        </section>
        {this.props.showMenu && <Menu {...this.props} />}
        {this.props.showMenu && <Dropdown />}
      </Row>
    )
  }
}
