import React from 'react'
import Refunk from 'refunk/component'
import { ThemeProvider } from 'styled-components'
import { Markdown } from '@compositor/markdown'
import md from 'raw-loader!./deck.md'
import {
  Carousel,
  Slide,
  Keyboard,
  Hash,
  SlideList,
  theme
} from '../src'

import Footer from './Footer'

const slides = md.split('---\n')
  .filter(n => n.length)

const App = props => (
  <Refunk
    index={0}
    render={({
      update,
      index
    }) => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Carousel
            index={index}
            length={slides.length}
          >
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
        </React.Fragment>
      </ThemeProvider>
    )}
  />
)

export default App
