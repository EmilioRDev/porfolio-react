import styles from './ProjectsCard.module.css';
import { getImageUrl } from '../../utils';

export const ProjectsCard = ({
	project: { title, imageSrc, description, skills, demo, source },
}) => {
	return (
		<div className={styles.container}>
			<img
				src={getImageUrl(imageSrc)}
				alt={`Imagen de ${title}`}
				className={styles.image}
			/>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
			<ul className={styles.skills}>
				{skills.map((skill, id) => {
					return (
						<li className={styles.skill} key={id}>
							{skill}
						</li>
					);
				})}
			</ul>
			<div className={styles.links}>
				<a href={demo} className={styles.link}>
					Prueba
				</a>
				<a href={source} className={styles.link}>
					Código
				</a>
			</div>
		</div>
	);
};
