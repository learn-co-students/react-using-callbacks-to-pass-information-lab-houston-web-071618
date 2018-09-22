import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedColor: null
    }
  }

  changeSelectedColor = (selectedColor) => {

    this.setState({
      selectedColor: selectedColor
    })
    // console.log("set state called")
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell paintColor={this.state.selectedColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector handleSelectedColor={this.changeSelectedColor}/>
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
