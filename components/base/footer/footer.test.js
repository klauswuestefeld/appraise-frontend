import { mount } from 'enzyme'
import Footer from './footer'
import { checkReqAttr } from '../../../tests/functions'

describe('Footer', () => {
  it('check structure', () => {
    const footer = mount(<Footer />)
    expect(footer.find('span').text()).toBe(
      `© 2011/${new Date().getFullYear()}`
    )
    const link = footer.find('a[target="_blank"]')
    expect(link.length).toBe(2)
    checkReqAttr(link, 'title')
  })
})
