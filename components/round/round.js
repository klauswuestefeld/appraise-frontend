import React from 'react'
import { flexGroup } from '../../theme/utils'
import Button from '../base/button/button'
import css from '../../theme/variables'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledRound = styled.section`
  ${flexGroup('space-between', 'row', 'center')};
  background: ${css.color.white};
  border-radius: ${css.border.radius};
  box-shadow: 0 0.5px 0.5px 0 ${css.color.tiara};
  margin-bottom: 16px;
  padding: 16px;
  width: 100%;
`

const StyledDate = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
`

const StyledStatus = styled.span`
  color: ${css.color.iron};
  display: inline-block;
  font-weight: bold;
  margin-left: 5px;
`

const StyledDescription = styled.p`
  color: ${css.color.iron};
  font-weight: bold;
  margin: 8px 0 0;
`

class Round extends React.Component {
  render() {
    return (
      <StyledRound>
        <div>
          <StyledDate>{this.props.date}</StyledDate>
          <StyledStatus>{this.props.status}</StyledStatus>
          <StyledDescription>{this.props.description}</StyledDescription>
        </div>
        <div>
          <Link href={'/rounds/4/results'}>
            <Button title="Access result page" primary>
              Show results
            </Button>
          </Link>
        </div>
      </StyledRound>
    )
  }
}

Round.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

export default Round
