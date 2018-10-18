import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { get, post } from '../utils/api'
import AuthService from '../components/common/AuthService'
import Board from '../components/appraisals/board'
import css from '../theme/variables'
import Layout from '../components/base/layout/layout'
import Modal from '../components/modal/'

const MainBlock = styled.div`
  &.wrapper {
    padding-top: 84px;
  }
`

const StyledText = styled.p`
  font-size: 16px;
  margin: 8px 0;
  text-align: center;
`

const StyledAnchor = styled.a`
  color: ${css.color.orange};

  &:hover {
    cursor: pointer;
  }
`

const StyledWapper = styled.div`
  left: 50%;
  max-width: calc(100% - 40px);
  position: absolute;
  text-align: center;
  top: 40%;
  transform: translateY(-50%) translateX(-50%);
  width: 500px;
`

export default class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      members: [],
      modalVisibility: false,
      user: {}
    }

    this.openModal = this.openModal.bind(this)
    this.onModalSubmit = this.onModalSubmit.bind(this)
  }

  openModal(user) {
    this.setState({ modalVisibility: true, user })
  }

  closeModal() {
    this.setState({
      modalVisibility: false,
      user: {}
    })
  }

  onModalSubmit(user, level, certainty) {
    this.closeModal()
    this.setAppraise({
      appraised: user.email,
      level,
      certainty
    })
  }

  onDrag({ appraised, level, certainty }) {
    certainty = certainty === 0 ? 0.2 : certainty
    this.setAppraise({ appraised, level, certainty })
  }

  componentDidMount() {
    this.getAppraisals()
  }

  getAppraisals() {
    return get(`api/appraisals`, null, new AuthService().getToken())
      .then(({ message }) =>
        this.setState({ loading: false, members: message })
      )
      .catch(err => {
        if (err.status === 401) {
          new AuthService().logout()
        }
      })
  }

  setAppraise({ appraised, level, certainty }) {
    post(
      'api/appraise',
      { certainty, appraised, level },
      new AuthService().getToken()
    )
      .then(() => {
        this.setState({
          members: [
            ...this.state.members.map(member => {
              if (member.email === appraised) {
                member.level = level
                member.certainty = certainty
              }
              return member
            })
          ]
        })
      })
      .catch(console.log)
  }

  render() {
    const { modalVisibility, loading } = this.state
    return (
      <Layout showMenu {...this.props}>
        {loading ? (
          <StyledWapper>Loading</StyledWapper>
        ) : (
          <section id="person-list">
            <MainBlock className="wrapper" ref={this.dragulaDecorator}>
              <Modal
                handleSubmit={this.onModalSubmit}
                visible={modalVisibility}
                user={this.state.user}
                hide={this.closeModal}
              />
              {this.state.members.length > 0 ? (
                <Board
                  initial={this.state.members}
                  onChange={args => this.onDrag(args)}
                  onCardClick={this.openModal}
                />
              ) : (
                <StyledText>
                  To appraise your peers, you can add <br />yourself to
                  the&nbsp;
                  <Link href="/admin">
                    <StyledAnchor title="Add yourself to the team.">
                      team
                    </StyledAnchor>
                  </Link>.
                </StyledText>
              )}
            </MainBlock>
          </section>
        )}
      </Layout>
    )
  }
}
