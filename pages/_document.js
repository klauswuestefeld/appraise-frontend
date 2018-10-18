import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    return { ...page }
  }

  render() {
    const sheet = new ServerStyleSheet()
    const styleTags = sheet.getStyleElement()
    return (
      <html lang="pt-br">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Language" content="pt-br" />
          <script src="https://apis.google.com/js/api:client.js" />
          <title>Appraise</title>
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
