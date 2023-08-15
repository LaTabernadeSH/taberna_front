import '../styles/globals.css'
import NavBar from '../Componentes/NavBar'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <NavBar />
   <Component {...pageProps} />
   </>
   )
}

export default MyApp
