import './Input.scss';

const Input = ({ value, placeholder, onChange, type = 'text' }) => {
  return (
    <div className="input-container">
      <input value={value} placeholder={placeholder} type={type} onChange={onChange} />
    </div>
  );
};

export default Input;
