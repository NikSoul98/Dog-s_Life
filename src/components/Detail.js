import React from 'react'
import { Link } from 'react-router-dom'
import './DetailStyles.css'

const Detail = () => {
  return (
    <div className='detail'>
        <div className='card-container'>
            
            <div className='card'>
    <h3>First</h3>
    <span className='bar'></span>
    <p className='advices'>Advices</p>
    <p>Advices</p>
    <p>Advices</p>
    <p>Advices</p>
    <p>Advices</p>
    <Link to='/contact' className='btn'>Enter</Link>
            </div>

            <div className='card'>
    <h3>Foods</h3>
    <span className='bar'></span>
    <p className='advices'>Foods</p>
    <p>Advices</p>
    <p>Advices</p>
    <p>Advices</p>
    <p>Advices</p>
    <Link to='/contact' className='btn'>Enter</Link>
            </div>

            <div className='card'>
    <h3>Meds</h3>
    <span className='bar'></span>
    <p className='advices'>Meds</p>
    <p>Advices</p>
    <p>Advices</p>
    <p>Advices</p>
    <p>Advices</p>
    <Link to='/contact' className='btn'>Enter</Link>
            </div>
            </div> 
    </div>
  )
}

export default Detail