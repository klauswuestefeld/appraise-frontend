import { mount } from 'enzyme'
import groupBy from 'lodash/groupBy'
import Board, { getLevels } from './board'
import Column from './column'

let props

describe('Board', () => {
  beforeAll(() => {
    props = {
      initial: [
        {
          email: 'jeanlucasdecarvalho@gmail.com',
          name: 'Jean',
          certainty: 0.8,
          level: 2
        },
        {
          email: 'carolmachado@helabs.com',
          name: 'Carol',
          certainty: 0.6,
          level: 3
        },
        {
          email: 'klaus@helabs.com',
          name: 'Klaus',
          certainty: 0.2,
          level: -2
        }
      ]
    }
  })

  it('should be sane', () => {
    expect(Board).toBeDefined()
  })

  it('should fill levels ', () => {
    const columns = groupBy(props.initial, 'level')
    const expectedResult = [3, 2, 1, 0, -1, -2]
    expect(getLevels(columns)).toEqual(expectedResult)
  })

  it('should render columns ', () => {
    const component = mount(<Board {...props} />)
    expect(component.find(Column)).toHaveLength(8) // 6 level columns + 2 new level columns
  })
})
