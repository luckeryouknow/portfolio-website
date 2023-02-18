import Layout from "@/components/Layout"
import Head from "next/head"
import { stackContent } from "@/content/stackContent"
import styles from "../styles/stack.module.css"
import Image from "next/image"

export default function Blog () {
  let elemCounter = 0;

  return (
    <Layout>
      <Head>
        <title>Stack</title>
      </Head>
      <main>
        <h1 className={styles.h1}>Stack</h1>
        <div className={styles.gridContainer}>
          {stackContent.map((stackELem) => {
            elemCounter += 1;

            if (elemCounter !== 8) {
              return (
                <div className={styles.gridCard} key={stackELem.text}>
                  <Image 
                  className={styles.img}
                  src={stackELem.img}
                  width={stackELem.width}
                  alt={stackELem.text}
                  />
                  <div className={styles.name}>{stackELem.text}</div>
                </div>
              );
            } else {
              return (
                <div className={styles.gridCard} key={stackELem.text}>
                  <Image 
                  className={styles.npmImage}
                  src={stackELem.img}
                  width={stackELem.width}
                  alt={stackELem.text}
                  />
                  <div className={styles.name}>{stackELem.text}</div>
                </div>
              );
            }
          })}
        </div>
      </main>
    </Layout>
  )
}