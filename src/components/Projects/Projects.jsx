import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import { ProjectsCard } from './ProjectsCard';

export const Projects = () => {
	return (
		<section className={styles.container}>
			<h2 className={styles.title} id='projects'>
				Proyectos
			</h2>
			<div className={styles.projects}>
				{projects.map((project, id) => {
					return <ProjectsCard key={id} project={project} />;
				})}
			</div>
		</section>
	);
};
