import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import avatarModel from '../../global/icons/avatar.png';
import meditationTrack from '../../global/media/meditation-track.mp3';
import playIcon from '../../global/icons/play-icon.svg';
import pauseIcon from '../../global/icons/pause-icon.svg';
import replayIcon from '../../global/icons/replay-icon.svg';
import Button from '../../components/Button';
import './MeditatePage.scss';

const MeditatePage = () => {
  const [isMeditationStarted, setIsMeditationStarted] = useState(false);
  const [isTrackEnded, setIsTrackEnded] = useState(false);

  const playControl = <img src={isTrackEnded ? replayIcon : playIcon} alt="Play" />;
  const pauseControl = <img src={pauseIcon} alt="Pause" />;

  return (
    <div className="meditate-page__container">
      <div className="avatar-image__container">
        <img src={avatarModel} alt="avatar" className="avatar__image" />
      </div>
      {isMeditationStarted ? (
        <div className="meditate-player__container">
          <AudioPlayer
            className="meditate-player"
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
      ) : (
        <div className="meditate-start__button-container">
          <Button text="START" onClick={() => setIsMeditationStarted(true)} />
        </div>
      )}
    </div>
  );
};

export default MeditatePage;
