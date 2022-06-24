import React, { Component } from 'react'
import './DogImageStyles.css'

export class DogImage extends Component {
  render() {
    return (
      <div className='dogblack-img'>
        <div className='heading'>

            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>


      </div>
    )
  }
}

export default DogImage