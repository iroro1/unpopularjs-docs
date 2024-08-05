"use client";
import React from "react";
import UnpopularSelect from "../../components/UnpopularSelect";

export default function SelectDocs() {
  const [selectedOption, setSelectedOption] = React.useState("");
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [options, setOptions] = React.useState([
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ]);

  const handleSingleSelect = (value) => {
    setSelectedOption(value);
  };

  const handleMultiSelect = (values) => {
    setSelectedOptions(values);
  };

  const asyncLoadOptions = () => {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve([
            { value: "async1", label: "Async Option 1" },
            { value: "async2", label: "Async Option 2" },
          ]),
        1000
      )
    );
  };

  const renderCustomOption = (option) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={`https://via.placeholder.com/20?text=${option.value}`}
        alt=""
        style={{ marginRight: "10px" }}
      />
      {option.label}
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          color: "#333",
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "36px",
        }}
      >
        UnpopularSelect Component Documentation
      </h1>

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{ color: "#0056b3", fontSize: "32px", marginBottom: "20px" }}
        >
          Single Select
        </h2>
        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}
        >
          Use the <code>UnpopularSelect</code> component to select a single
          option from a list.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <UnpopularSelect
            options={options}
            value={selectedOption}
            onChange={handleSingleSelect}
            style={{
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #007bff",
              backgroundColor: "#f0f4f8",
              padding: "10px",
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{ color: "#0056b3", fontSize: "32px", marginBottom: "20px" }}
        >
          Multi-Select
        </h2>
        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}
        >
          Use the <code>UnpopularSelect</code> component to select multiple
          options.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <UnpopularSelect
            options={options}
            value={selectedOptions}
            onChange={handleMultiSelect}
            multiSelect
            style={{
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #007bff",
              backgroundColor: "#f0f4f8",
              padding: "10px",
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{ color: "#0056b3", fontSize: "32px", marginBottom: "20px" }}
        >
          Searchable Dropdown
        </h2>
        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}
        >
          Enable search functionality with the <code>searchable</code> prop.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <UnpopularSelect
            options={options}
            value={selectedOption}
            onChange={handleSingleSelect}
            searchable
            style={{
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #007bff",
              backgroundColor: "#f0f4f8",
              padding: "10px",
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{ color: "#0056b3", fontSize: "32px", marginBottom: "20px" }}
        >
          Async Loading
        </h2>
        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}
        >
          Load options asynchronously with the <code>asyncLoad</code> and{" "}
          <code>loadOptions</code> props.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <UnpopularSelect
            options={[]}
            value={selectedOption}
            onChange={handleSingleSelect}
            asyncLoad
            loadOptions={asyncLoadOptions}
            style={{
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #007bff",
              backgroundColor: "#f0f4f8",
              padding: "10px",
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{ color: "#0056b3", fontSize: "32px", marginBottom: "20px" }}
        >
          Custom Rendering
        </h2>
        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}
        >
          Customize the rendering of options and selected values using the{" "}
          <code>renderOption</code> and <code>renderSelected</code> props.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <UnpopularSelect
            options={options}
            value={selectedOption}
            onChange={handleSingleSelect}
            renderOption={renderCustomOption}
            style={{
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #007bff",
              backgroundColor: "#f0f4f8",
              padding: "10px",
            }}
          />
        </div>
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2
          style={{ color: "#0056b3", fontSize: "32px", marginBottom: "20px" }}
        >
          Disabled State
        </h2>
        <p
          style={{ fontSize: "16px", lineHeight: "1.6", marginBottom: "20px" }}
        >
          Disable the dropdown with the <code>disabled</code> prop.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <UnpopularSelect
            options={options}
            value={selectedOption}
            onChange={handleSingleSelect}
            disabled={true}
            style={{
              width: "300px",
              borderRadius: "8px",
              border: "1px solid #007bff",
              backgroundColor: "#f0f4f8",
              padding: "10px",
            }}
          />
        </div>
      </section>
    </div>
  );
}
