
**DEPRECATED: see https://github.com/jxnblk/mdx-deck**

# redeck

React components for creating presentation decks from markdown
built with [@compositor/markdown][mdx] & [styled-components][sc].

[sc]: https://styled-components.com
[mdx]: https://github.com/c8r/markdown


```sh
npm i redeck
```

## Getting Started

Import redeck components to build your own markdown based slide deck.

```js
import React from 'react'
import Refunk from 'refunk/component'
import src from 'raw-loader!./deck.md'
import {
  Carousel,
  Slide,
  Markdown,
  Keyboard,
  Hash
} from 'redeck'

// Split a single markdown file or use multiple files
const slides = src.split('---\n')
  .filter(n => n.length)

const App = props => (
  <Refunk
    index={0}
    render={({
      update,
      index,
    }) => (
      <React.Fragment>
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
      </React.Fragment>
    )}
  />
)

export default App
```

MIT License
