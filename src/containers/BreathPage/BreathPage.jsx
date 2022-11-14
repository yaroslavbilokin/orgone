import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import replayIcon from '../../global/icons/replay-icon.svg';
import playIcon from '../../global/icons/play-icon.svg';
import pauseIcon from '../../global/icons/pause-icon.svg';
import avatarModel from '../../global/icons/avatar.png';
import Button from '../../components/Button';
import meditationTrack from '../../global/media/meditation-track.mp3';
import './BreathPage.scss';

const BreathPage = () => {
  const [isBreathStarted, setIsBreathStarted] = useState(false);
  const [isTrackEnded, setIsTrackEnded] = useState(false);

  const playControl = <img src={isTrackEnded ? replayIcon : playIcon} alt="Play" />;
  const pauseControl = <img src={pauseIcon} alt="Pause" />;

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
              src={meditationTrack}
              customVolumeControls={[]}
              showJumpControls={false}
              onPlay={(e) => setIsTrackEnded(false)}
              onEnded={(e) => setIsTrackEnded(true)}
              customAdditionalControls={[]}
            />
          </div>
        </div>
      ) : (
        <div className="breath-start__button-container">
          <Button text="START" onClick={() => setIsBreathStarted(true)} />
        </div>
      )}
    </div>
  );
};

export default BreathPage;
