import React, { Component } from 'react'

const DetailData = [
  { id: '01', content: 'hello world' },
  { id: '02', content: 'hello react' },

]

export default class Detail extends Component {


  render() {
   // console.log(this.props);
    const { id, title } = this.props.match.params
    const findResult = DetailData.find((detailObj) => {
      return detailObj.id === id
    })
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>Title:{title}</li>
          <li>Content:{findResult.content}</li>
        </ul>
      </div>
    )
  }
}
