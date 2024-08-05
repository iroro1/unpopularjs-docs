import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const UnpopularSelect = ({
  options,
  value,
  onChange,
  multiSelect = false,
  placeholder = "Select...",
  style = {},
  containerStyle = {},
  disabled = false,
  searchable = false,
  asyncLoad = false,
  loadOptions = () => Promise.resolve([]),
  clearable = false,
  groupOptions = false,
  renderOption,
  renderSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    multiSelect ? (Array.isArray(value) ? value : []) : value
  );
  const [filter, setFilter] = useState("");
  const [asyncOptions, setAsyncOptions] = useState([]);

  useEffect(() => {
    if (asyncLoad) {
      loadOptions().then(setAsyncOptions);
    }
  }, [asyncLoad, loadOptions]);

  const handleSelect = (option) => {
    if (multiSelect) {
      const newSelection = selectedOptions.includes(option)
        ? selectedOptions.filter((o) => o !== option)
        : [...selectedOptions, option];
      setSelectedOptions(newSelection);
      onChange(newSelection);
    } else {
      setSelectedOptions(option);
      setIsOpen(false);
      onChange(option);
    }
  };

  const handleToggle = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  const handleClear = () => {
    setSelectedOptions(multiSelect ? [] : "");
    onChange(multiSelect ? [] : "");
  };

  const filteredOptions = searchable
    ? (asyncLoad ? asyncOptions : options).filter((opt) =>
        opt.label.toLowerCase().includes(filter.toLowerCase())
      )
    : asyncLoad
    ? asyncOptions
    : options;

  const selectedLabels = multiSelect
    ? (asyncLoad ? asyncOptions : options)
        .filter((opt) => selectedOptions.includes(opt.value))
        .map((opt) => opt.label)
        .join(", ")
    : (asyncLoad ? asyncOptions : options).find(
        (opt) => opt.value === selectedOptions
      )?.label || placeholder;

  return (
    <div
      style={{
        ...containerStyle,
        position: "relative",
        width: "100%",
      }}
    >
      <div
        onClick={handleToggle}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          padding: "10px",
          borderRadius: "4px",
          border: "1px solid #007bff",
          backgroundColor: disabled ? "#e9ecef" : "#fff",
          cursor: disabled ? "not-allowed" : "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          position: "relative",
        }}
      >
        <span>{selectedLabels || placeholder}</span>
        {clearable && selectedOptions.length > 0 && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              handleClear();
            }}
            style={{
              marginLeft: "auto",
              padding: "0 10px",
              color: "#007bff",
              cursor: "pointer",
            }}
          >
            ×
          </span>
        )}
        <span
          style={{
            marginLeft: "auto",
            borderLeft: "1px solid #007bff",
            paddingLeft: "10px",
            color: "#007bff",
          }}
        >
          ▼
        </span>
      </div>
      {isOpen && !disabled && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            right: "0",
            borderRadius: "4px",
            border: "1px solid #007bff",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            maxHeight: "200px",
            overflowY: "auto",
            zIndex: "10",
            marginTop: "5px",
          }}
        >
          {searchable && (
            <input
              type="text"
              value={filter}
              onChange={handleSearch}
              placeholder="Search..."
              style={{
                width: "100%",
                padding: "10px",
                border: "none",
                borderBottom: "1px solid #007bff",
                borderRadius: "4px 4px 0 0",
              }}
            />
          )}
          {(groupOptions
            ? (asyncLoad ? asyncOptions : options).reduce((groups, option) => {
                const group = groups.find((g) => g.group === option.group);
                if (group) {
                  group.options.push(option);
                } else {
                  groups.push({ group: option.group, options: [option] });
                }
                return groups;
              }, [])
            : [{ group: null, options: asyncLoad ? asyncOptions : options }]
          ).map((group) => (
            <div key={group.group || "no-group"}>
              {group.group && (
                <div
                  style={{
                    padding: "10px",
                    fontWeight: "bold",
                    borderBottom: "1px solid #e9ecef",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  {group.group}
                </div>
              )}
              {group.options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  style={{
                    padding: "10px",
                    cursor: "pointer",
                    backgroundColor: selectedOptions.includes(option.value)
                      ? "#007bff"
                      : "#fff",
                    color: selectedOptions.includes(option.value)
                      ? "#fff"
                      : "#333",
                  }}
                >
                  {renderOption ? renderOption(option) : option.label}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

UnpopularSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      group: PropTypes.string, // Optional grouping property
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onChange: PropTypes.func.isRequired,
  multiSelect: PropTypes.bool,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  disabled: PropTypes.bool,
  searchable: PropTypes.bool,
  asyncLoad: PropTypes.bool,
  loadOptions: PropTypes.func,
  clearable: PropTypes.bool,
  groupOptions: PropTypes.bool,
  renderOption: PropTypes.func,
  renderSelected: PropTypes.func,
};

UnpopularSelect.defaultProps = {
  value: "",
  multiSelect: false,
  placeholder: "Select...",
  style: {},
  containerStyle: {},
  disabled: false,
  searchable: false,
  asyncLoad: false,
  loadOptions: () => Promise.resolve([]),
  clearable: false,
  groupOptions: false,
  renderOption: null,
  renderSelected: null,
};

export default UnpopularSelect;
