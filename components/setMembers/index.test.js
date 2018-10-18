import { mount } from 'enzyme'
import 'jest-styled-components'
import css from '../../theme/variables'
import SetMembers from './index'

describe('SetMembers', () => {
  let component
  let props = {}

  beforeEach(() => {
    props =
      'klaus@helabs.com.br\tKlaus\nmarcio.sena@helabs.com.br\tMarcio HE\nmarciosena.inf@gmail.com\tMarcio Vinicius Sena\n'
  })

  it('check props', () => {
    component = mount(<SetMembers members={props} />)
    expect(component.props().members).toEqual(props)
  })

  it('check title', () => {
    component = mount(<SetMembers members={props} />)
    expect(component.find('h2').text()).toEqual('Team Members')
  })

  describe('Messages', () => {
    it('qty should be 0', () => {
      component = mount(<SetMembers members={props} />)
      expect(component.find('p').length).toBe(0)
    })

    it('qty should be 1 and message should have deYork color', () => {
      component = mount(<SetMembers members={props} />)
      component.setState({ success: true })
      const message = component.find('p')
      expect(message.length).toBe(1)
      expect(message).toHaveStyleRule('color', css.color.deYork)
    })

    it('message should have orange color', () => {
      component = mount(<SetMembers members={props} />)
      component.setState({ error: true, errorMessage: 'Not found' })
      const message = component.find('p')
      expect(message.length).toBe(1)
      expect(message).toHaveStyleRule('color', css.color.orange)
      expect(message.text()).toEqual('Not found')
    })
  })

  describe('Textarea', () => {
    it('textarea value should be empty', () => {
      let value = ''
      component = mount(<SetMembers members={value} />)
      expect(component.find('textarea').text()).toEqual(value)
    })

    it('textarea value should be equal props', () => {
      component = mount(<SetMembers members={props} />)
      expect(component.find('textarea').text()).toEqual(props)
    })

    it('textarea value should be equal members', () => {
      component = mount(<SetMembers members={props} />)
      expect(component.state().members).toEqual(props)
    })
  })
})
