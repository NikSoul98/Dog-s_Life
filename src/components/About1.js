import React from 'react'
import './About1Styles.css'

import {Link} from 'react-router-dom'

import Dog1 from '../assets/dog1.jpg'
import Dog2 from '../assets/dog2.jpg'
import Dog3 from '../assets/dog3.jpg'

const About1 = () => {
  return (
    <div className='About1'>
        <div className='left'>
            <h1>About</h1>
           
         <p>Its about dog's life and their problems</p>
         <Link to='./contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Dog3} className='img' alt='' />
                </div>
                <div className='image-stack center'>
                    <img src={Dog1} className='img' alt='' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Dog2} className='img' alt='' />
                </div>
                
            </div>
        </div>



    </div>
  )
}

export default About1