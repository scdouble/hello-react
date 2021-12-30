import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  handleCheckAll = (event) => {
    this.props.checkAllTodo(event.target.checked)
  }
  handleCheckAllDone = (params) => {
    this.props.clearAllDone()
  }

  render() {
    const { todos } = this.props
    // 完了したタスク
    const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)

    // トータルの数
    const total = todos.length



    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
        </label>
        <span>
          <span>Done {doneCount}</span> / All {total}
        </span>
        <button onClick={this.handleCheckAllDone} className="btn btn-danger">Clear all done todos</button>
      </div>
    )
  }
}
