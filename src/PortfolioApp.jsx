import styles from './App.module.css'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Skills } from './components/skills/Skills'

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
