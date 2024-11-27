import React, { useState } from "react";
import "./SpeedDial.css"; // Importamos los estilos

const SpeedDial = ({ actions }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para manejar el click
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="speed-dial">
      <button className="fab-sp" onClick={handleToggle}>
        +
      </button>

      <div className={`actions ${isOpen ? "open" : ""}`}>
        {actions.map((action, index) => (
          <button key={index} className="action-button" onClick={action.onClick}>
            {action.icon ? <span className="icon">{action.icon}</span> : null}
            <span className="label">{action.label}</span> {/* El label tiene la clase correcta */}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpeedDial;
