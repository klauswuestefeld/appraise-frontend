import { mount } from 'enzyme'
import Modal from './index'
import 'jest-styled-components'
import { checkReqAttr } from '../../tests/functions'

let props

describe('Modal', () => {
  beforeAll(() => {
    props = {
      visible: true,
      user: {
        certainty: 0.4,
        email: 'ann@acme.com',
        level: 1,
        name: 'Ann Smith',
        picture: 'http://via.placeholder.com/80x80'
      }
    }
  })

  describe('Visible Modal', () => {
    it('modal should be visible', () => {
      const modal = mount(<Modal {...props} />)
      expect(modal.find('section')).toHaveStyleRule('opacity', '1')
    })

    it('modal should not be visible', () => {
      props.visible = false
      const modal = mount(<Modal {...props} />)
      expect(modal.find('section')).toHaveStyleRule('opacity', '0')
    })
  })

  describe('Check attr', () => {
    it('anchors should have title', () => {
      const modal = mount(<Modal {...props} />)
      checkReqAttr(modal.find('a'), 'title')
    })

    it('images should have alt', () => {
      const modal = mount(<Modal {...props} />)
      checkReqAttr(modal.find('img'), 'alt')
    })
  })

  it('certainty should be 0.2', () => {
    const modal = mount(<Modal {...props} />)
    const item = modal.find('ul li').first()
    expect(modal.state().certainty).toEqual(props.user.certainty)
    item.simulate('click')
    expect(modal.state().certainty).toEqual(0.2)
  })
})
