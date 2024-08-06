import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCalendarDay,
  FaCalendarWeek,
  FaCalendarMonth,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import PropTypes from "prop-types";
import "./UnpopularCalendar.css";

const UnpopularCalendar = ({ initialEvents, customStyles }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState("month");
  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const daysInMonth = endOfMonth.getDate();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const renderDays = () => {
    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div key={day} className="day" onClick={() => handleDayClick(day)}>
          {day}
          <div className="events">
            {events
              .filter((event) => new Date(event.date).getDate() === day)
              .map((event, index) => (
                <div
                  key={index}
                  className="event"
                  onClick={() => handleEventClick(event)}
                >
                  {event.title}
                </div>
              ))}
          </div>
        </div>
      );
    }
    return days;
  };

  const handleDayClick = (day) => {
    setSelectedEvent({
      date: new Date(currentDate.getFullYear(), currentDate.getMonth(), day),
      title: "",
      notes: "",
    });
    setShowEventModal(true);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleSaveEvent = () => {
    if (selectedEvent.id) {
      setEvents(
        events.map((event) =>
          event.id === selectedEvent.id ? selectedEvent : event
        )
      );
    } else {
      setEvents([...events, { ...selectedEvent, id: new Date().getTime() }]);
    }
    setShowEventModal(false);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((event) => event.id !== selectedEvent.id));
    setShowEventModal(false);
  };

  return (
    <div className="unpopular-calendar" style={customStyles}>
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>
          <FaChevronLeft />
        </button>
        <div className="current-date">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </div>
        <button onClick={handleNextMonth}>
          <FaChevronRight />
        </button>
      </div>
      <div className="calendar-views">
        <button onClick={() => setView("day")}>
          <FaCalendarDay />
        </button>
        <button onClick={() => setView("week")}>
          <FaCalendarWeek />
        </button>
        <button onClick={() => setView("month")}>
          <FaCalendarMonth />
        </button>
      </div>
      <div className={`calendar-grid ${view}`}>
        {view === "month" && renderDays()}
        {/* Implement other views as needed */}
      </div>
      {showEventModal && (
        <div className="event-modal">
          <div className="modal-content">
            <input
              type="text"
              placeholder="Event Title"
              value={selectedEvent.title}
              onChange={(e) =>
                setSelectedEvent({ ...selectedEvent, title: e.target.value })
              }
            />
            <textarea
              placeholder="Notes"
              value={selectedEvent.notes}
              onChange={(e) =>
                setSelectedEvent({ ...selectedEvent, notes: e.target.value })
              }
            />
            <button onClick={handleSaveEvent}>
              <FaPlus /> Save
            </button>
            {selectedEvent.id && (
              <button onClick={handleDeleteEvent}>
                <FaTrash /> Delete
              </button>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <FaEdit /> Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

UnpopularCalendar.propTypes = {
  initialEvents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      notes: PropTypes.string,
    })
  ).isRequired,
  customStyles: PropTypes.object,
};

UnpopularCalendar.defaultProps = {
  customStyles: {},
};

export default UnpopularCalendar;
