import { mount } from 'enzyme'
import Menu from './menu'
import { checkReqAttr } from '../../../tests/functions'

let props

describe('Dropdow', () => {
  beforeAll(() => {
    props = { url: { pathname: '/appraisals' } }

    const session = {
      email: 'marciosena.inf@gmail.com',
      name: 'Márcio Sena',
      picture: './static/images/fake.png',
      token: '79570a88a7ad2b837997'
    }
    localStorage.setItem('session', JSON.stringify(session))
  })

  it('should be sane', () => {
    expect(Menu).toBeDefined()
  })

  it('check elements', () => {
    const menu = mount(<Menu {...props} />)
    expect(menu.find('ul li').length).toEqual(1)
  })

  it('check required attr', () => {
    const menu = mount(<Menu {...props} />)

    checkReqAttr(menu.find('ul li a'), 'title')
  })
})
