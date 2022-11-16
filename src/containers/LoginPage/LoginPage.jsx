import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Line } from 'rc-progress';
import logoIcon from '../../global/icons/logo-icon.svg';
import logoNameIcon from '../../global/icons/logo-name.svg';
import { HOME_PAGE_ROUTE } from '../../constants';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { setToLocalStorage } from '../../global/helpers';
import './LoginPage.scss';

const LoginPage = ({ setUserAuthenticated }) => {
  const USER_CODE = '1234';
  const navigate = useNavigate();
  const [isIntro, setIsIntro] = useState(true);
  const [progressValue, setProgressValue] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleStart = useCallback(() => {
    if (isIntro) {
      setIsIntro(false);
    } else if (inputValue === USER_CODE) {
      setToLocalStorage('user-code', inputValue);
      setUserAuthenticated(true);
      navigate(HOME_PAGE_ROUTE);
    }
  }, [isIntro, inputValue, navigate, setUserAuthenticated]);
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
  }, [progressValue, handleStart]);

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

LoginPage.propTypes = {
  setUserAuthenticated: PropTypes.func.isRequired,
};

export default LoginPage;
