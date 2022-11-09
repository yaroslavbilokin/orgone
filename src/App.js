import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import MainPage from './containers/MainPage';

const App = () => {
  const [userAuthenticated] = useState(true);

  if (!userAuthenticated) {
    return (
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="app-container">
      <MainPage />
    </div>
  );
};

export default App;
