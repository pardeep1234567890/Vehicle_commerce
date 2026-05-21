import { useEffect, useState } from "react"
import styles from "./comingSoon.module.css"

const launchDate = new Date(2026, 5, 12, 0, 0, 0)

const formatLaunchDate = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "long",
  year: "numeric",
})

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M5 4.5h4.2l3.2 4.5 4-4.5H21l-6.1 6.9L21 19.5h-4.2l-3.5-4.9-4.3 4.9H3.2l6.5-7.3L5 4.5Z"
      fill="currentColor"
    />
  </svg>
)

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M14.2 8.6V7.1c0-.8.5-1.2 1.4-1.2H17V2.5h-2.3c-3.1 0-4.7 1.5-4.7 4.6v1.5H8v3.4h2V21h4.2v-9h2.9l.5-3.4h-3.4Z"
      fill="currentColor"
    />
  </svg>
)

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      d="M4.5 6.5h15c.8 0 1.5.7 1.5 1.5v8c0 .8-.7 1.5-1.5 1.5h-15C3.7 17.5 3 16.8 3 16V8c0-.8.7-1.5 1.5-1.5Zm0 1.8v.2l7.5 5 7.5-5v-.2h-15Zm15 8.2V10l-7 4.7c-.3.2-.7.2-1 0L4.5 10v6.5h15Z"
      fill="currentColor"
    />
  </svg>
)

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const launchTime = launchDate.getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = launchTime - now

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.backdrop} aria-hidden="true" />

      <main className={styles.content}>
        <section className={styles.heroCard} aria-label="Coming soon announcement">
          <p className={styles.kicker}>AutoHub</p>
          <h1 className={styles.title}>The only place to buy your next vehicle.</h1>
          <p className={styles.subtitle}>
            Shop directly on our website and complete every purchase with the dealer/admin handling the sale from start to finish.
          </p>

          <div className={styles.launchRow}>
            <span className={styles.launchLabel}>Official launch</span>
            <span className={styles.launchDate}>{formatLaunchDate.format(launchDate)}</span>
          </div>

          <div className={styles.countdownSection}>
            <div className={styles.countdown} aria-label="Countdown to launch">
              <div className={styles.timeBox}>
                <span className={styles.timeValue}>{timeLeft.days}</span>
                <span className={styles.timeLabel}>Days</span>
              </div>
              <div className={styles.timeBox}>
                <span className={styles.timeValue}>{timeLeft.hours}</span>
                <span className={styles.timeLabel}>Hours</span>
              </div>
              <div className={styles.timeBox}>
                <span className={styles.timeValue}>{timeLeft.minutes}</span>
                <span className={styles.timeLabel}>Minutes</span>
              </div>
              <div className={styles.timeBox}>
                <span className={styles.timeValue}>{timeLeft.seconds}</span>
                <span className={styles.timeLabel}>Seconds</span>
              </div>
            </div>
          </div>

          <nav className={styles.socialLinks} aria-label="Social media and contact links">
            <a className={styles.socialIcon} href="#" aria-label="Instagram" title="Instagram">
              <InstagramIcon />
            </a>
            <a className={styles.socialIcon} href="#" aria-label="X" title="X">
              <XIcon />
            </a>
            <a className={styles.socialIcon} href="#" aria-label="Facebook" title="Facebook">
              <FacebookIcon />
            </a>
            <a className={styles.socialIcon} href="mailto:hello@autohub.com" aria-label="Send Email" title="Send Email">
              <EmailIcon />
            </a>
          </nav>
        </section>
      </main>
    </div>
  )
}

export default ComingSoon