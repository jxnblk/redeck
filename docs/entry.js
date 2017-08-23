import React from 'react'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './App'

injectGlobal`
* { box-sizing: border-box }
body {
  font-family: 'Roboto Mono', Menlo, monospace;
  line-height: 1.5;
  margin: 0;
  color: white;
  background-color: black;
  -webkit-font-smoothing: antialiased;
}

@page {
  margin: 0;
  size: 8.5in 11in landscape;
}
`

render(<App />, app)
