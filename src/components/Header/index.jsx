import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

import './index.css'

export default class Header extends Component {

  // 受け取るPropsの形を制限
  static propType = {
    addTodo: PropTypes.func.isRequired
  }

  // キーボードEventのコールバック
  handleKeyUp = (event) => {
    // eventからkeycodeとtargeを取得
    const { keyCode, target } = event
    if (keyCode !== 13) {
      return
    }
    // 追加したTODOの名前が空ではない
    if(target.value.trim()===''){
      alert("value can not be null")
      return
    }
    // todoオブジェクトを作成
    const todoObj = { id: nanoid(), name: target.value, done: false }
    console.log(target.value, event.keyCode)
    this.props.addTodo(todoObj)

    target.value = ""
  }

  render() {
    return (
      <div className="todo-header">
        {/* イベントの発生源自身のValueを獲得したいときはrefをしなくても良い */}
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="Input your todo and press enter" />
      </div>
    )
  }
}
