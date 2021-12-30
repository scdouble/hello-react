// React をImport
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


// 殻のAppコンポーネントを作成してエクスポート
export default class App extends Component {

  //State を初期化
  state = {
    todos: [
      { id: '001', name: 'eat', done: true },
      { id: '002', name: 'sleep', done: true },
      { id: '003', name: 'code', done: false },
      { id: '004', name: 'shopping', done: false },

    ]
  }

  // Todoを追加する
  addTodo = (todoObj) => {
    // 元のTodoを取得
    const { todos } = this.state
    // todo を追加
    const newTodos = [todoObj, ...todos]
    this.setState({ todos: newTodos })
  }

  // Itemコンポーネント用、TodoをUpdate用
  updateTodo = (id, done) => {
    // stateの中からTodoを取得
    const { todos } = this.state
    // データ加工
    const newTodos = todos.map((todoObj) => {
      // 引き数のIdと同じのTodoを見つけたら、属性Doneを修正して新しいTodoObjを作成する
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    this.setState({ todos: newTodos })
  }

  // Todoを削除
  deleteTodo = (id) => {
    // stateの中からTodoを取得
    const { todos } = this.state
    // 引き数のIdと同じIdのTodo以外のTodosを新しいTodoObjを作成する
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id
    })

    // Stateを更新
    this.setState({ todos: newTodos })

  }

  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
          <Footer />
        </div>
      </div>

    )
  }
}
