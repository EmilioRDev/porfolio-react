import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Hola, soy Emilio</h1>
				<p className={styles.description}>
					Un apasionado desarrollador web con un deseo insaciable de aprender y
					crecer en el emocionante mundo de la tecnología.
				</p>
				<a href={getImageUrl('resume/resume.pdf')} className={styles.resumeBtn}>Ver CV</a>
			</div>
         <img src={getImageUrl('hero/heroImage.svg')} alt='Hero image' className={styles.heroImg} />
         <div className={styles.topBlur}/>
         <div className={styles.bottomBlur}/>
		</section>
	);
};
