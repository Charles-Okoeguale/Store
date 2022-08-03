import type { NextPage } from 'next'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Intro from './Intro'
import Navbar from './Navbar'


const Home: NextPage = () => {
  return (
        <div>
          <Navbar/>
          <Intro/>
          <About/>
          <Contact/>
          <Footer/>
        </div>
  )
}

export default Home
