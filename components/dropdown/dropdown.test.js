import { mount } from 'enzyme'
import Dropdown from './dropdown'
import { checkReqAttr } from '../../tests/functions'

describe('Dropdow', () => {
  beforeAll(() => {
    const session = {
      email: 'marciosena.inf@gmail.com',
      name: 'Márcio Sena',
      picture: './static/images/fake.png',
      token: '79570a88a7ad2b837997'
    }
    localStorage.setItem('session', JSON.stringify(session))
  })

  it('check elements', () => {
    const dropdown = mount(<Dropdown />)
    const img = dropdown.find('img[alt="Avatar"]')

    expect(img.exists()).toEqual(true)
    expect(img.props().src).toMatch(/.\/static\/images\//)
    expect(dropdown.find('span').text()).toEqual('Márcio Sena')
    expect(dropdown.find('ul li').length).toEqual(1)
  })

  it('check required attr', () => {
    const dropdown = mount(<Dropdown />)

    checkReqAttr(dropdown.find('ul li a'), 'title')
    checkReqAttr(dropdown.find('img'), 'alt')
  })

  it('open and close dropdown', () => {
    const dropdown = mount(<Dropdown />)
    const link = dropdown.find('DropdownTrigger a')

    expect(dropdown.find('.dropdown--active').exists()).toEqual(false)
    link.simulate('click')
    expect(dropdown.find('.dropdown--active').exists()).toEqual(true)
    link.simulate('click')
    expect(dropdown.find('.dropdown--active').exists()).toEqual(false)
  })
})
