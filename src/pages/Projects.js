import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import BannerPage from '../components/BannerPage'

const Moderndentistry = () => {
  return (
    <div>
        <Navbar />
        <BannerPage heading="Projects" text="Our projects" image="images/modern.jpg" />
        <Footer />
    </div>
  )
}

export default Moderndentistry