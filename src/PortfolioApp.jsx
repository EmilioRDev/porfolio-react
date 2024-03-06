import styles from './App.module.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'

export const PortfolioApp = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  )
}
