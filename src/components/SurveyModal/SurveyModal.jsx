import { useState } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import PropTypes from 'prop-types';
import modalCloseIcon from '../../global/icons/modal-close-icon.svg';
import Button from '../Button';
import './SurveyModal.scss';
import { setToLocalStorage } from '../../global/helpers';

const surveyOptions = [
  {
    title: 'Mind blowing',
  },
  {
    title: 'Empowering',
  },
  {
    title: 'Satisfying',
  },
  {
    title: 'Insignificant',
  },
  {
    title: 'Disappointing',
  },
];

const SurveyModal = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState(surveyOptions[0].title);

  const handleSend = () => {
    setToLocalStorage('survey-voted', true);
    onClose();
  };

  return (
    <div className="survey-modal__container">
      <div className="survey-modal__content">
        <div className="survey-modal__header">
          <div className="modal-title">Survey</div>
          <div onClick={onClose} className="modal-close-icon__container">
            <img src={modalCloseIcon} alt="close icon" />
          </div>
        </div>
        <div className="survey-container">
          <div className="survey-title">Rate your experience:</div>
          <div className="survey-content">
            <RadioGroup defaultValue={surveyOptions[0].title}>
              {surveyOptions.map((option) => (
                <FormControlLabel
                  key={option.title}
                  classes={{
                    root: 'survey-control-root',
                    label:
                      selectedOption === option.title
                        ? 'survey-control-label__selected'
                        : 'survey-control-label',
                  }}
                  labelPlacement="start"
                  value={option.title}
                  control={<Radio classes={{ root: 'radio-root', checked: 'radio-checked' }} />}
                  label={option.title}
                  onChange={() => setSelectedOption(option.title)}
                />
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="send-button__container">
        <Button onClick={handleSend} text="Send" />
      </div>
    </div>
  );
};

SurveyModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default SurveyModal;
