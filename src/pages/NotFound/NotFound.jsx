import styles from './NotFound.module.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate('/')
    }

    return (
        <main className={styles.page}>
      <div className={styles.confetti} aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => (
          <span key={index} className={styles[`piece${(index % 6) + 1}`]} />
        ))}
      </div>

      <section className={styles.card} aria-labelledby="error-title">
        <div className={styles.topLabel}>
          <span className={styles.sparkle} aria-hidden="true">✦</span>
          OOPS! A LITTLE PARTY DETOUR
          <span className={styles.sparkle} aria-hidden="true">✦</span>
        </div>

        <div className={styles.illustration} aria-hidden="true">
          <span className={styles.balloonLeft}>🎈</span>
          <span className={styles.balloonRight}>🎈</span>
          <span className={styles.cake}>🎂</span>
          <span className={styles.partyHat}>🎉</span>
          <span className={styles.starOne}>✦</span>
          <span className={styles.starTwo}>✧</span>
        </div>

        <p className={styles.errorCode}>404</p>
        <h1 id="error-title" className={styles.title}>
          This page is <span>off the guest list!</span>
        </h1>
        <p className={styles.description}>
          Looks like this page wandered off to find the birthday cake.
          Let’s get you back to where the party is!
        </p>

        <button className={styles.homeButton} type="button" onClick={goHome}>
          <span aria-hidden="true">🎁</span>
          Take me home
          <span className={styles.buttonArrow} aria-hidden="true">↗</span>
        </button>

        <p className={styles.footerNote}>
          No worries — there’s still plenty of cake. <span aria-hidden="true">♡</span>
        </p>
      </section>
    </main>
    )
}

export default NotFound