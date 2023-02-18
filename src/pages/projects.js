import Layout from "@/components/Layout";
import Head from "next/head";
import styles from "../styles/projects.module.css";
import { projectsContent } from "@/content/projectsContent";
import Link from "next/link";

export default function Projects () {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <main>
        <h1 className={styles.h1}>Projects</h1>
        <div className={styles.gridContainer}>
          {projectsContent.map((projectsContentElem) => {
            return (
              <div className={styles.gridCard} key={projectsContentElem.description}>
                <Link className={styles.link} href={projectsContentElem.link}>{projectsContentElem.linkText}</Link>
                <div className={styles.description}>{projectsContentElem.description}</div>
                <div className={styles.linksContainer}>
                  <Link className={styles.source} href={projectsContentElem.link}>Source</Link>
                  <Link className={styles.demo} href={projectsContentElem.demo}>Demo</Link>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}