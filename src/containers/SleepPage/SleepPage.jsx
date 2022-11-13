import './SleepPage.scss';
import Button from '../../components/Button';

const SleepPage = () => {
  return (
    <div className="sleep-page__container">
      <div className="avatar-container" />
      <div className="sleep-page__controls">
        <div className="alarm-container">
          <div className="clock-container">
            <div className="today">Today</div>
            <div className="clock">0h 0m</div>
            <div className="sleep">Sleep</div>
          </div>
          <div className="alarm">No Alarm</div>
        </div>
        <Button text="Coming soon" onClick={() => {}} />
      </div>
    </div>
  );
};

export default SleepPage;
