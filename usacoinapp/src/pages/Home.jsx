import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import News from '../components/News'
import Footer from '../components/Footer'
import Trump from '../components/Trump'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <News />
        <Trump />
        <Footer />
    </div>
  )
}

export default Home