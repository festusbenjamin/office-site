import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import BannerPage from '../components/BannerPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import Serviceinfo from '../components/Service-info'
import Servicedetails from '../components/Service-details'

const Services = () => {
  return (
    <div>
      <Navbar />
      <BannerPage heading="Services" text="We provide range of services" image="images/comp.jpg" />
      <Serviceinfo />
      <Servicedetails />
      <Footer />
    </div>
  )
}

export default Services