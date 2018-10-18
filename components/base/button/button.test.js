import { mount } from 'enzyme'
import Button from './button'
import { checkReqAttr } from '../../../tests/functions'

describe('Button', () => {
  let button = {}
  let props = {}

  beforeEach(() => {
    props = { title: 'Access result page' }
    button = mount(<Button {...props} />)
  })

  it('check props', () => {
    expect(button.props()).toEqual(props)
  })

  it('check title', () => {
    checkReqAttr(button, 'title')
  })

  it('check primary color', () => {
    checkReqAttr(button, 'title')
  })
})
