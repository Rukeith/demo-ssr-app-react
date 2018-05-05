import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from '../shared/components/App'

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('app')
)