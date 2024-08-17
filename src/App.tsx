import TopHeadlines from './components/TopHeadLines/TopHeadlines';
import Header from './components/Header/Header';
import './App.css';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import ISources from './interfaces/sources';
import IData from './interfaces/data';
import { getTopHeadlines } from './api/getTopHeadlines';
import { getCountries } from './utils/getCountries';
import { getLanguages } from './utils/getLanguages';

function App() {
  const [headlines, setHeadlines] = useState<ISources[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data: IData = await getTopHeadlines();
        setHeadlines(data.sources);
      } catch (error) {
        setError('An error occurred while fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const countries = getCountries(headlines);
  const languages = getLanguages(headlines);

  return (
    <div>
      <Header />
      <Nav countries={countries} languages={languages} />
      <TopHeadlines headlines={headlines} />
    </div>
  );
}

export default App;
