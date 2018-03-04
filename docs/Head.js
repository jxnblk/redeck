import React from 'react'
import CSS from 'ok-css'

const meta = [
  {
    name: 'viewport',
    content: 'width=device-width,initial-scale=1'
  },
]

export default props => (
  <head>
    <title>Redeck</title>
    {meta.map(({ name, content }) => (
      <meta
        key={name}
        name={name}
        content={content}
      />
    ))}
    <CSS />
  </head>
)
