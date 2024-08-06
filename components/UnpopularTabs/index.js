import React, { useState } from "react";
import PropTypes from "prop-types";
import "./UnpopularTabs.css";

const UnpopularTabs = ({
  tabs,
  tabStyle,
  activeTabStyle,
  contentStyle,
  iconSize,
  transitionDuration,
  animatedContent,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab ${index === activeIndex ? "active" : ""}`}
            style={
              index === activeIndex
                ? { ...tabStyle, ...activeTabStyle }
                : tabStyle
            }
            onClick={() => setActiveIndex(index)}
          >
            {tab.icon && (
              <span className="tab-icon" style={{ fontSize: iconSize }}>
                {tab.icon}
              </span>
            )}
            <span className="tab-label">{tab.label}</span>
          </div>
        ))}
      </div>
      <div
        className={`tab-content ${animatedContent ? "animated" : ""}`}
        style={contentStyle}
      >
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

UnpopularTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      icon: PropTypes.node,
    })
  ).isRequired,
  tabStyle: PropTypes.object,
  activeTabStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  iconSize: PropTypes.string,
  transitionDuration: PropTypes.string,
  animatedContent: PropTypes.bool,
};

UnpopularTabs.defaultProps = {
  tabStyle: {},
  activeTabStyle: {},
  contentStyle: {},
  iconSize: "24px",
  transitionDuration: "0.3s",
  animatedContent: true,
};

export default UnpopularTabs;
