import React from 'react'
import BannerPage from '../components/BannerPage'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Navbar from '../components/Navbar'

const Contacts = () => {
  return (
    <div>
        <Navbar />
        <BannerPage heading="GET IN TOUCH" text="Grow with us" image="/images/contact.jpg" />
        <Form />
        <Footer />
    </div>
  )
}

export default Contacts