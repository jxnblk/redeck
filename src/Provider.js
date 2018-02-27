import React from 'react'
import { ThemeProvider } from 'styled-components'
import connect from 'refunk'
import defaultTheme from './theme'

const Provider = connect(({
  theme,
  index,
  ...props
}) => (
  <ThemeProvider theme={theme}>
    <div {...props} />
  </ThemeProvider>
))

Provider.defaultProps = {
  index: 0,
  theme: defaultTheme
}

export default Provider
