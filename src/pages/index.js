import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import laptop from "../public/laptop.png"
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.textContainer}>
          <h1 className={styles.h1}>Hi, I'm Ruslan!</h1>
          <h3 className={styles.h3}>Welcome to my pet website.</h3>
          <p className={styles.p}>
            I'm a CS student, who is trying to learn web-development by himself.
            On this website you can find out some information about me and my projects.
          </p>
        </div>
        <Image 
          className={styles.img}
          src={laptop}
          width={450}
          layout="intrinsic"
          alt="laptop"
        />
      </main>
    </Layout>
  )
}
