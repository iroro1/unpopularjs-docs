import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const UnpopularToast = ({
  message,
  type = "info",
  duration = 5000,
  onClose,
  backgroundColor,
  textColor,
  icon,
  position = "top-right",
  animation = "fade",
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose(), 300); // Ensure onClose is called after animation
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getPositionStyles = () => {
    switch (position) {
      case "top-left":
        return { top: "20px", left: "20px", transform: "translateX(0)" };
      case "top-right":
        return { top: "20px", right: "20px", transform: "translateX(0)" };
      case "bottom-left":
        return { bottom: "20px", left: "20px", transform: "translateX(0)" };
      case "bottom-right":
        return { bottom: "20px", right: "20px", transform: "translateX(0)" };
      default:
        return { top: "20px", right: "20px", transform: "translateX(0)" };
    }
  };

  const getAnimationStyles = () => {
    switch (animation) {
      case "fade":
        return { opacity: isVisible ? 1 : 0, transition: "opacity 0.3s ease" };
      case "slide":
        return {
          transform: isVisible ? "translateY(0)" : "translateY(-50px)",
          transition: "transform 0.3s ease",
        };
      default:
        return { opacity: 1 };
    }
  };

  return (
    isVisible && (
      <div
        style={{
          position: "fixed",
          ...getPositionStyles(),
          padding: "10px 20px",
          borderRadius: "4px",
          backgroundColor:
            backgroundColor ||
            (type === "success"
              ? "#28a745"
              : type === "error"
              ? "#dc3545"
              : "#17a2b8"),
          color: textColor || "#fff",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          ...getAnimationStyles(),
        }}
      >
        {icon && (
          <span style={{ marginRight: "10px", fontSize: "20px" }}>{icon}</span>
        )}
        <span style={{ flex: 1 }}>{message}</span>
      </div>
    )
  );
};

UnpopularToast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error", "info"]),
  duration: PropTypes.number,
  onClose: PropTypes.func,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  icon: PropTypes.node,
  position: PropTypes.oneOf([
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ]),
  animation: PropTypes.oneOf(["fade", "slide"]),
};

UnpopularToast.defaultProps = {
  type: "info",
  duration: 5000,
  onClose: () => {},
  backgroundColor: null,
  textColor: null,
  icon: null,
  position: "top-right",
  animation: "fade",
};

export default UnpopularToast;
