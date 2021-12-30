import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  getStudentData = (params) => {
    axios.get('http://localhost:3000/api1/students').then(
      response => { console.log('Success', response.data) },
      error => { console.log('Fail', error) }
    )
  }

  getCarData = (params) => {
    axios.get('http://localhost:3000/api2/cars').then(
      response => { console.log('Success', response.data) },
      error => { console.log('Fail', error) }
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>Click me </button>
      </div>
    )
  }
}
