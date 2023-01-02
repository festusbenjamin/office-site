import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Servicedetails from '../components/Service-details';
import Aboutinfo from '../components/About-info';

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Servicedetails />
      <Aboutinfo />
      <Footer />
    </div>
  )
}

export default Home