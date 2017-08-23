import React from 'react'
import { connect } from 'refunk'

class Hash extends React.Component {
  componentDidMount () {
    const { update } = this.props
    const { hash } = window.location
    const index = parseInt(hash.replace(/^#/, ''))
    if (index) {
      update(state => ({ index }))
    }
  }

  componentDidUpdate (last) {
    const { index } = this.props
    if (last.index === index) return
    window.location.hash = index
  }

  render () {
    return false
  }
}

const map = state => ({ index: state.index })

export default connect(map)(Hash)
