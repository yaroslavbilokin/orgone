import React from 'react';
import PropTypes from 'prop-types';
import modalCloseIcon from '../../global/icons/modal-close-icon.svg';
import './ModalWindow.scss';

const ModalWindow = ({ content, title, subtitle, onClose }) => {
  return (
    <>
      <div className="modal-window__background" />
      <div className="modal-window__container">
        <div className="modal-header">
          <div className="modal-title">{title}</div>
          <div onClick={onClose} className="modal-close__container">
            <img src={modalCloseIcon} alt="close icon" />
          </div>
        </div>
        <div className="modal-window__subtitle">{subtitle}</div>
        <div className="modal-content__container">{content}</div>
      </div>
    </>
  );
};

ModalWindow.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalWindow;
