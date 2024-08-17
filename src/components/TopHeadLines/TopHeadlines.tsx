import ISources from '../../interfaces/ISources';
import styles from './topHeadlines.module.css';
import { useAppSelector } from '../../store/store';
import { selectHeadlines } from '../../store/slices/newsSlice';

const TopHeadlines: React.FC = (): JSX.Element => {
  const topHeadlines = useAppSelector(selectHeadlines);

  return (
    <section className={styles['top-headlines']}>
      <h2 className={styles['title']}>TOP HEADLINES</h2>
      {topHeadlines.map((sources: ISources, index) => (
        <li className={styles['article']} key={index}>
          <a
            href={sources.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['article-link']}
          >
            <h2 className={styles['description']}>{sources.description}</h2>
            <p className={styles['name']}>{sources.name}</p>
          </a>
        </li>
      ))}
    </section>
  );
};

export default TopHeadlines;
