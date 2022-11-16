import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { getFromLocalStorage, setToLocalStorage } from '../../global/helpers';
import modalCloseIcon from '../../global/icons/modal-close-icon.svg';
import Button from '../../components/Button';
import { HOME_PAGE_ROUTE } from '../../constants';
import './SurveyPage.scss';

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

const SurveyPage = () => {
  const navigate = useNavigate();
  const isSurveyVoted = !!getFromLocalStorage('survey-voted');

  const [selectedOption, setSelectedOption] = useState(surveyOptions[0].title);

  useEffect(() => {
    if (isSurveyVoted) {
      navigate(HOME_PAGE_ROUTE);
    }
  }, [navigate, isSurveyVoted]);

  const handleSend = () => {
    setToLocalStorage('survey-voted', true);
    navigate(HOME_PAGE_ROUTE);
  };

  return (
    <div className="survey-page__container">
      <div className="survey-page__content">
        <div className="survey-page__header">
          <div className="survey-page__title">Survey</div>
          <div onClick={() => navigate(HOME_PAGE_ROUTE)} className="survey-close-icon__container">
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

export default SurveyPage;
