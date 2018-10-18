import { mount } from 'enzyme'
import Header from './header'
import Router from 'next/router'

let props

describe('Header', () => {
  beforeAll(() => {
    props = { url: { pathname: '/appraisals' } }
  })

  it('check brand on header', () => {
    const header = mount(<Header {...props} />)

    const img = header.find('img[alt="Appraise"]')
    expect(img.exists()).toEqual(true)
    expect(img.props().src).toEqual('/static/images/logo.png')
    expect(header.find('h1').text()).toEqual('AppRaise')
    expect(header.find('strong').text()).toEqual('Raise')
  })

  it('click on logo', () => {
    const header = mount(<Header {...props} />)
    let onLogoClicked = false

    Router.router = {
      push: () => {
        onLogoClicked = true
      }
    }
    expect(onLogoClicked).toEqual(false)
    header.find('[title="Go to home"]').simulate('click')
    expect(onLogoClicked).toEqual(true)
  })
})
