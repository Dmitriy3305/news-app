import TopHeadlines from './components/TopHeadLines/TopHeadlines';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { selectError, selectLoading } from './store/slices/newsSlice';
import { useEffect } from 'react';
import { fetchNews } from './api/fetchNews';
import { useAppDispatch, useAppSelector } from './store/store';

function App() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      <Header />
      <Nav />
      <TopHeadlines />
    </div>
  );
}

export default App;
