import React from 'react'
import PropTypes from 'prop-types'

class Hash extends React.Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  }

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

export default Hash
