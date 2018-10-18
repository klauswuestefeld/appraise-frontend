import { mount } from 'enzyme'
import Layout from './layout'
import 'jest-styled-components'
import css from '../../../theme/variables'

let props

describe('Layout', () => {
  beforeAll(() => {
    props = { url: { pathname: '/appraisals' } }
  })

  it('check structure', () => {
    const layout = mount(<Layout {...props} />)
    expect(layout.find('Header').exists()).toBeTruthy()
    expect(layout.find('Footer').exists()).toBeTruthy()
    expect(layout.find('style').props().dangerouslySetInnerHTML).toEqual({
      __html: {}
    })
  })

  it('check small width', () => {
    const layout = mount(<Layout small {...props} />)
    expect(layout.find('article').children()).toHaveStyleRule(
      'width',
      css.container.small
    )
  })

  it('check default width', () => {
    const layout = mount(<Layout {...props} />)
    expect(layout.find('article').children()).toHaveStyleRule(
      'width',
      'calc(100% - 40px)'
    )
  })
})
