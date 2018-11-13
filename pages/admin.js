import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { get } from '../utils/api'
import AuthService from '../components/common/AuthService'
import Layout from '../components/base/layout/layout'
import DeleteA from '../components/DeleteAppraisals/'
import SetMembers from '../components/setMembers/'
import withAuth from '../components/common/withAuth'

class Team extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      members: ''
    }
  }

  componentDidMount() {
    get('api/team-profiles', null, new AuthService().getToken())
      .then(response => {
        if (response['is-admin'] === false && response.admin !== null) {
          Router.push('/appraisals')
        } else {
          const { members } = response.message
          this.setState({ loading: false, members: members || '' })
        }
      })
      .catch(err => {
        if (err.status === 401) {
          new AuthService().logout()
        }
        console.error(err)
      })
  }

  render() {
    const { members, loading } = this.state
    return (
      <Layout showMenu {...this.props}>
        {loading ? (
          <StyledWapper>Loading</StyledWapper>
        ) : (
          <SetMembers members={members} />
        )}
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

export default withAuth(Team)
