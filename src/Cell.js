import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  // changeColor = () => {
  //   const cellColor = {
  //       selectedColor: cellColor
  //   }
  // }

  handleClick = () => {
    this.setState({
      color: this.props.cool()
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick} >
      </div>
    )
  }

}
