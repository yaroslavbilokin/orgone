import { useState } from 'react';
import Controls from '../../components/Controls';
import LineProgressBar from '../../components/ProgressBar/LineProgressBar';
import CircleProgressBar from '../../components/ProgressBar/CircleProgressBar';
import avatarModel from '../../global/icons/avatar.png';
import { getFromLocalStorage } from '../../global/helpers';
import SurveyModal from '../../components/SurveyModal';
import './HomePage.scss';

const HomePage = () => {
  const [surveyModalShow, setSurveyModalShow] = useState(true);
  const isBreathWatched = !!getFromLocalStorage('breath-watched');
  const isMeditationWatched = !!getFromLocalStorage('meditation-watched');
  const isSurveyVoted = !!getFromLocalStorage('survey-voted');

  const handleSurveyClose = () => {
    setSurveyModalShow(false);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-container__row">
        <LineProgressBar text="MOVE" percent={30} wordPosition="left" />
        <LineProgressBar text="BREATH" percent={40} wordPosition="right" />
      </div>
      <div className="total-progressbar__container">
        <div className="total-progressbar">
          <CircleProgressBar text="TOTAL" percent={78} />
        </div>
      </div>
      <div className="homepage-container__row">
        <LineProgressBar text="SLEEP" percent={20} wordPosition="left" />
        <LineProgressBar text="MEDITATE" percent={10} wordPosition="right" />
      </div>
      <img src={avatarModel} alt="avatar" className="avatar__image" />
      <Controls />
      {surveyModalShow && isBreathWatched && isMeditationWatched && !isSurveyVoted && (
        <SurveyModal onClose={handleSurveyClose} />
      )}
    </div>
  );
};

export default HomePage;
