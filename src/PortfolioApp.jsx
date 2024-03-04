import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar'

export const PortfolioApp = () => {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  )
}
