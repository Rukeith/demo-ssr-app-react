import express from 'express'
import React from 'react'
import { matchPath, StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'

import App from '../shared/components/App'


const app = express()

app.use(express.static('public'))

app.get('*', (request, response) => {
  response.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Universal React</title>
        <link href="https://fonts.googleapis.com/css?family=Assistant:400,600,700" rel="stylesheet">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css">
        <link rel='stylesheet'  href='/css/main.css'>
        <script src='/bundle.js' defer></script>
      </head>
      <body>
        <div id="app">
          ${renderToString(
            <StaticRouter location={request.url}>
              <App />
            </StaticRouter>
          )}
        </div>
      </body>
    </html>
  `)
})

app.listen(5200, () => console.log('App listening on localhost:5200'))