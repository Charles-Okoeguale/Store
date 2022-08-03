import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Intro from './Intro'
import Navbar from './Navbar'


const Home: NextPage = () => {
  return (
        <div>
          <Navbar/>
          <Intro/>
        </div>
  )
}

export default Home
