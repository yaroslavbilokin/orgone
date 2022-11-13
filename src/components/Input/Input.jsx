import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ value, placeholder, onChange, type = 'text' }) => {
  return (
    <div className="input-container">
      <input value={value} placeholder={placeholder} type={type} onChange={onChange} />
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default Input;
