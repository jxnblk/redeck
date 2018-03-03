import React from 'react'

const meta = [
  {
    name: 'viewport',
    content: 'width=device-width,initial-scale=1'
  },
]

export default props => (
  <React.Fragment>
    <title>Redeck</title>
    {meta.map(({ name, content }) => (
      <meta
        key={name}
        name={name}
        content={content}
      />
    ))}
  </React.Fragment>
)
