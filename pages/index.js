import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import { AppBar, Toolbar, Typography, Button } from '@mui/material'

import useStyles from '../utils/styles'

export default function Home() {

  const classes = useStyles(); 

  return (
    <div>
      <Head>
        <title>Magic-store</title>
        <meta name="Tienda de artículos para el hogar" content="Artículos para el hogar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Magic-world</Typography>
        </Toolbar>
      </AppBar>

      <Button color="primary">TEST</Button>
      <main className={styles.main}>
        <h1>Menu</h1>
        <Link href="/products">
          <a>Go to products!</a>
        </Link>
        <Image 
          src="/images/20673.png" 
          height={300}
          width={300}
          alt="Facebook"
        />
      </main>
    </div>
  )
}
