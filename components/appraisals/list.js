import { Component } from 'react'
import styled, { css } from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styles from '../../theme/variables'
import Item from './item'

const NewLevelLabel = css`
  &::after {
    align-items: center;
    bottom: 0;
    color: ${styles.color.towerGray};
    content: 'Add new level';
    display: flex;
    justify-content: center;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    text-transform: uppercase;
    top: 0;
  }
`

export const Levels = styled.ul`
  background: ${({ newLevel }) =>
    newLevel ? 'transparent' : styles.color.white};
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  flex-direction: column;
  margin: 0;
  min-height: 66px;
  padding: 5px;
  position: relative;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
  width: 100%;
  ${({ newLevel }) => newLevel && NewLevelLabel};
`

const DropZone = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 56px;
`

export default class ItemList extends Component {
  renderItems = dropProvided => {
    const { listType, items } = this.props

    return (
      <div>
        <DropZone innerRef={dropProvided.innerRef}>
          {items.map(item => (
            <Draggable
              key={item.email}
              draggableId={item.email}
              type={listType}
            >
              {(dragProvided, dragSnapshot) => (
                <div>
                  <Item
                    key={item.email}
                    item={item}
                    isDragging={dragSnapshot.isDragging}
                    provided={dragProvided}
                    autoFocus={this.props.autoFocusItemId === item.email}
                    onCardClick={this.props.onCardClick || (() => {})}
                  />
                  {dragProvided.placeholder}
                </div>
              )}
            </Draggable>
          ))}
          {dropProvided.placeholder}
        </DropZone>
      </div>
    )
  }

  render() {
    const {
      ignoreContainerClipping,
      listId,
      listType,
      style,
      newLevel
    } = this.props

    return (
      <Droppable
        droppableId={listId.toString()}
        direction={'horizontal'}
        ignoreContainerClipping={ignoreContainerClipping}
        type={listType}
      >
        {(dropProvided, dropSnapshot) => (
          <Levels
            style={style}
            isDraggingOver={dropSnapshot.isDraggingOver}
            newLevel={newLevel}
          >
            {this.renderItems(dropProvided)}
          </Levels>
        )}
      </Droppable>
    )
  }
}
