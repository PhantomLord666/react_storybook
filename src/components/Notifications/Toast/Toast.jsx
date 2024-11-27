import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle, faTimesCircle, faInfoCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import './Toast.css'; // Archivo CSS para los estilos

const Toast = ({
  title, // Nuevo: Título opcional
  message,
  variant = 'default', // Variantes: info, success, warning, error
  icon, // Ícono personalizado
  showIcon = true,
  duration = 3000, // Duración en ms
  showCloseButton = true,
  showProgressBar = true,
  actionButtonText,
  onActionClick,
  onClose,
  children, // Accept children as a template
  showAnimation = 'fade-in', // Animación para cuando aparece
  hideAnimation = 'fade-out', // Animación para cuando desaparece
}) => {
  const [visible, setVisible] = useState(true);
  const [isHiding, setIsHiding] = useState(false); // Estado para manejar la animación de salida

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsHiding(true); // Inicia la animación de salida cuando el tiempo se acaba
        setTimeout(() => setVisible(false), 500); // Espera a que termine la animación de salida antes de ocultar el Toast
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  if (!visible) return null;

  const defaultIcons = {
    default: <FontAwesomeIcon icon={faBell} />,
    info: <FontAwesomeIcon icon={faInfoCircle} />,
    success: <FontAwesomeIcon icon={faCheckCircle} />,
    warning: <FontAwesomeIcon icon={faExclamationTriangle} />,
    error: <FontAwesomeIcon icon={faTimesCircle} />,
  };

  const displayIcon = icon || defaultIcons[variant];

  // Clases de animación para show y hide
  const showClass = `toast-show-${showAnimation}`;
  const hideClass = `toast-hide-${hideAnimation}`;

  return (
    <div className={`toast toast-${variant} ${isHiding ? hideClass : showClass}`}>
      <div className="toast-content">
        {showIcon && displayIcon && <span className="toast-icon">{displayIcon}</span>} {/* Control de ícono */}
        <div className="toast-text">
          {title && <strong className="toast-title">{title}</strong>} {/* Título */}
          <span className="toast-message">{message}</span>
          {children} {/* Render custom template */}
        </div>
        {actionButtonText && (
          <button className="toast-action" onClick={onActionClick}>
            {actionButtonText}
          </button>
        )}
        {showCloseButton && (
          <button className="toast-close" onClick={onClose}>
            ✖
          </button>
        )}
      </div>
      {showProgressBar && (
        <div
          className="toast-progress"
          style={{ animationDuration: `${duration}ms` }}
        />
      )}
    </div>
  );
};

const ToastContainer = ({
  toasts = [],
  removeToast,
  newestOnTop = true,
  position = 'top-right',
}) => {
  const sortedToasts = newestOnTop ? [...toasts].reverse() : toasts;

  return (
    <div className={`toast-container toast-container-${position}`}>
      {sortedToasts.map((toast) => (
        <div
          key={toast.id}
          className={`toast-container-item`}
        >

          <Toast
            {...toast}
            onClose={() => removeToast(toast.id)}
          />
        </div>
      ))}
    </div>
  );
};
export { Toast, ToastContainer };
