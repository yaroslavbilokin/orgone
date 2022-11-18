import Controls from '../../components/Controls';
import LineProgressBar from '../../components/ProgressBar/LineProgressBar';
import CircleProgressBar from '../../components/ProgressBar/CircleProgressBar';
import avatarModel from '../../global/icons/avatar.png';
import { calculateTotalProgress, getFromLocalStorage } from '../../global/helpers';
import './HomePage.scss';

const HomePage = () => {
  const moveProgress = getFromLocalStorage('move-progress') || 0;
  const breathProgress = getFromLocalStorage('breath-progress') || 0;
  const sleepProgress = getFromLocalStorage('sleep-progress') || 0;
  const meditateProgress = getFromLocalStorage('meditate-progress') || 0;

  const totalProgress = calculateTotalProgress(
    moveProgress,
    breathProgress,
    sleepProgress,
    meditateProgress,
  );

  return (
    <div className="homepage-container">
      <div className="homepage-container__row">
        <LineProgressBar text="MOVE" percent={moveProgress} wordPosition="left" />
        <LineProgressBar text="BREATH" percent={breathProgress} wordPosition="right" />
      </div>
      <div className="total-progressbar__container">
        <div className="total-progressbar">
          <CircleProgressBar text="TOTAL" percent={totalProgress} />
        </div>
      </div>
      <div className="homepage-container__row">
        <LineProgressBar text="SLEEP" percent={sleepProgress} wordPosition="left" />
        <LineProgressBar text="MEDITATE" percent={meditateProgress} wordPosition="right" />
      </div>
      <img src={avatarModel} alt="avatar" className="avatar__image" />
      <Controls />
    </div>
  );
};

export default HomePage;
