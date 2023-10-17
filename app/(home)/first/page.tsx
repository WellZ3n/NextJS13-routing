import Link from '@/node_modules/next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>This is First</div>
      <div className={styles.whiteOutline}>
        <Link href="/second" className={styles.link}>
          Go to second
        </Link>
      </div>
    </main>
  )
}
