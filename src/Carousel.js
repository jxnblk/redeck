import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  overflow: hidden;
  @media print {
    overflow: visible;
  }
`

const Inner = styled.div`
  display: flex;
  width: ${props => props.children.length * 100}vw;
  transform: translateX(${props => (props.index % props.children.length) * -100}vw);
  transition-property: transform;
  transition-duration: .2s;
  transition-timing-function: ease-out;

  @media print {
    width: 100%;
    display: block;
    transform: none;
  }
`

const Carousel = props => (
  <Root>
    <Inner
      {...props}
      length={props.children.length}
    />
  </Root>
)

Carousel.propTypes = {
  index: PropTypes.number.isRequired,
  // length: PropTypes.number.isRequired,
}

export default Carousel
