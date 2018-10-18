import { injectGlobal } from 'styled-components'
import css from './variables'

injectGlobal`
  html {
    overflow-x: hidden;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 300;
    src: url('/static/font/SourceSansPro-Light.ttf');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: url('/static/font/SourceSansPro-Regular.ttf');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 600;
    src: url('/static/font/SourceSansPro-SemiBold.ttf');
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 700;
    src: url('/static/font/SourceSansPro-Bold.ttf');
  }

  body {
    color: ${css.color.towerGray};
    font-family: ${css.font.family};
    font-size: ${css.font.size};
    line-height: 1.5;
    margin: 0;
    overflow-x: hidden;
    background: ${css.color.lightestGrey};
  }

  * {
    min-height: 0;
    min-width: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  h6, h5, h4, h3, h2, h1 {
    line-height: calc(16px);
    margin: 0;
    text-rendering: optimizeLegibility;
  }
`
