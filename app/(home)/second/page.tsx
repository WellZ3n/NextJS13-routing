import Link from '@/node_modules/next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>This is Second</div>
      <div className={styles.whiteOutline}>
        <Link href="/first" className={styles.link}>
          Go to first
        </Link>
      </div>
    </main>
  )
}
