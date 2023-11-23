import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Intro from './views/Intro/Intro'
import Advant from './views/advant/Advant'
import StayProd from './views/stayprod/StayProd'
import Feedback from './views/feedback/Feedback'
import Footer from './views/footer/Footer'
import Getstart from './components/get_start/GetStart'



function App() {

  return (
    <div>
      <Header />
      
      <Intro />
      
      <Advant />
      
      <StayProd />

      <Feedback />

      <Footer />
    </div>
  )
}

export default App
