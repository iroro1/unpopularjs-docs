import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import "./UnpopularDatePicker.css";

const UnpopularDatePicker = ({ initialDate, onDateChange, customStyles }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [currentMonth, setCurrentMonth] = useState(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1)
  );
  const [showCalendar, setShowCalendar] = useState(false);

  const startOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  );
  const daysInMonth = endOfMonth.getDate();
  const firstDayIndex = startOfMonth.getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day) => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setSelectedDate(newDate);
    onDateChange(newDate);
    setShowCalendar(false);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentMonth.getMonth() &&
        selectedDate.getFullYear() === currentMonth.getFullYear();
      days.push(
        <div
          key={day}
          className={`day ${isSelected ? "selected" : ""}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }
    return days;
  };

  return (
    <div className="unpopular-date-picker" style={customStyles}>
      <div
        className="date-picker-input"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <FaCalendar />
        <input type="text" value={selectedDate.toDateString()} readOnly />
        {showCalendar && (
          <FaTimes
            className="close-icon"
            onClick={() => setShowCalendar(false)}
          />
        )}
      </div>
      {showCalendar && (
        <div className="calendar">
          <div className="calendar-header">
            <button onClick={handlePrevMonth}>
              <FaChevronLeft />
            </button>
            <div className="current-date">
              {currentMonth.toLocaleString("default", { month: "long" })}{" "}
              {currentMonth.getFullYear()}
            </div>
            <button onClick={handleNextMonth}>
              <FaChevronRight />
            </button>
          </div>
          <div className="calendar-grid">{renderDays()}</div>
        </div>
      )}
    </div>
  );
};

UnpopularDatePicker.propTypes = {
  initialDate: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
  customStyles: PropTypes.object,
};

UnpopularDatePicker.defaultProps = {
  customStyles: {},
};

export default UnpopularDatePicker;
