import Layout from "@/components/Layout"
import Head from "next/head";
import styles from "../styles/about.module.css";
import Image from "next/image";
import myPhoto from "../public/my-photo.jpg";

export default function About () {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.textContainer}>
          <h1 className={styles.h1}>About me</h1>
          <p className={styles.p}>
            Hi, I'm Ruslan! I'm a CS student who lives in Odessa oblast'(UA) and studies in Ternopil(UA).
            Welcome to my web-place. You can feel yourself free to use it.
          </p>
        </div>
        <Image 
        className={styles.img}
        src={myPhoto}
        width={425}
        layout="intrinsic"
        alt="my photo"
        />
      </main>
    </Layout>
  )
}