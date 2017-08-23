import React from 'react'
import { connect } from 'refunk'
import styled from 'styled-components'
import {
  dec,
  inc,
  toggleXRay
} from './updaters'

export const Root = styled.nav`
  padding: 32px;
  @media print {
    display: none;
  }
`

export const Link = styled.a`
  display: inline-block;
  min-width: 2em;
  height: 2em;
  padding: 4px;
  margin: 0;
  margin-right: 4px;
  margin-bottom: 4px;
  color: black;
  background-color: white;
  text-decoration: none;
`

export const Button = Link
  .withComponent('button')
  .extend`
  font-family: inherit;
  font-size: inherit;
  width: auto;
  appearance: none;
  border: 0;
`

const List = ({
  slides,
  update
}) => (
  <Root>
    <div>
      <Button
        onClick={e => update(dec)}
        children='Previous'
      />
      <Button
        onClick={e => update(inc)}
        children='Next'
      />
    </div>
    {slides.map((slide, i) => (
      <Link
        key={i}
        href={'#' + i}
        onClick={e => {
          update(state => ({ index: i }))
          window.scrollTo(0, 0)
        }}
        children={i}
      />
    ))}
  </Root>
)

List.defaultProps = {
  slides: [],
  update: () => {}
}

export default connect()(List)
