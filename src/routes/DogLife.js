import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import DogImage from '../components/DogImage'
import Detail from '../components/Detail'

const DogLife = () => {
  return (
    <div>

        <Navbar />
        <DogImage heading='DOGGIES LIFE.' text='Choose your detail'/>
        <Detail />
        <Footer />
    </div>
  )
}

export default DogLife