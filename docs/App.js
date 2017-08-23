import React from 'react'
import XRay from 'react-x-ray'
import md from 'raw-loader!./deck.md'
import {
  Provider,
  Carousel,
  Slide,
  Markdown,
  Keyboard,
  Hash,
  SlideList,
  theme
} from 'redeck'

import Footer from './Footer'

const slides = md.split('---\n')
  .filter(n => n.length)

const App = props => (
  <Provider theme={theme}>
    <Carousel>
      {slides.map(slide => (
        <Slide key={slide}>
          <Markdown>
            {slide}
          </Markdown>
        </Slide>
      ))}
    </Carousel>
    <Keyboard />
    <Hash />
    <SlideList slides={slides} />
    <Footer />
  </Provider>
)

export default App
