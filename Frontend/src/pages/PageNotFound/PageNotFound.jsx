import styles from './PageNotFound.module.css'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className={styles.pageNotFound} aria-labelledby='not-found-title'>
      <div className={styles.backdrop} aria-hidden='true' />

      <div className={styles.card}>
        <p className={styles.kicker}>AutoHub</p>
        <p className={styles.code}>404</p>

        <h1 id='not-found-title' className={styles.title}>
          Route Lost, Destination Still Ahead.
        </h1>

        <p className={styles.description}>
          The page you are trying to reach does not exist or may have been moved.
          Let&apos;s get you back to the main route.
        </p>

        <div className={styles.actions}>
          <Link to='/' className={styles.primaryBtn}>
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PageNotFound