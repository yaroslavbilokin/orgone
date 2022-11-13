import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import MainPage from './containers/MainPage';
import { LOCAL_STORAGE_KEY } from './constants';

const App = () => {
  const userCode = localStorage.getItem(LOCAL_STORAGE_KEY);
  const [userAuthenticated, setUserAuthenticated] = useState(!!userCode || false);

  if (!userAuthenticated) {
    return (
      <div className="app-container">
        <Routes>
          <Route
            path="/login"
            element={<LoginPage setUserAuthenticated={setUserAuthenticated} />}
          />
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
