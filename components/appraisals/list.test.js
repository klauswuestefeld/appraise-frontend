import { mount } from 'enzyme'
import { DragDropContext } from 'react-beautiful-dnd'
import List, { Levels } from './list'
import 'jest-styled-components'

let props

describe('List', () => {
  beforeAll(() => {
    props = {
      listId: 1,
      onCardClick: jest.fn(),
      newLevel: false,
      items: []
    }
  })

  it('should be sane', () => {
    expect(List).toBeDefined()
  })

  it('change styles if newLevel ', () => {
    props.newLevel = true
    const component = mount(
      <DragDropContext>
        <List {...props} />
      </DragDropContext>
    )
    expect(component.find(Levels)).toHaveStyleRule('background', 'transparent')
  })
})
