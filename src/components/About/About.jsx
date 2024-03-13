import styles from './About.module.css'
import { getImageUrl } from '../../utils';


export const About = () => {
	return (
		<section className={styles.container} id='about'>
			<h2 className={styles.title}>Sobre mí</h2>
			<ul className={styles.aboutItems}>
				<li className={styles.aboutItem}>
					<img src={getImageUrl('about/cursorIcon.png')} alt='Cursor icon' />
					<div className={styles.aboutItemText}>
						<h3>Creatividad en acción</h3>
						<p>
							Cada proyecto es una oportunidad para expresar mi creatividad. Aunque
							mi experiencia es modesta, mis ideas son frescas y mi enfoque es
							innovador.
						</p>
					</div>
				</li>
				<li className={styles.aboutItem}>
					<img src={getImageUrl('about/serverIcon.png')} alt='Server icon' />
					<div className={styles.aboutItemText}>
						<h3>Aprendizaje continuo</h3>
						<p>
							Me embarco en cada proyecto con la mentalidad de aprendizaje
							continuo. Cada línea de código escrita es una oportunidad para
							mejorar y perfeccionar mis habilidades.
						</p>
					</div>
				</li>
				<li className={styles.aboutItem}>
					<img src={getImageUrl('about/uiIcon.png')} alt='UI icon' />
					<div className={styles.aboutItemText}>
						<h3>Colaboración</h3>
						<p>
							Creo en la importancia de trabajar en equipo y aprender de los demás.
							Estoy abierto a colaboraciones y proyectos que desafíen mis límites y
							amplíen mis horizontes.
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
};
