import React from 'react';
import PropTypes from 'prop-types';
import modalCloseIcon from '../../global/icons/modal-close-icon.svg';
import Button from '../Button';
import './SurveyModal.scss';

const SurveyModal = ({ onClose }) => {
  const handleSend = () => {};

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
          <div className="survey-content">Surveys</div>
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
