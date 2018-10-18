import { shallow } from 'enzyme'
import Item from './item'

let props

describe('Item', () => {
  beforeAll(() => {
    props = {
      onCardClick: jest.fn(),
      item: {
        certainty: 0.4,
        email: 'ann@acme.com',
        level: 1,
        name: 'Ann Smith',
        picture: 'http://via.placeholder.com/80x80'
      },
      provided: {
        innerRef: '',
        draggableStyle: {},
        dragHandleProps: {}
      },
      isDragging: false
    }
  })

  it('should be sane', () => {
    expect(Item).toBeDefined()
  })

  it('calls onCardClick on click ', () => {
    const component = shallow(<Item {...props} />)

    component.simulate('click')
    expect(props.onCardClick).toHaveBeenCalledTimes(1)
  })
})
