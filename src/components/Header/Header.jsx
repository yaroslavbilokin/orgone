import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'rc-progress';
import arrowBackIcon from '../../global/icons/arrow-back.svg';
import statIcon from '../../global/icons/stat-icon.svg';
import menuIcon from '../../global/icons/menu-icon.svg';
import coinIcon from '../../global/icons/coin-icon.svg';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isStatisticPage = location.pathname.includes('/statistic');
  const isMainPage = location.pathname === '/';

  const progressPercentValue = 86;
  const coinAmount = 273;
  const avatarLvl = 21;

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
            percent={progressPercentValue}
            trailColor="#37393A"
            strokeColor="#ffffff"
            trailWidth={1}
            strokeWidth={1}
          />
        </div>
        <div className="progress-details">
          <div className="left-side__details">
            <div className="details__title">{detailsTitle}</div>
            <div className="details__value">{`${progressPercentValue}%`}</div>
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
