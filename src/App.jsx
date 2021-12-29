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
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={this.state.todos} />
          <Footer />
        </div>
      </div>

    )
  }
}
