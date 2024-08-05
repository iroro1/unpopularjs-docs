import React, { useState } from "react";
import PropTypes from "prop-types";

const UnpopularTooltip = ({
  content,
  position = "top",
  color = "#333",
  backgroundColor = "#fff",
  borderRadius = "4px",
  padding = "8px",
  fontSize = "14px",
  animation = "fade",
  delay = 0,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => setIsVisible(true), delay);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const tooltipStyles = {
    position: "absolute",
    backgroundColor: backgroundColor,
    color: color,
    borderRadius: borderRadius,
    padding: padding,
    fontSize: fontSize,
    whiteSpace: "nowrap",
    transition: `opacity 0.3s ease, transform 0.3s ease`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible
      ? "translateY(0)"
      : `translateY(${position === "top" ? "-10px" : "10px"})`,
    zIndex: 1000,
    visibility: isVisible ? "visible" : "hidden",
    ...((animation === "fade" && { opacity: isVisible ? 1 : 0 }) || {}),
    ...((animation === "slide" && {
      transform: isVisible
        ? "translateY(0)"
        : `translateY(${position === "top" ? "-10px" : "10px"})`,
    }) ||
      {}),
  };

  const wrapperStyles = {
    position: "relative",
    display: "inline-block",
  };

  return (
    <div
      style={wrapperStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        style={{
          ...tooltipStyles,
          ...(position === "top" && { bottom: "100%" }),
          ...(position === "bottom" && { top: "100%" }),
          ...(position === "left" && { right: "100%" }),
          ...(position === "right" && { left: "100%" }),
        }}
      >
        {content}
      </div>
    </div>
  );
};

UnpopularTooltip.propTypes = {
  content: PropTypes.node.isRequired,
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  fontSize: PropTypes.string,
  animation: PropTypes.oneOf(["fade", "slide"]),
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
};

UnpopularTooltip.defaultProps = {
  position: "top",
  color: "#333",
  backgroundColor: "#fff",
  borderRadius: "4px",
  padding: "8px",
  fontSize: "14px",
  animation: "fade",
  delay: 0,
};

export default UnpopularTooltip;
