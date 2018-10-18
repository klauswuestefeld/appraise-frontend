import { mount } from 'enzyme'
import { checkReqAttr } from './functions'

describe('Functions', () => {
  it('check properties', () => {
    const link = mount(
      <a href="#" title="Access link">
        Link 1
      </a>
    )
    checkReqAttr(link, 'title')
  })

  it('check multiples node', () => {
    const node = (
      <div>
        <a href="#" title="Access link 1">
          Link 1
        </a>
        <a href="#" title="Access link 2">
          Link 2
        </a>
      </div>
    )
    const links = mount(node).find('a')
    checkReqAttr(links, 'title')
  })
})
