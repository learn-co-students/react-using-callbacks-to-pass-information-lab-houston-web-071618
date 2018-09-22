import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  changePaintColor = () => {
    this.setState({
      color: this.props.paintColor
    })
  }

  render() {
    return (
      <div onClick={this.changePaintColor} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
