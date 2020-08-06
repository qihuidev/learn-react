import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props)

    this.deleteItem = this.deleteItem.bind(this)
  }

  render() {
    const { content } = this.props
    return (
      <div onClick={ this.deleteItem }>{ content }</div>
    )
  }

  deleteItem() {
    const { del, index } = this.props
    del(index)
  }
}

export default TodoItem
