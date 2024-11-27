import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ 
  value, 
  max, 
  label, 
  variant, 
  size, 
  showLabel, 
  gradientStart, 
  gradientEnd, 
  indeterminate, 
  indeterminateStart, 
  indeterminateEnd 
}) => {
  const progress = indeterminate ? 0 : Math.min(Math.max(value, 0), max); // Ensure progress is within range
  const percentage = indeterminate ? 100 : (progress / max) * 100;

  return (
    <div className={`progress-bar-container ${size}`}>
      <div
        className={`progress-bar progress-bar-${variant} ${indeterminate ? 'indeterminate' : ''}`}
        style={{
          width: `${percentage}%`,
          background: gradientStart && gradientEnd 
            ? `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`
            : undefined,
          ...(indeterminate && indeterminateStart && indeterminateEnd ? {
            background: `linear-gradient(90deg, ${indeterminateStart} 25%, ${indeterminateEnd} 50%, ${indeterminateStart} 75%)`,
            backgroundSize: '200% 100%',
          } : {}),
        }}
        aria-valuenow={progress}
        aria-valuemax={max}
        aria-valuemin="0"
      >
        {showLabel && !indeterminate && (
          <span className="progress-bar-label">{label || `${Math.round(percentage)}%`}</span>
        )}
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired, // Current progress value
  max: PropTypes.number, // Maximum progress value
  label: PropTypes.string, // Custom label text
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info']),
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Size of the progress bar
  showLabel: PropTypes.bool, // Whether to show the label or not
  gradientStart: PropTypes.string, // Start color for gradient
  gradientEnd: PropTypes.string, // End color for gradient
  indeterminate: PropTypes.bool, // Whether the progress is indeterminate (loading state)
  indeterminateStart: PropTypes.string, // Start color for indeterminate gradient
  indeterminateEnd: PropTypes.string, // End color for indeterminate gradient
};

ProgressBar.defaultProps = {
  max: 100,
  variant: 'primary',
  size: 'medium',
  showLabel: true,
  gradientStart: '',
  gradientEnd: '',
  indeterminate: false,
  indeterminateStart: '#007bff',
  indeterminateEnd: '#6c757d',
};

export default ProgressBar;

