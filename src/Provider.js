import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createProvider } from 'refunk'
import defaultTheme from './theme'

const Provider = ({
  theme,
  index,
  xray,
  ...props
}) => (
  <ThemeProvider theme={theme}>
    <div {...props} />
  </ThemeProvider>
)

Provider.defaultProps = {
  theme: defaultTheme
}

const hoc = createProvider({
  index: 0,
  xray: false
})

export default hoc(Provider)
