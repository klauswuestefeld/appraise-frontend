const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const port = process.env.PORT || 4000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const pathMatch = require('path-match')
const route = pathMatch()

const routes = [
  {
    alias: '/magicLogin',
    route: route('/magic-login/:token')
  },
  {
    alias: '/sendEmail',
    route: route('/send-email/:email')
  }
]

app.prepare().then(() => {
  createServer((req, res) => {
    const { pathname, query } = parse(req.url, true)
    const match = routes.find(match => match.route(pathname))
    if (!match || match.params === false) {
      handle(req, res)
    } else {
      app.render(
        req,
        res,
        match.alias,
        Object.assign(match.route(pathname), query)
      )
    }
  }).listen(port, err => {
    if (err) throw err
    console.info(`> Ready on http://localhost:${port}`)
  })
})
