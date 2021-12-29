import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>Done 0</span> / All 2
        </span>
        <button className="btn btn-danger">Clear all done todos</button>
      </div>
    )
  }
}
