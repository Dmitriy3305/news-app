import ISources from '../../interfaces/sources';
import styles from './topHeadlines.module.css';
import { IHeadlinesProps } from '../../interfaces/headlinesProps';

const TopHeadlines: React.FC<IHeadlinesProps> = ({
  headlines,
}): JSX.Element => {
  return (
    <section className={styles['top-headlines']}>
      <h2 className={styles['title']}>TOP HEADLINES</h2>
      {headlines.map((sources: ISources, index) => (
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
