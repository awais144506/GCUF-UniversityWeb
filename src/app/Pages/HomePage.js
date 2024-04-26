import React from 'react'
import Navbar from '../Components/Navbar'
import VCMessage from '../Components/VCMessage'
import Departments from '../Components/Departments'
import News from '../Components/News'
import Administration from '../Components/Administration'
import Footer from '../Components/Footer'
import Events from '../Components/Events'
import DisclaimerPopup from './PopUp'
function HomePage() {

  return (
    <>
    <DisclaimerPopup />
      <Navbar />
      <Events />
      <VCMessage />
      <Departments />
      <News />
      <Administration />
      <Footer />
    </>
  )
}

export default HomePage