import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from './About'
import Contact from './Contact'
import Intro from './Intro'
import Navbar from './Navbar'


const Home: NextPage = () => {
  return (
        <div>
          <Navbar/>
          <Intro/>
          <About/>
          <Contact/>
        </div>
  )
}

export default Home
