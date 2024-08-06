import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import "./UnpopularCarousel.css";

const UnpopularCarousel = ({
  items,
  itemStyle,
  activeItemStyle,
  containerStyle,
  transitionDuration,
  autoplay,
  autoplayInterval,
  showNavigation,
  showIndicators,
  navigationStyle,
  indicatorStyle,
  indicatorActiveStyle,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  React.useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        handleNext();
      }, autoplayInterval);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [autoplay, autoplayInterval]);

  return (
    <div className="carousel-container" style={containerStyle}>
      <div className="carousel-wrapper">
        <div
          className="carousel-items"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            transition: `transform ${transitionDuration}`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{
                ...itemStyle,
                ...(index === activeIndex ? activeItemStyle : {}),
              }}
            >
              {item}
            </div>
          ))}
        </div>
        {showNavigation && (
          <div className="carousel-navigation" style={navigationStyle}>
            <button className="carousel-nav prev" onClick={handlePrev}>
              ❮
            </button>
            <button className="carousel-nav next" onClick={handleNext}>
              ❯
            </button>
          </div>
        )}
        {showIndicators && (
          <div className="carousel-indicators" style={indicatorStyle}>
            {items.map((_, index) => (
              <span
                key={index}
                className={`carousel-indicator ${
                  index === activeIndex ? "active" : ""
                }`}
                style={index === activeIndex ? indicatorActiveStyle : {}}
                onClick={() => handleIndicatorClick(index)}
              ></span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

UnpopularCarousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  itemStyle: PropTypes.object,
  activeItemStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  transitionDuration: PropTypes.string,
  autoplay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  showNavigation: PropTypes.bool,
  showIndicators: PropTypes.bool,
  navigationStyle: PropTypes.object,
  indicatorStyle: PropTypes.object,
  indicatorActiveStyle: PropTypes.object,
};

UnpopularCarousel.defaultProps = {
  itemStyle: {},
  activeItemStyle: {},
  containerStyle: {},
  transitionDuration: "0.5s",
  autoplay: false,
  autoplayInterval: 3000,
  showNavigation: true,
  showIndicators: true,
  navigationStyle: {},
  indicatorStyle: {},
  indicatorActiveStyle: {},
};

export default UnpopularCarousel;
