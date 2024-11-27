import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SwitchButton.css';

const SwitchButton = ({ isOn, onToggle }) => {
  return (
    <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={onToggle}>
      <div className="switch-toggle"></div>
    </div>
  );
};

SwitchButton.propTypes = {
  isOn: PropTypes.bool.isRequired, // Indica si el switch está encendido
  onToggle: PropTypes.func.isRequired, // Función de alternancia
};

export default SwitchButton;

