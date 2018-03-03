import browser from 'browser-env'
import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import {
  Carousel,
  Slide,
  Keyboard,
  Hash,
  SlideList,
} from './src'
import { dec, inc } from './src/updaters'

browser()

const props = {
  update: () => {},
  index: 0,
  slides: []
}

test('Carousel renders', t => {
  const a = render(
    <Carousel {...props}>
      <div />
      <div />
    </Carousel>
  ).toJSON()
  t.snapshot(a)
})

test('Carousel renders with index', t => {
  const a = render(
    <Carousel {...props} index={1}>
      <div />
      <div />
    </Carousel>
  ).toJSON()
  t.snapshot(a)
})

test('Slide renders', t => {
  const a = render(<Slide />).toJSON()
  t.snapshot(a)
})

test.skip('Keyboard renders', t => {
  const a = render(
    <Keyboard {...props} />
  ).toJSON()
  t.snapshot(a)
})

test.skip('Hash renders', t => {
  const a = render(
    <Hash {...props} />
  ).toJSON()
  t.snapshot(a)
})

test('SlideList renders', t => {
  const a = render(
    <SlideList {...props} />
  ).toJSON()
  t.snapshot(a)
})

test('dec decrements index', t => {
  const a = dec({ index: 1 })
  t.is(a.index, 0)
})

test('dec stops at 0', t => {
  const a = dec({ index: 0 })
  t.is(a, null)
})

test('inc increments index', t => {
  const a = inc({ index: 1 })
  t.is(a.index, 2)
})
