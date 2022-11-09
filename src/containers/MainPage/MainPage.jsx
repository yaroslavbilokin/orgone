import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../HomePage';
import Header from '../../components/Header';
import MovePage from '../MovePage';
import BreathPage from '../BreathPage';
import SleepPage from '../SleepPage';
import MeditatePage from '../MeditatePage';
import BreathStatisticPage from '../BreathStatisticPage';
import MoveStatisticPage from '../MoveStatisticPage';
import SleepStatisticPage from '../SleepStatisticPage';
import MeditateStatisticPage from '../MeditateStatisticPage';

const MainPage = () => {
  const location = useLocation();

  const isStatisticPage = location.pathname.includes('/statistic');

  return (
    <div>
      {!isStatisticPage && <Header />}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="move" element={<MovePage />} />
        <Route path="move/statistic" element={<MoveStatisticPage />} />
        <Route path="breath" element={<BreathPage />} />
        <Route path="breath/statistic" element={<BreathStatisticPage />} />
        <Route path="sleep" element={<SleepPage />} />
        <Route path="sleep/statistic" element={<SleepStatisticPage />} />
        <Route path="meditate" element={<MeditatePage />} />
        <Route path="meditate/statistic" element={<MeditateStatisticPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default MainPage;
