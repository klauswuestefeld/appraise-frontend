import React from 'react'
import css from '../../../theme/variables'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledButton = styled.a`
  border-radius: 2px;
  color: ${css.color.white};
  cursor: pointer;
  float: right;
  font-size: 16px;
  height: 48px;
  line-height: 28px;
  padding: 12px 14px;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  white-space: nowrap;
  ${props =>
    props.primary &&
    `
    background-color: ${css.color.atlantis};
    background-image: url('./static/images/primary-arrow.png');
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 28px;
    border-bottom: 4px solid ${css.color.lima};
    padding: 8px 18px 8px 36px;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 5px 10px -5px ${css.color.towerGray};
    }
  `};
`

class Button extends React.Component {
  render() {
    return <StyledButton {...this.props}>{this.props.children}</StyledButton>
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired
}

export default Button
