import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import MainPage from './containers/MainPage';
import { LOCAL_STORAGE_KEY } from './constants';
import { getFromLocalStorage } from './global/helpers';

const App = () => {
  const userCode = getFromLocalStorage('user-code');
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
