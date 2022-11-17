import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { useNavigate, useSearchParams } from 'react-router-dom';
import replayIcon from '../../global/icons/replay-icon.svg';
import playIcon from '../../global/icons/play-icon.svg';
import pauseIcon from '../../global/icons/pause-icon.svg';
import avatarModel from '../../global/icons/avatar.png';
import Button from '../../components/Button';
import ModalWindow from '../../components/ModalWindow';
import * as constants from './constants';
import { HOME_PAGE_ROUTE, MEDITATE_PAGE_ROUTE, SURVEY_PAGE_ROUTE } from '../../constants';
import { getFromLocalStorage, getMeditationURL, setToLocalStorage } from '../../global/helpers';
import './BreathPage.scss';

const BreathPage = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [isBreathStarted, setIsBreathStarted] = useState(searchParams.get('start') === 'true');
  const [isTrackEnded, setIsTrackEnded] = useState(false);
  const [isCongratulationsModalShow, setIsCongratulationsModalShow] = useState(false);
  const [isHoldModalShow, setIsHoldModalShow] = useState(false);

  const meditationURL = getMeditationURL();

  const playControl = <img src={isTrackEnded ? replayIcon : playIcon} alt="Play" />;
  const pauseControl = <img src={pauseIcon} alt="Pause" />;

  const isMeditationWatched = !!getFromLocalStorage('meditation-watched');
  const isSurveyVoted = !!getFromLocalStorage('survey-voted');

  const handleCloseCongratulationsModal = () => {
    setIsCongratulationsModalShow(false);
  };

  const handleCloseHoldModal = () => {
    setIsHoldModalShow(false);
  };

  const handleClickStart = () => {
    navigate(`${MEDITATE_PAGE_ROUTE}?start=true`);
  };

  const handleConfirmHold = () => {
    navigate(HOME_PAGE_ROUTE);
  };

  const handleCancelHold = () => {
    setIsHoldModalShow(false);
  };

  const congratulationsModalContent = (
    <div className="congratulations-modal-content">
      <div className="proceed-to">Proceed to:</div>
      <div className="proceed-container">
        <div className="proceed-title">Meditate</div>
        <div className="proceed-start" onClick={handleClickStart}>
          Start
        </div>
      </div>
    </div>
  );

  const congratulationsWithoutProceedModalContent = (
    <div className="congratulations-without-proceed-content">
      <div onClick={() => navigate(HOME_PAGE_ROUTE)} className="confirm-button">
        Ok, nice
      </div>
    </div>
  );

  const holdModalContent = (
    <div className="hold-modal-content">
      <div className="confirm-btn" onClick={handleConfirmHold}>
        Yes
      </div>
      <div className="cancel-btn" onClick={handleCancelHold}>
        No
      </div>
    </div>
  );

  return (
    <div className="breath-page__container">
      <div className="breath-page__avatar-container">
        <img src={avatarModel} alt="avatar" className="avatar__image" />
      </div>
      {isBreathStarted ? (
        <div className="breath-player__container">
          <div className="breath-player">
            <AudioPlayer
              className="player"
              autoPlay
              customIcons={{ play: playControl, pause: pauseControl }}
              src={meditationURL}
              customVolumeControls={[]}
              showJumpControls={false}
              onPlay={() => {
                setIsTrackEnded(false);
                setIsHoldModalShow(false);
              }}
              onEnded={() => {
                setIsTrackEnded(true);
                setIsCongratulationsModalShow(true);
                setToLocalStorage('breath-watched', true);
                if (isMeditationWatched && !isSurveyVoted) {
                  navigate(SURVEY_PAGE_ROUTE);
                }
              }}
              onPause={() => {
                setIsHoldModalShow(true);
              }}
              customAdditionalControls={[]}
            />
          </div>
        </div>
      ) : (
        <div className="breath-start__button-container">
          <Button text="START" onClick={() => setIsBreathStarted(true)} />
        </div>
      )}
      {isCongratulationsModalShow && (
        <ModalWindow
          title={constants.MODAL_WINDOW_CONGRATS_TITLE}
          content={
            !isMeditationWatched
              ? congratulationsModalContent
              : congratulationsWithoutProceedModalContent
          }
          subtitle={constants.MODAL_WINDOW_CONGRATS_SUBTITLE}
          onClose={handleCloseCongratulationsModal}
        />
      )}
      {isHoldModalShow && !isTrackEnded && (
        <ModalWindow
          title={constants.MODAL_WINDOW_HOLD_PRACTICE_TITLE}
          content={holdModalContent}
          subtitle={constants.MODAL_WINDOW_HOLD_PRACTICE_SUBTITLE}
          onClose={handleCloseHoldModal}
        />
      )}
    </div>
  );
};

export default BreathPage;
