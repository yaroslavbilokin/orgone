import { Link } from 'react-router-dom';
import moveIcon from '../../global/icons/move-control-icon.svg';
import breathIcon from '../../global/icons/breath-control-icon.svg';
import sleepIcon from '../../global/icons/sleep-control-icon.svg';
import meditateIcon from '../../global/icons/meditate-control-icon.svg';
import './Controls.scss';

const Controls = () => {
  const controlsOptions = [
    {
      name: 'move icon',
      icon: moveIcon,
      href: '/move',
    },
    {
      name: 'breath icon',
      icon: breathIcon,
      href: '/breath',
    },
    {
      name: 'sleep icon',
      icon: sleepIcon,
      href: '/sleep',
    },
    {
      name: 'meditate icon',
      icon: meditateIcon,
      href: '/meditate',
    },
  ];

  return (
    <div className="controls-container">
      <div className="controls">
        {controlsOptions.map((control) => (
          <Link key={control.name} to={control.href} className="control">
            <img src={control.icon} alt={control.name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Controls;
