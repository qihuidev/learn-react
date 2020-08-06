import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.deleteItem = this.deleteItem.bind(this)
  }

  render() {
    const { content } = this.props
    return (
      <li onClick={ this.deleteItem }>{ content }</li>
    )
  }

  deleteItem() {
    const { del, index } = this.props
    del(index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  del: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  content: ''
}

export default TodoItem
