import React from 'react'
import './footerStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaSearchLocation, FaTwitter, FaPhone} from 'react-icons/fa'

const footer = () => {
  return (
    <div className='footer'>
<div className='footer-container'>
    <div className='left'>
        <div className='location'>
         <FaSearchLocation size={20} style={{color: '#ffffff', marginRight: '2rem'}} />  
    
        <div>
            <p>128 Thess Par</p>
            <h4>Thessaloniki, Greece</h4>
                    </div>
                </div>

                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#ffffff', marginRight: '2rem'}}/> 2310231023</h4>
                </div>

                <div className='email'>
                <h4><FaMailBulk size={20} style={{color: '#ffffff', marginRight: '2rem'}}/>Dogslife@gmail.com</h4>
                </div>
            </div>

            <div className='right'>
                <h4>About dog's life</h4>
                <p>Dog's life it's a project from scratch, in my tryness to learn reactJs. All components are producted by me, and also all the website.</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                    <FaTwitter size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                    <FaLinkedin size={30} style={{color: '#ffffff', marginRight: '1rem'}}/>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default footer