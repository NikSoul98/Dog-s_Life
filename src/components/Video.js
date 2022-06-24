import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'





const Video = () => {
  return (
    <div className='dog'>

<div className = 'content'>
    <h1>Food,Love,Walk</h1>
    <p>WORLD'S FIRST WEBSITE PAGE FOR DOGGIES!</p>
</div>
<div className='port'>
   <Link to='/about' className='btn'>About</Link> 
   <Link to='/contact' className='btn btn-light'>Contact</Link> 
</div>
    </div>
    
  )
}

export default Video