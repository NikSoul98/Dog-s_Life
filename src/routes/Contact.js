import React from 'react'
import DogImage from '../components/DogImage'
import Navbar from '../components/Navbar'

import Form from '../components/Form'

const Contact = () => {
  return (
    <div>

        <Navbar />
        <DogImage heading='Contact' text='Contact Dogs Life' />
        <Form />
      
    </div>
  )
}

export default Contact