import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '../styles/_variables.scss'
import '../styles/Navbar.Module.scss'
import '../styles/Intro.Module.scss'
import '../styles/About.Module.scss'
import '../styles/Contact.Module.scss'
import '../styles/Footer.Module.scss'
import '../styles/Popup.Module.scss'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
