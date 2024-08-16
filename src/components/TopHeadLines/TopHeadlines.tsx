import { getTopHeadlines } from "../../api/getTopHeadlines";
import ISources from "../../interfaces/sources";
import React, { useEffect, useState } from "react";
import IData from "../../interfaces/data";
import styles from "./topHeadlines.module.css";
import { getCountries } from "../../utils/getCountries";

const TopHeadlines: React.FC = (): JSX.Element => {
  const [headlines, setHeadlines] = useState<ISources[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data: IData = await getTopHeadlines();
        setHeadlines(data.sources);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const countries = getCountries(headlines);

  return (
    <section className={styles["top-headlines"]}>
      <h2 className={styles["title"]}>TOP HEADLINES</h2>
      <div className={styles["countries"]}>
        {countries.map((country: string, index) => (
          <button className={styles["country"]} key={index}>
            {" "}
            {country}
          </button>
        ))}
      </div>
      {headlines.map((sources: ISources, index) => (
        <li className={styles["article"]} key={index}>
          <a
            href={sources.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles["article-link"]}
          >
            <h2 className={styles["description"]}>{sources.description}</h2>
            <p className={styles["name"]}>{sources.name}</p>
          </a>
        </li>
      ))}
    </section>
  );
};

export default TopHeadlines;
