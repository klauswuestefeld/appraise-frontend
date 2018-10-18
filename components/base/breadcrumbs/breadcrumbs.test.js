import { mount } from 'enzyme'
import Breadcrumbs from './breadcrumbs'
import { checkReqAttr } from '../../../tests/functions'

describe('Breadcrumbs', () => {
  it('check structure', () => {
    const items = [
      { text: 'Appraisal', url: 'appraisal' },
      { text: 'Rounds', url: '#' }
    ]
    const breadcrumbs = mount(<Breadcrumbs items={items} />)
    const link = breadcrumbs.find('a')

    expect(breadcrumbs.find('li').length).toBe(2)
    expect(link.length).toBe(2)
  })

  it('check title', () => {
    const items = [{ text: 'Appraisal', url: 'appraisal' }]
    const breadcrumbs = mount(<Breadcrumbs items={items} />)
    const link = breadcrumbs.find('a')

    checkReqAttr(link, 'title')
  })
})
