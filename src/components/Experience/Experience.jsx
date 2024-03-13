import styles from './Experience.module.css';

import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';

export const Experience = () => {
	return (
		<section className={styles.container} id='experience'>
			<h2 className={styles.title}>Experiencia</h2>
			<ul className={styles.history}>
				{history.map((historyItem, id) => {
					return (
						<li key={id} className={styles.historyItem}>
							<h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
							<p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
							<ul>
								{historyItem.experiences.map((experiences, id) => {
									return <li key={id}>{experiences}</li>;
								})}
							</ul>
						</li>
					);
				})}
			</ul>
		</section>
	);
};
