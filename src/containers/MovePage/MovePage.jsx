import './MovePage.scss';
import Button from '../../components/Button';

const MovePage = () => {
  return (
    <div className="move-page__container">
      <div className="avatar-container" />
      <div className="move-page__controls">
        <div className="steps-container">
          <div className="today">Today</div>
          <div className="steps-count">4567</div>
          <div className="steps">Steps</div>
        </div>
        <div className="steps-award">500 STEPS - 1COIN</div>
        <Button text="Coming soon" onClick={() => {}} />
      </div>
    </div>
  );
};

export default MovePage;
