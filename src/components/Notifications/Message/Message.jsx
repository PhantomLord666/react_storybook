import React from 'react';
import PropTypes from 'prop-types';
import './Message.css'; // CSS para estilos básicos

const Message = ({
  type = 'normal',
  variant = 'filled',
  icon,
  onClose,
  align = 'left',
  customMessage,
  children,
  template,
}) => {
  const types = {
    normal: 'message-normal',
    success: 'message-success',
    info: 'message-info',
    warning: 'message-warning',
    error: 'message-error',
  };

  const variants = {
    filled: 'message-filled',
    outlined: 'message-outlined',
    text: 'message-text',
  };

  const alignment = {
    left: 'align-left',
    center: 'align-center',
    right: 'align-right',
  };

  const messageClasses = `message ${types[type]} ${variants[variant]} ${alignment[align]}`;

  return (
    <div className={messageClasses}>
      {icon && <span className="message-icon">{icon}</span>}
      {template ? (
        template
      ) : (
        <span className="message-content">
          {customMessage || children}
        </span>
      )}
      {typeof onClose === 'function' && (
        <button className="message-close" onClick={onClose} aria-label="Close">
          ×
        </button>
      )}    
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.oneOf(['normal', 'success', 'info', 'warning', 'error']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'text']),
  icon: PropTypes.node,
  onClose: PropTypes.func,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  customMessage: PropTypes.string,
  children: PropTypes.node,
  template: PropTypes.node,
};

export default Message;
