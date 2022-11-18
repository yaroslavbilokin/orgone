import { useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'rc-progress';
import arrowBackIcon from '../../global/icons/arrow-back.svg';
import statIcon from '../../global/icons/stat-icon.svg';
import menuIcon from '../../global/icons/menu-icon.svg';
import coinIcon from '../../global/icons/coin-icon.svg';
import { getFromLocalStorage } from '../../global/helpers';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isStatisticPage = location.pathname.includes('/statistic');
  const isMainPage = location.pathname === '/';
  const isSurveyPage = location.pathname === '/survey';

  const coinAmount = getFromLocalStorage('coins') || 0;
  const avatarLvl = getFromLocalStorage('level') || 0;

  const detailsTitle = isMainPage ? `LVL ${avatarLvl}` : 'TODAY';

  const titleStrategy = {
    '/': 'Avatar Name',
    '/move': 'Move',
    '/breath': 'Breath',
    '/sleep': 'Sleep',
    '/meditate': 'Meditate',
    '/sleep/statistic': 'Sleep Statistic',
    '/move/statistic': 'Move Statistic',
    '/breath/statistic': 'Breath Statistic',
    '/meditate/statistic': 'Meditate Statistic',
  };

  const progressBarStrategy = {
    '/': getFromLocalStorage('level-progress') || 0,
    '/move': getFromLocalStorage('move-progress') || 0,
    '/breath': getFromLocalStorage('breath-progress') || 0,
    '/sleep': getFromLocalStorage('sleep-progress') || 0,
    '/meditate': getFromLocalStorage('meditate-progress') || 0,
  };

  if (isSurveyPage) {
    return null;
  }

  if (isStatisticPage) {
    return (
      <div className="statistic-header__container">
        <div className="header-title__container">
          <div className="arrow-back__container" onClick={() => navigate(-1)}>
            <img src={arrowBackIcon} alt="arrow back" />
          </div>
          <div className="title">{titleStrategy[location.pathname]}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="header-container">
      <div className="header-title__container">
        <div className="header-title">
          {!isMainPage && (
            <div className="arrow-back__container" onClick={() => navigate(-1)}>
              <img src={arrowBackIcon} alt="arrow back" />
            </div>
          )}
          <div className="title">{titleStrategy[location.pathname]}</div>
        </div>
        <div className="control-container">
          {isMainPage ? (
            <img src={menuIcon} alt="menu" />
          ) : (
            // <Link to={`${location.pathname}/statistic`}>
            //   <img src={statIcon} alt="statistic" />
            // </Link>
            <img src={statIcon} alt="statistic" />
          )}
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-line">
          <Line
            percent={progressBarStrategy[location.pathname]}
            trailColor="#37393A"
            strokeColor="#ffffff"
            trailWidth={1}
            strokeWidth={1}
          />
        </div>
        <div className="progress-details">
          <div className="left-side__details">
            <div className="details__title">{detailsTitle}</div>
            <div className="details__value">{`${progressBarStrategy[location.pathname]}%`}</div>
          </div>
          <div className="coin-amount">
            <img src={coinIcon} alt="coin icon" />
            <div className="coins">{`${coinAmount} COIN`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
