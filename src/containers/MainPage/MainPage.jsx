import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../HomePage';
import Header from '../../components/Header';
import MovePage from '../MovePage';
import BreathPage from '../BreathPage';

const MainPage = () => {
  const location = useLocation();

  const isStatisticPage = location.pathname.includes('/statistic');

  return (
    <div>
      {!isStatisticPage && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/move" element={<MovePage />} />
        <Route path="/move/statistic" element={<MovePage />} />
        <Route path="/breath" element={<BreathPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default MainPage;
