import CircularProgress from '@mui/material/CircularProgress';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <CircularProgress classes={{ root: 'loader-root' }} color="secondary" />
    </div>
  );
};

export default Loader;
