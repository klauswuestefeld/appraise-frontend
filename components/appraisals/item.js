import { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { flexGroup } from '../../theme/utils'
import css from '../../theme/variables'
import Flex from '../common/Flex'

const Card = styled.li`
  background: ${css.color.white};
  border: 1px solid ${css.color.towerGray};
  border-radius: 2px;
  box-shadow: ${({ isDragging }) =>
    isDragging
      ? `2px 2px 1px rgba(${css.color.black}, 0.1)`
      : `0 1px 1px 0 rgba(${css.color.black}, 0.1)`};
  display: flex;
  height: 46px;
  line-height: 1;
  margin: 5px;
  min-width: 150px;
  transition: all 0.1s ease;
  user-select: none;

  &:hover {
    cursor: move;
    cursor: grab;
    cursor: -webkit-grab;
    cursor: -moz-grab;
  }
`

const Content = styled.div`
  ${flexGroup('flex-start', 'row', 'center')};
  width: 100%;
`

const CardAvatar = styled.img`
  border-radius: 50%;
  height: 26px;
  margin: 0 10px;
  width: 26px;
`

const StyledFlex = styled(Flex)`
  padding: 0 10px 0 0;
  width: calc(100% - 46px);
`

const BlockItem = styled.div`
  &::before {
    content: open-item;
  }

  &::after {
    content: close-item;
  }
`

const CertaintyItem = styled.span`
  color: ${css.color.riverBed};
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  line-height: 0.83;
  margin: 2px 0 0;
`

export default class Item extends Component {
  componentDidMount() {
    if (!this.props.autoFocus) {
      return
    }

    const node = ReactDOM.findDOMNode(this)
    node.focus()
  }

  render() {
    const { item, isDragging, provided } = this.props
    const onCardClick = this.props.onCardClick || (() => {})
    return (
      <Card
        isDragging={isDragging}
        innerRef={provided.innerRef}
        style={provided.draggableStyle}
        {...provided.dragHandleProps}
        onClick={() => onCardClick(item)}
      >
        <Content>
          <CardAvatar
            className="user-img"
            src={item.picture || 'http://via.placeholder.com/80x80'}
            alt={item.name}
          />
          <StyledFlex direction="column">
            <BlockItem>{item.name}</BlockItem>
            <CertaintyItem>{`${item.certainty * 100}%`}</CertaintyItem>
          </StyledFlex>
        </Content>
      </Card>
    )
  }
}
