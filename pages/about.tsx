import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function About () {
  return (
  <div className = {styles.container}>
    <Head>
      <title>About</title>
      <meta name="description"
      content="About" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <button className={styles.button}>
      <Link href="/"> Home </Link>
      </button>
    <main className={styles.main}>
      <h1 className={styles.title}>
        About
      </h1>
      <p>
        Are you tired of the same old rectangles showing you one music video at a time? <br />
        Did you long for a different viewing experience during the beginning of the pandemic once all of the live in-person shows went away? <br />
        Ear slaw is here to offer a new alternative to watching music videos.
      </p>
    </main>
  </div>
  )
};