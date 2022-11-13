import { Line } from 'rc-progress';
import './LineProgressBar.scss';
import PropTypes from 'prop-types';

const LineProgressBar = ({ text, percent, wordPosition = 'left' }) => (
  <div className={`line-progressbar__container ${wordPosition === 'right' && 'right'}`}>
    <div className="progressbar__label">{text}</div>
    <Line
      className="line-progressbar"
      percent={percent}
      trailWidth={3}
      trailColor="#6b6a6a"
      strokeWidth={3}
      strokeColor="#ffffff"
    />
  </div>
);

LineProgressBar.propTypes = {
  text: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
  wordPosition: PropTypes.string,
};

export default LineProgressBar;
