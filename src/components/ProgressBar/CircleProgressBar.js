import { Circle } from 'rc-progress';
import './CircleProgressBar.scss';

const CircleProgressBar = ({ text, percent }) => (
  <div className="circle-progressbar__container">
    <div className="progressbar__label">{text}</div>
    <Circle
      className="circle-progressbar"
      percent={percent}
      trailWidth={1}
      trailColor="#6b6a6a"
      strokeWidth={1}
      strokeColor="#ffffff"
    />
    <div className="progressbar__percent">{percent}%</div>
  </div>
);

export default CircleProgressBar;
