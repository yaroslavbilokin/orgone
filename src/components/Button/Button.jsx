import './Button.scss';

const Button = ({ text, onClick, variant = 'contained' }) => {
  return (
    <div className={`button-container ${variant === 'outlined' && 'outlined'}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
