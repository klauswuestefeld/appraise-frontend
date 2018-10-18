import { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import groupBy from 'lodash/groupBy'
import Column from './column'
import { reorderItemMap } from './reorder'

const isDraggingClassName = 'is-dragging'

const ParentContainer = styled.div`
  height: ${({ height }) => height};
  overflow-x: hidden;
  overflow-y: auto;
`

const Container = styled.div`
  height: ${({ height }) => height};
  min-width: 100%;
  display: flex;
  flex-direction: column;
`

export const getLevels = obj => {
  const items = Object.keys(obj).map(k => parseInt(k, 10))
  const start = Math.min.apply(null, [...items, 0])
  const end = Math.max.apply(null, [...items, 0])
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => end - idx)
}

export default class Board extends Component {
  constructor(props) {
    super(props)

    const columns = groupBy(this.props.initial, 'level')

    this.state = {
      columns,
      ordered: getLevels(columns),
      autoFocusItemId: null
    }
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-expressions
    injectGlobal`
      body.${isDraggingClassName} {
        cursor: grabbing;
        user-select: none;
      }
    `
  }

  componentWillReceiveProps(nextProps) {
    const columns = groupBy(nextProps.initial, 'level')

    this.setState({
      columns,
      ordered: getLevels(columns)
    })
  }

  onDragStart = initial => {
    // $ExpectError - body wont be null
    document.body.classList.add(isDraggingClassName)

    this.setState({
      autoFocusItemId: null
    })
  }

  onDragEnd = result => {
    // $ExpectError - body wont be null
    document.body.classList.remove(isDraggingClassName)

    // dropped nowhere
    if (!result.destination) {
      return
    }

    const source = result.source
    const destination = result.destination

    this.props.onChange &&
      this.props.onChange({
        appraised: result.draggableId,
        level: parseInt(destination.droppableId, 10),
        certainty: this.props.initial.find(
          user => user.email === result.draggableId
        ).certainty
      })

    const data = reorderItemMap({
      itemMap: this.state.columns,
      source,
      destination
    })

    this.setState({
      columns: data.itemMap,
      ordered: getLevels(data.itemMap),
      autoFocusItemId: data.autoFocusItemId
    })
  }

  render() {
    const columns = this.state.columns
    const ordered = this.state.ordered
    const { containerHeight } = this.props
    const levels = Object.keys(columns).map(k => parseInt(k, 10))

    const board =
      this.state.ordered.length === 0 ? null : (
        <Container>
          <Column
            title={Math.max.apply(null, [...levels, 0]) + 1}
            newLevel={true}
            autoFocusItemId={this.state.autoFocusItemId}
          />
          {ordered.map(key => (
            <Column
              key={key}
              title={key}
              items={columns[key]}
              autoFocusItemId={this.state.autoFocusItemId}
              onCardClick={this.props.onCardClick || (() => {})}
            />
          ))}
          <Column
            title={Math.min.apply(null, [...levels, 0]) - 1}
            newLevel={true}
            autoFocusItemId={this.state.autoFocusItemId}
          />
        </Container>
      )

    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragEnd={this.onDragEnd}
      >
        {this.props.containerHeight ? (
          <ParentContainer height={containerHeight}>{board}</ParentContainer>
        ) : (
          board
        )}
      </DragDropContext>
    )
  }
}
