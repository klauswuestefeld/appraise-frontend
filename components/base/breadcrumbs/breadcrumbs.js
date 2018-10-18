import React from 'react'
import Link from 'next/link'
import css from '../../../theme/variables'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledBreadcrumbs = styled.section`
  display: table;
  overflow: hidden;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const Item = styled.li`
  display: inline-block;
  font-size: 15px;
  padding: 0 14px 0 5px;

  &:not(:last-child) {
    background: url('./static/images/chevron-right.png') no-repeat right;
  }

  &:first-child {
    padding-left: 0;

    &::before {
      background: ${css.color.orange};
      content: '';
      display: inline-block;
      height: 13px;
      margin-right: 5px;
      width: 7px;
    }
  }

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`

const StyledLink = styled.a`
  color: ${css.color.towerGray};

  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
`

class Breadcrumbs extends React.Component {
  render() {
    return (
      <StyledBreadcrumbs>
        <List>
          {this.props.items &&
            this.props.items.map((item, key) => {
              return (
                <Item key={key}>
                  <Link href={item.url}>
                    <StyledLink title={`Acess ${item.text}`}>
                      {item.text}
                    </StyledLink>
                  </Link>
                </Item>
              )
            })}
        </List>
      </StyledBreadcrumbs>
    )
  }
}

Breadcrumbs.propTypes = {
  items: PropTypes.array.isRequired
}

export default Breadcrumbs
