import React from 'react'
import Layout from '../components/base/layout/layout'
import Round from '../components/round/round'
import Breadcrumbs from '../components/base/breadcrumbs/breadcrumbs'

export default class Index extends React.Component {
  render() {
    let breadcrumbs = [
      { text: 'Appraisal', url: 'appraisal' },
      { text: 'Rounds', url: '#' }
    ]

    return (
      <Layout small>
        <Breadcrumbs items={breadcrumbs} />
        <Round
          date="03/08/2017"
          status="Closed Round"
          description="Last Calculated At"
          id="4"
        />
      </Layout>
    )
  }
}
