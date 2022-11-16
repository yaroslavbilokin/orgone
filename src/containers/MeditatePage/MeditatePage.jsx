import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import avatarModel from '../../global/icons/avatar.png';
import playIcon from '../../global/icons/play-icon.svg';
import pauseIcon from '../../global/icons/pause-icon.svg';
import replayIcon from '../../global/icons/replay-icon.svg';
import Button from '../../components/Button';
import { BREATH_PAGE_ROUTE, HOME_PAGE_ROUTE, SURVEY_PAGE_ROUTE } from '../../constants';
import ModalWindow from '../../components/ModalWindow';
import * as constants from '../BreathPage/constants';
import { getFromLocalStorage, setToLocalStorage } from '../../global/helpers';
import './MeditatePage.scss';

const MeditatePage = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const [isMeditationStarted, setIsMeditationStarted] = useState(
    searchParams.get('start') === 'true',
  );
  const [isTrackEnded, setIsTrackEnded] = useState(false);
  const [isCongratulationsModalShow, setIsCongratulationsModalShow] = useState(false);
  const [isHoldModalShow, setIsHoldModalShow] = useState(false);

  const isBreathWatched = !!getFromLocalStorage('breath-watched');
  const isSurveyVoted = !!getFromLocalStorage('survey-voted');

  const handleCloseCongratulationsModal = () => {
    setIsCongratulationsModalShow(false);
  };

  const handleCloseHoldModal = () => {
    setIsHoldModalShow(false);
  };

  const handleClickStart = () => {
    navigate(`${BREATH_PAGE_ROUTE}?start=true`);
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
        <div className="proceed-title">Breath</div>
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

  const playControl = <img src={isTrackEnded ? replayIcon : playIcon} alt="Play" />;
  const pauseControl = <img src={pauseIcon} alt="Pause" />;

  return (
    <div className="meditate-page__container">
      <div className="avatar-image__container">
        <img src={avatarModel} alt="avatar" className="avatar__image" />
      </div>
      {isMeditationStarted ? (
        <div className="meditate-player__container">
          <div className="meditate-player">
            <AudioPlayer
              className="player"
              autoPlay
              customIcons={{ play: playControl, pause: pauseControl }}
              src="https://orgone-app.s3.eu-central-1.amazonaws.com/02-orgone-GRATITUDE-v2.wav"
              customVolumeControls={[]}
              showJumpControls={false}
              onPlay={() => {
                setIsTrackEnded(false);
                setIsHoldModalShow(false);
              }}
              onEnded={() => {
                setIsTrackEnded(true);
                setIsCongratulationsModalShow(true);
                setToLocalStorage('meditation-watched', true);
                if (isBreathWatched && !isSurveyVoted) {
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
        <div className="meditate-start__button-container">
          <Button text="START" onClick={() => setIsMeditationStarted(true)} />
        </div>
      )}
      {isCongratulationsModalShow && (
        <ModalWindow
          title={constants.MODAL_WINDOW_CONGRATS_TITLE}
          content={
            !isBreathWatched
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

export default MeditatePage;
