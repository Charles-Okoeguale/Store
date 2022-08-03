import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/_variables.scss'
import '../styles/Navbar.Module.scss'
import '../styles/Intro.Module.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
