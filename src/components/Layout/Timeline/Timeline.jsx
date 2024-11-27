// Timeline.js
import React from "react";
import PropTypes from "prop-types";
import "./Timeline.css";

const Timeline = ({
  events,
  orientation,
  variant,
  color,
  showIcon,
  icon,
  alignment,
  reverse, 
}) => {
  const eventsToRender = reverse ? [...events].reverse() : events; // Invertir los eventos si reverse es true
  return (
    <div className={`timeline ${orientation} ${variant}`}>
      {eventsToRender.map((event, index) => (
        <div className={`timeline-event ${variant} ${alignment}`} key={index}>
          {variant === "opposite" ? (
            <>
              <div
                className={`timeline-point ${!showIcon ? "hide-icon" : ""}`}
                style={{ backgroundColor: color }}
              >
                {showIcon && <span className="icon">{icon}</span>}
              </div>
              {alignment === "before" || alignment === "after" ? (
                <>
                  <div className="timeline-content left">
                    <div className="timeline-description">
                      {alignment === "before" ? event.description : event.date}
                    </div>
                  </div>
                  <div className="timeline-content right">
                    <div className="timeline-date">
                      {alignment === "before" ? event.date : event.description}
                    </div>
                  </div>
                </>
              ) : null}{" "}
              {alignment === "alternate" || alignment === "alternateReverse" ? (
                index % 2 === 0 ? (
                  <>
                     <div className="timeline-content left">
                    <div className="timeline-description">
                      {alignment === "alternate" ? event.description : event.date}
                    </div>
                  </div>
                  <div className="timeline-content right">
                    <div className="timeline-date">
                      {alignment === "alternate" ? event.date : event.description}
                    </div>
                  </div>
                  </>
                ) : (
                  <>
                    <div className="timeline-content left">
                    <div className="timeline-description">
                      {alignment === "alternate" ? event.date : event.description}
                    </div>
                  </div>
                  <div className="timeline-content right">
                    <div className="timeline-date">
                      {alignment === "alternate" ? event.description : event.date}
                    </div>
                  </div>
                  </>
                )
              ) : null}{" "}
            </>
          ) : (
            <>
              <div
                className={`timeline-point ${!showIcon ? "hide-icon" : ""}`}
                style={{ backgroundColor: color }}
              >
                {showIcon && <span className="icon">{icon}</span>}
              </div>
              { alignment === "before" ? (
                <div className="timeline-content before">
                  <div className="timeline-date">{event.date}</div>
                </div>
              ) : null}{" "}
              { alignment === "after" ? (
                <div className="timeline-content after">
                  <div className="timeline-date">{event.date}</div>
                </div>
              ) : null}{" "}
              {alignment === "alternate" || alignment === "alternateReverse" ? (
                index % 2 === 0 ? (
                  <>
                     <div className="timeline-content left">
                    <div className="timeline-description">
                      {alignment === "alternate" ? '' : event.date}
                    </div>
                  </div>
                  <div className="timeline-content right">
                    <div className="timeline-date">
                      {alignment === "alternate" ? event.date : ''}
                    </div>
                  </div>
                  </>
                ) : (
                  <>
                    <div className="timeline-content left">
                    <div className="timeline-description">
                      {alignment === "alternate" ? event.date : '' }
                    </div>
                  </div>
                  <div className="timeline-content right">
                    <div className="timeline-date">
                      {alignment === "alternate" ? '' : event.date}
                    </div>
                  </div>
                  </>
                )
              ) : null}{" "}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

Timeline.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  orientation: PropTypes.oneOf(["vertical", "horizontal"]),
  variant: PropTypes.oneOf(["oppositeOff", "opposite"]),
  color: PropTypes.string,
  showIcon: PropTypes.bool,
  icon: PropTypes.node,
  alignment: PropTypes.oneOf([
    "before",
    "after",
    "alternate",
    "alternateReverse",
  ]),
  reverse: PropTypes.bool, // Nueva prop
};

Timeline.defaultProps = {
  orientation: "vertical",
  variant: "oppositeOff",
  color: "#007bff",
  showIcon: true,
  icon: "⭐", // Icono por defecto
  alignment: "before",
  reverse: false, // Valor por defecto de reverse
};

export default Timeline;

