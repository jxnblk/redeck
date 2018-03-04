import React from 'react'
import Refunk from 'refunk/component'
import { ThemeProvider } from 'styled-components'
import Typography from 'ok-typography'
import md from 'raw-loader!./deck.md'
import {
  Carousel,
  Slide,
  Markdown,
  Keyboard,
  Hash,
  SlideList,
} from '../src'

import Head from './Head'
import Footer from './Footer'

const theme = {}

const slides = md.split('---\n')
  .filter(n => n.length)

const App = props => (
  <Refunk
    index={0}
    render={({
      update,
      index
    }) => (
      <React.Fragment>
        <Head />
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Typography>
              <Carousel index={index}>
                {slides.map(slide => (
                  <Slide key={slide}>
                    <Markdown
                      text={slide}
                    />
                  </Slide>
                ))}
              </Carousel>
              <Keyboard
                update={update}
                index={index}
              />
              <Hash
                update={update}
                index={index}
              />
              <SlideList
                update={update}
                slides={slides}
              />
              <Footer />
            </Typography>
          </React.Fragment>
        </ThemeProvider>
      </React.Fragment>
    )}
  />
)

export default App
