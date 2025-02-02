import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const UnpopularModal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "medium",
  position = "center",
  backdropColor = "rgba(0, 0, 0, 0.5)",
  titleColor = "#333",
  contentColor = "#000",
  buttonColor = "#007bff",
  buttonTextColor = "#fff",
  closeButton = true,
  showbutton = true,
  buttonTitle = "Close",
  buttonOnClick = () => {},
  closeOnClickOutside = true,
  animation = "fade",
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onClose();
      setIsAnimating(false);
    }, 300); // Match the animation duration
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (closeOnClickOutside) {
      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }
  }, [closeOnClickOutside]);

  if (!isOpen && !isAnimating) return null;

  const modalStyles = {
    display: isOpen || isAnimating ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: backdropColor,
    opacity: isAnimating ? 0 : 1,
    transition: `opacity 0.3s ease`,
    zIndex: 1000,
    overflowY: "auto",
  };

  const modalContentStyles = {
    position: "absolute",
    top: position === "center" ? "50%" : position === "top" ? "20%" : "80%",
    left: "50%",
    transform: isAnimating
      ? "scale(0.9) translate(-50%, -50%)"
      : "scale(1) translate(-50%, -50%)",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    width: size === "small" ? "300px" : size === "large" ? "600px" : "400px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition:
      animation === "scale"
        ? "transform scale(0.9) 0.3s ease-in-out"
        : "transform 0.3s ease-in-out",
  };

  const closeButtonStyles = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#333",
    fontSize: "18px",
  };

  const titleStyles = {
    marginBottom: "15px",
    color: titleColor,
    fontSize: "20px",
    fontWeight: "bold",
  };

  const contentStyles = {
    color: contentColor,
    fontSize: "16px",
  };

  const buttonStyles = {
    backgroundColor: buttonColor,
    color: buttonTextColor,
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    cursor: "pointer",
    marginTop: "20px",
  };

  return (
    <div style={modalStyles}>
      <div style={modalContentStyles} ref={modalRef}>
        {closeButton && (
          <button style={closeButtonStyles} onClick={handleClose}>
            &times;
          </button>
        )}
        {title && <div style={titleStyles}>{title}</div>}
        <div style={contentStyles}>{children}</div>
        {showbutton && (
          <button style={buttonStyles} onClick={buttonOnClick}>
            {buttonTitle}
          </button>
        )}
      </div>
    </div>
  );
};

UnpopularModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  position: PropTypes.oneOf(["center", "top", "bottom"]),
  animation: PropTypes.oneOf(["fade", "scale"]),
  backdropColor: PropTypes.string,
  titleColor: PropTypes.string,
  contentColor: PropTypes.string,
  buttonColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  closeButton: PropTypes.bool,
  closeOnClickOutside: PropTypes.bool,
  showbutton: PropTypes.bool,
  buttonTitle: PropTypes.string,
  buttonOnClick: PropTypes.func,
};

UnpopularModal.defaultProps = {
  title: "",
  size: "medium",
  position: "center",
  animation: "fade",
  backdropColor: "rgba(0, 0, 0, 0.5)",
  titleColor: "#333",
  contentColor: "#000",
  buttonColor: "#007bff",
  buttonTextColor: "#fff",
  closeButton: true,
  closeOnClickOutside: true,
  showbutton: true,
  buttonTitle: "Close",
  buttonOnClick: () => {},
};

export default UnpopularModal;
