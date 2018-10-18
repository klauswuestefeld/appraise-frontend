import { flexGroup, hexToRgba } from './utils.js'

describe('Utils', () => {
  it('flexGroup default', () => {
    expect(flexGroup()).toEqual(`
    align-items: stretch;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;`)
  })

  it('flexGroup all params', () => {
    expect(flexGroup('space-between', 'column', 'center', 'inline-flex'))
      .toEqual(`
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;`)
  })

  it('hexadecimal color with 6 characters should be congressBlue with 15% opacity', () => {
    expect(hexToRgba('#004282', 0.15)).toEqual('rgba(0, 66, 130, 0.15)')
  })

  it('hexadecimal color with 3 characters should be silver with 85% opacity', () => {
    expect(hexToRgba('#ccc', 0.85)).toEqual('rgba(204, 204, 204, 0.85)')
  })

  it('default opacity should be 1', () => {
    expect(hexToRgba('#ccc')).toEqual('rgba(204, 204, 204, 1)')
  })
})
