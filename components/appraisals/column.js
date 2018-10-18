import { Component } from 'react'
import styled from 'styled-components'
import css from '../../theme/variables'
import { flexGroup } from '../../theme/utils'
import List from './list'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  border-radius: 4px;
  margin: 8px;
  display: flex;
  ${({ newLevel }) => newLevel && `border: 2px dashed ${css.color.towerGray}`};
`

const ApparaisalIndice = styled.div`
  ${flexGroup('center', 'row', 'center')};
  background-color: ${props =>
    props.indiceMe ? css.color.orange : css.color.towerGray};
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  float: left;
  min-height: 66px;
  text-align: center;
  width: 55px;

  .indice--me {
    background: ${css.color.melon};
  }

  ${props => props.newLevel && 'opacity: 0.5'};
`

const AppraisalText = styled.div`
  color: ${css.color.white};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2.1px;
  text-transform: uppercase;
`

const AppraisalYourLevel = styled.span`
  font-size: 12px;
`

export default class Column extends Component {
  render() {
    const { title, items = [], newLevel } = this.props
    return (
      <Wrapper>
        <Container newLevel={newLevel}>
          <ApparaisalIndice newLevel={newLevel} indiceMe={title === 0}>
            <AppraisalText>
              {title === 0 ? (
                <AppraisalYourLevel>Your level</AppraisalYourLevel>
              ) : title > 0 ? (
                `+${title}`
              ) : (
                title
              )}
            </AppraisalText>
          </ApparaisalIndice>
          <List
            listId={title}
            listType="ITEM"
            items={items}
            autoFocusItemId={this.props.autoFocusItemId}
            newLevel={newLevel}
            onCardClick={this.props.onCardClick || (() => {})}
          />
        </Container>
      </Wrapper>
    )
  }
}
