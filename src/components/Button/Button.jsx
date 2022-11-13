import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, onClick, variant = 'contained' }) => {
  return (
    <div className={`button-container ${variant === 'outlined' && 'outlined'}`} onClick={onClick}>
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};

export default Button;
