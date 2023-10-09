import Head from 'next/head'
import Image from 'next/image'
import Carrusel from '../Componentes/carrusel/Carrusel'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
        <div>
          <Home />  
        </div>


        <div className="">
          <Carrusel />
        </div>
        <br />
        
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <h2>
          All rights reserved to Henry Tabern Team
        </h2>
      </footer>
    </div>
  )
}

export default Home;