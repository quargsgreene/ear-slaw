import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Ear Stew Home</title>
        <meta name="description" content="Ear Stew Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Ear Stew
        </h1>
        <h2 className={styles.description}>
          Listen differently...
        </h2>
        <nav>
          <ul className={styles.list}>
            <li className={styles.listitem}>
              <Link href="/shapeRoom">🥘 Enter </Link>
            </li>
            <li className={styles.listitem}>
              <Link href="/about"> &#128066; About </Link>
            </li>
          </ul>
        </nav>

      </main>
    </div>
  )
};

