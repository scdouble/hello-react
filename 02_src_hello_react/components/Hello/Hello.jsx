import React from 'react'
import hello from './Hello.module.css'

export default class Hello extends React.Component {
  render(){
    return (
      <h2 className={hello.title}>Hello React!</h2>
    )
  }
}
