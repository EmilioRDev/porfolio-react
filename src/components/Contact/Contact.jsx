import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
	return (
		<footer id='contact' className={styles.container}>
			<div className={styles.text}>
				<h2>Contacto</h2>
				<p>No dudes en comunicarte conmigo</p>
			</div>
			<ul className={styles.links}>
				<li className={styles.link}>
					<a href='mailto:jemiliosr58@gmail.com'>
						<img src={getImageUrl('contact/emailIcon.webp')} alt='Email Icon' />
                  <span>jemiliosr58@gmail.com</span>
					</a>
				</li>
				<li className={styles.link}>
					<a href='https://www.linkedin.com/in/joseemiliosantiagorodriguez/'>
						<img
							src={getImageUrl('contact/linkedinIcon.webp')}
							alt='Linkedin Icon'
						/>
                  <span>linkedin.com/joseemiliosantiagorodriguez</span>
					</a>
				</li>
				<li className={styles.link}>
					<a href='https://github.com/EmilioRDev'>
						<img src={getImageUrl('contact/githubIcon.webp')} alt='Github Icon' />
                  <span>github.com/EmilioRDev</span>
					</a>
				</li>
			</ul>
		</footer>
	);
};
