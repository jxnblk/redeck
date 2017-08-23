
# redeck

React components for creating presentation decks from markdown
built with [styled-components][sc], [react-markdown][rmd], and [refunk][rf]

[sc]: https://styled-components.com
[rmd]: https://github.com/rexxars/react-markdown
[rf]: https://github.com/jxnblk/refunk


```sh
npm i redeck
```

## Getting Started

Import redeck components to build your own markdown based slide deck.

```js
import React from 'react'
import markdown from 'raw-loader!./deck.md'
import {
  Provider,
  Carousel,
  Slide,
  Markdown,
  Keyboard,
  Hash
} from 'redeck'

// Split a single markdown file or use multiple files
const slides = md.split('---\n')
  .filter(n => n.length)

const App = props => (
  <Provider>
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
  </Provider>
)

export default App
```

### App Setup

Use [Create React App][cra] or any other React application setup

[cra]: https://github.com/facebookincubator/create-react-app

MIT License
