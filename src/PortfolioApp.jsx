import styles from './App.module.css'
import { About, Experience, Hero, Navbar, Skills } from './components'

export const PortfolioApp = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </div>
  )
}
