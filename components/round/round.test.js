import { mount } from 'enzyme'
import Round from './round'
import { checkReqAttr } from '../../tests/functions'

describe('Round', () => {
  let round
  let props = {}

  beforeEach(() => {
    props = {
      date: '03/08/2017',
      status: 'Closed Round',
      description: 'Last Calculated At',
      id: '4'
    }
    round = mount(<Round {...props} />)
  })

  it('check props', () => {
    expect(round.props()).toEqual(props)
  })

  it('check title', () => {
    checkReqAttr(round.find('a'), 'title')
  })
})
