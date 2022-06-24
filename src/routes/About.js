import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import DogImage from '../components/DogImage'
import AboutSection from '../components/About1'


const About = () => {
  return (
    <div>

        <Navbar />
        <DogImage heading='WHAT A DOG' text='Here I am rock you like a hurricane'/>
        
        <AboutSection />
        <Footer />
        
    </div>
  )
}

export default About