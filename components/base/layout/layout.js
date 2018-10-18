import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import stylesheet from '../../../theme/global'
import styled from 'styled-components'
import css from '../../../theme/variables'

const StyledMain = styled.section`
  margin: 0 auto;
  max-width: calc(100% - 40px);
  padding-bottom: 76px;
  padding-top: 76px;
  width: ${props => (props.small ? css.container.small : 'calc(100% - 40px)')};
`

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <Header {...this.props} />
        <article>
          <StyledMain small={this.props.small}>
            {this.props.children}
          </StyledMain>
        </article>
        <Footer />
      </div>
    )
  }
}
