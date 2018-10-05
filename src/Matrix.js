import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = { color: '#fff'}
  }

  //fn to pass color as prop to Cell
  currentColor = () => {
    this.state.color
  }

  //fn to select new color and set it as state
  selectedColor = (hex) => {
    this.setState({color: hex})
  }
  
  //once row is generated, Cell is created and we pass color prop to Cell
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} currentColor={this.currentColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() { 
    return (
      <div id="app">
        <ColorSelector selectedColor={this.selectedColor} /> 
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
