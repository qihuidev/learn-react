import React, { Component, Fragment } from "react";
import TodoItem from './TodoItem';

class TodoList extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [],
    };

    this.inputChange = this.inputChange.bind(this)
    this.createTodo = this.createTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange} />
          <button onClick={this.createTodo}>提交</button>
        </div>
      <ul>{ this.renderTodoItem() }</ul>
      </Fragment>
    );
  }

  // 渲染 todo 方法
  renderTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem key={index} content={item} index={index} del={this.deleteTodo} />
      );
    })
  }

  // 输入框更新事件
  inputChange(e) {
    const value = e.target.value
    this.setState(() => ({ inputValue: value }))
  }

  // 创建 todo 事件
  createTodo() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  // 删除 todo 事件
  deleteTodo(index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
}

export default TodoList;
