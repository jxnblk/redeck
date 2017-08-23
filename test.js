import browser from 'browser-env'
import test from 'ava'
import React from 'react'
import { create as render } from 'react-test-renderer'
import {
  Provider,
  Carousel,
  Slide,
  Markdown,
  Keyboard,
  Hash,
  SlideList,
  theme
} from './src'
import {
  Heading,
  Image,
  Pre,
  Code,
  CodeBlock,
  BlockQuote,
  Link,
  List,
  Item
} from './src/Markdown'
import { dec, inc } from './src/updaters'

browser()

test('Provider renders', t => {
  const a = render(<Provider />).toJSON()
  t.snapshot(a)
})

test('Carousel renders', t => {
  const a = render(
    <Provider>
      <Carousel />
    </Provider>
  ).toJSON()
  t.snapshot(a)
})

test('Slide renders', t => {
  const a = render(<Slide />).toJSON()
  t.snapshot(a)
})

test('Markdown renders', t => {
  const a = render(<Markdown />).toJSON()
  t.snapshot(a)
})

test('Keyboard renders', t => {
  const a = render(
    <Provider>
      <Keyboard />
    </Provider>
  ).toJSON()
  t.snapshot(a)
})

test('Hash renders', t => {
  const a = render(
    <Provider>
      <Hash />
    </Provider>
  ).toJSON()
  t.snapshot(a)
})

test('SlideList renders', t => {
  const a = render(
    <Provider>
      <SlideList />
    </Provider>
  ).toJSON()
  t.snapshot(a)
})

test('Heading renders', t => {
  const a = render(<Heading />).toJSON()
  t.snapshot(a)
})

test('Image renders', t => {
  const a = render(<Image />).toJSON()
  t.snapshot(a)
})

test('Pre renders', t => {
  const a = render(<Pre theme={theme} />).toJSON()
  t.snapshot(a)
})

test('Code renders', t => {
  const a = render(<Code theme={theme} />).toJSON()
  t.snapshot(a)
})

test('CodeBlock renders', t => {
  const a = render(<CodeBlock theme={theme} />).toJSON()
  t.snapshot(a)
})

test('BlockQuote renders', t => {
  const a = render(<BlockQuote theme={theme} />).toJSON()
  t.snapshot(a)
})

test('Link renders', t => {
  const a = render(<Link />).toJSON()
  t.snapshot(a)
})

test('List renders', t => {
  const a = render(<List />).toJSON()
  t.snapshot(a)
})

test('Item renders', t => {
  const a = render(<Item />).toJSON()
  t.snapshot(a)
})

test('theme snapshot', t => {
  t.snapshot(theme)
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
