import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  colorChange = () =>{
    const color = this.props.getColor()
    this.setState({
      color:color
    })
  }

  render() {
    return (
      <div
      className="cell"
      onClick= {this.colorChange}
      style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
