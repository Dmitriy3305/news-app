import TopHeadlines from './components/TopHeadLines/TopHeadlines';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import NewsOfSearch from './components/NewsOfSearch/NewsOfSearch';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <section className={styles['news']}>
        <TopHeadlines />
        <NewsOfSearch />
      </section>
    </div>
  );
}

export default App;
