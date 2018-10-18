import React from 'react'
import styled from 'styled-components'
import css from '../../../theme/variables'

const StyledFooter = styled.footer`
  background: ${css.color.towerGray};
  border-top: 5px solid ${css.color.towerGray};
  bottom: 0;
  color: ${css.color.tiara};
  padding: 20px 15px;
  position: fixed;
  width: 100%;
`

const StyledLink = styled.a`
  color: ${css.color.white};
  font-weight: bold;
  margin: 0 3px;
  text-decoration: underline;

  &:hover,
  &:active,
  &:visited {
    cursor: pointer;
    opacity: 0.9;
  }
`

export default class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <span>© 2011/{new Date().getFullYear()}</span>
        <StyledLink
          href="http://helabs.com/"
          target="_blank"
          title="Access He:labs homepage"
        >
          He:labs
        </StyledLink>
        <StyledLink
          href="https://twitter.com/klauswuestefeld"
          target="_blank"
          title="Access twitter from @klauswuestefeld"
        >
          Klaus Wuestefeld
        </StyledLink>
      </StyledFooter>
    )
  }
}
