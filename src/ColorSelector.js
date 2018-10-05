import React, { Component } from 'react';

export default class ColorSelector extends Component {
  
  //received color as prop. Has fn to update color to the color selected. 
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      const updateColor = () => {this.props.selectedColor(str)}
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={updateColor}/>
    })
  )
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
