import React from 'react'
import { connect } from 'refunk'
import {
  dec,
  inc,
  toggleXRay
} from './updaters'

class Keyboard extends React.Component {
  constructor () {
    super()

    this.handleKeydown = e => {
      const {
        key,
        shiftKey,
        metaKey,
        ctrlKey,
        altKey
      } = e

      if (metaKey || ctrlKey || altKey) return
      e.preventDefault()
      const { update } = this.props
      console.log('key', key)
      switch (key) {
        case 'j':
        case 'ArrowRight':
          update(inc)
          break
        case ' ':
          if (shiftKey) {
            update(dec)
          } else {
            update(inc)
          }
          break
        case 'k':
        case 'ArrowLeft':
        case 'Backspace':
          update(dec)
          break
        case '0':
          update(state => ({ index: 0 }))
          break
        case 'x':
          update(toggleXRay)
          break
      }
    }
  }

  componentDidMount () {
    document.body.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount () {
    document.body.removeEventListener('keydown', this.handleKeydown)
  }

  render () {
    return false
  }
}

const map = state => ({
  index: state.index
})

export default connect(map)(Keyboard)
