import React, { Component } from 'react'

const DetailData = [
  { id: '01', content: 'hello world' },
  { id: '02', content: 'hello react' },

]

export default class Detail extends Component {


  render() {
    // console.log(this.props);
    // paramsを受け取る
    //const { id, title } = this.props.match.params

    // search paramsを受け取る
    const { search } = this.props.location
    var searchParams = new URLSearchParams(search)
    // 検索パラメーターを列挙する
    // for (let p of searchParams) {
    //   console.log(p);
    // }
    var id = searchParams.get("id")
    var title = searchParams.get("title")

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
