// React をImport
import React, { Component } from 'react'
import Hello from "./components/Hello/Hello"
import Welcome from './components/Welcome/Welcome'

// 殻のAppコンポーネントを作成してエクスポート
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>

    )
  }
}
