import React, { Component } from 'react'
import Conditional from './Conditional'
import Form from './Form'

class App extends React.Component {
  constructor() {
    super()
    this.state={
      isLoading: true,
      backgroundColor: "white",
      color: "black",
    }
    this.changeColor = this.changeColor.bind(this)
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState(
        {
          isLoading: false
        })
    },1500)
  }
  changeColor(){
    if(this.state.color === "black"){
      return this.setState({
        backgroundColor: "#262833",
        color: "white"
      })
    }
    return this.setState({
      backgroundColor: "white",
      color: "black"
    })
  }



  render(){
    return(
      <div style={{backgroundColor: this.state.backgroundColor, color: this.state.color }}>
        <Conditional isLoading={this.state.isLoading} />
        <button
          onClick={ this.changeColor }
          style={{backgroundColor: this.state.backgroundColor, color: this.state.color }}> Change backgroundColor
        </button>
        <br />
        <br />
        <Form />
      </div>
    )
  }
}
export default App
