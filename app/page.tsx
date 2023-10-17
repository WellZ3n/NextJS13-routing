'use client'

import Link from "@/node_modules/next/link";
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <div>This is home</div>
      <div style={{ width: "30%", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
        <div className={styles.redNeon}>
          <Link href="/first" className={styles.redLink}>
            Go to First
          </Link>
        </div>
        <div className={styles.blueNeon}>
          <Link href="/second" className={styles.blueLink}>
            Go to Second
          </Link>
        </div>
      </div>
    </main>
  );
}
