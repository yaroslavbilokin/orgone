import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Line } from 'rc-progress';
import logoIcon from '../../global/icons/logo-icon.svg';
import logoNameIcon from '../../global/icons/logo-name.svg';
import { HOME_PAGE_ROUTE, LOCAL_STORAGE_KEY } from '../../constants';
import Button from '../../components/Button';
import Input from '../../components/Input';
import './LoginPage.scss';

const LoginPage = ({ setUserAuthenticated }) => {
  const USER_CODE = '1234';
  const navigate = useNavigate();
  const [isIntro, setIsIntro] = useState(true);
  const [progressValue, setProgressValue] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleStart = () => {
    if (isIntro) {
      setIsIntro(false);
    } else {
      if (inputValue === USER_CODE) {
        localStorage.setItem(LOCAL_STORAGE_KEY, inputValue);
        setUserAuthenticated(true);
        navigate(HOME_PAGE_ROUTE);
      }
    }
  };
  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const increaseProgress = () => {
    setProgressValue((prevValue) => prevValue + 1);
  };

  useEffect(() => {
    const interval = setInterval(increaseProgress, 20);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if (progressValue === 100) {
      handleStart();
    }
  }, [progressValue]);

  if (isIntro) {
    return (
      <div className="login__main-container">
        <div className="login-intro__container">
          <div className="title">Welcome to</div>
          <div className="logo-icon">
            <img src={logoIcon} alt="logo-icon" />
          </div>
          <div>
            <img src={logoNameIcon} alt="ORGONE" />
          </div>
          <div className="progressbar-container">
            <Line
              percent={progressValue}
              transition="100"
              trailColor="#37393A"
              strokeColor="#ffffff"
              trailWidth={2.8}
              strokeWidth={2.8}
            />
          </div>
        </div>
        <div className="start-button__container">
          <Button text="START" onClick={handleStart} />
        </div>
      </div>
    );
  }

  return (
    <div className="login__main-container">
      <div className="login-container">
        <div className="title">Welcome to the community of biohackes</div>
        <div className="subtitle">
          Become one of the innovators be testing our <span className="highlighted">beta</span>
        </div>
        <Input
          value={inputValue}
          placeholder="Enter the You:inverse"
          onChange={handleInputChange}
        />
      </div>
      <div className="start-button__container">
        <Button text="START" onClick={handleStart} />
      </div>
    </div>
  );
};

export default LoginPage;
