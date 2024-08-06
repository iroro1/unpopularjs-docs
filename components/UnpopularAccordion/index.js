import React, { useState } from "react";
import PropTypes from "prop-types";
import "./UnpopularAccordion.css";

const UnpopularAccordion = ({
  sections,
  accordionStyle,
  sectionStyle,
  headerStyle,
  contentStyle,
  transitionDuration,
  expandedIcon,
  collapsedIcon,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion" style={accordionStyle}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`accordion-section ${
            index === activeIndex ? "active" : ""
          }`}
          style={sectionStyle}
        >
          <div
            className="accordion-header"
            onClick={() => toggleSection(index)}
            style={headerStyle}
          >
            <span>{section.header}</span>
            <span className="accordion-icon">
              {index === activeIndex ? expandedIcon : collapsedIcon}
            </span>
          </div>
          {activeIndex === index && (
            <div
              className="accordion-content"
              style={{
                ...contentStyle,
                maxHeight: index === activeIndex ? "500px" : "0",
                transition: `max-height ${transitionDuration}ms ease-in-out`,
              }}
            >
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

UnpopularAccordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  accordionStyle: PropTypes.object,
  sectionStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  transitionDuration: PropTypes.number,
  expandedIcon: PropTypes.node,
  collapsedIcon: PropTypes.node,
};

UnpopularAccordion.defaultProps = {
  transitionDuration: 300,
  expandedIcon: "▲",
  collapsedIcon: "▼",
};

export default UnpopularAccordion;
