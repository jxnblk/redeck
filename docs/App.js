import React from 'react'
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
} from '../src'

import Footer from './Footer'

const slides = md.split('---\n')
  .filter(n => n.length)

console.log(slides)

const App = props => (
  <React.Fragment>
    <div>
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
    </div>
  </React.Fragment>
)
// <Keyboard />

export default App
