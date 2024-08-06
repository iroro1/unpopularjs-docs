"use client";
import React, { useState } from "react";
import { UnpopularButton, UnpopularDatePicker } from "unpopular-js";

const DatePickerDocs = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="docs-container">
      <h1 className="docs-title">UnpopularDatePicker Documentation</h1>

      <section className="docs-section">
        <h2 className="section-title">Overview</h2>
        <p className="section-description">
          The <code>UnpopularDatePicker</code> component is a fully
          customizable, stylish date picker component that allows users to
          select dates. It supports a variety of features and customization
          options to fit your needs.
        </p>
      </section>

      <section className="docs-section">
        <h2 className="section-title">Basic Usage</h2>
        <p className="section-description">
          To use the <code>UnpopularDatePicker</code>, simply import the
          component and provide the required <code>initialDate</code> and{" "}
          <code>onDateChange</code> props.
        </p>
        <pre className="code-block">
          <code>
            {`
import React, { useState } from 'react';
import UnpopularDatePicker from './UnpopularDatePicker';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <UnpopularDatePicker
      initialDate={selectedDate}
      onDateChange={handleDateChange}
    />
  );
};

export default App;
            `}
          </code>
        </pre>
        <UnpopularDatePicker
          initialDate={selectedDate}
          onDateChange={handleDateChange}
        />
        <p>Selected Date: {selectedDate.toDateString()}</p>
      </section>

      <section className="docs-section">
        <h2 className="section-title">Custom Styles</h2>
        <p className="section-description">
          You can customize the styles of the <code>UnpopularDatePicker</code>{" "}
          by passing a <code>customStyles</code> prop.
        </p>
        <pre className="code-block">
          <code>
            {`
<UnpopularDatePicker
  initialDate={selectedDate}
  onDateChange={handleDateChange}
  customStyles={{ borderColor: '#007bff', color: '#333' }}
/>
            `}
          </code>
        </pre>
        <UnpopularDatePicker
          initialDate={selectedDate}
          onDateChange={handleDateChange}
          customStyles={{ borderColor: "#007bff", color: "#333" }}
        />
      </section>

      <section className="docs-section">
        <h2 className="section-title">Props</h2>
        <table className="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>initialDate</code>
              </td>
              <td>
                <code>Date</code>
              </td>
              <td>The initial date to be selected.</td>
            </tr>
            <tr>
              <td>
                <code>onDateChange</code>
              </td>
              <td>
                <code>function</code>
              </td>
              <td>
                Callback function that is called when the selected date changes.
              </td>
            </tr>
            <tr>
              <td>
                <code>customStyles</code>
              </td>
              <td>
                <code>object</code>
              </td>
              <td>Custom styles to apply to the date picker.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="docs-section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-description">
          The <code>UnpopularDatePicker</code> component is a powerful and
          user-friendly date picker that allows users to select dates. It
          provides a wide range of customization options and supports a variety
          of features.
        </p>
      </section>

      <div className="flex justify-between mt-5 w-full">
        <UnpopularButton
          style={{ backgroundColor: "#0056b3" }}
          onClick={() => router.push("/unpopular-carousel")}
        >
          To UnpopularCarousel
        </UnpopularButton>
        <UnpopularButton
          disabled={true}
          onClick={() => router.push("/unpopular-calendar")}
        >
          To UnpopularCalendar
        </UnpopularButton>
      </div>
    </div>
  );
};

export default DatePickerDocs;
