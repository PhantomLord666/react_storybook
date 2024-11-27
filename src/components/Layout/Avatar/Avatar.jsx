// Avatar.jsx
import React from "react";
import PropTypes from "prop-types";
import './Avatar.css';

const Avatar = ({
  size = "medium", // small, medium, large
  variant = "circle", // circle or square
  src,
  alt = "Avatar",
  status = null, // online, offline, busy
}) => {
  return (
    <div className={`avatar ${size} ${variant} ${status}`}>
      <img src={src} alt={alt} className="avatar-img" />
    </div>
  );
};

Avatar.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["circle", "square"]),
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  status: PropTypes.oneOf(["online", "offline", "busy", null]),
};

export default Avatar;

