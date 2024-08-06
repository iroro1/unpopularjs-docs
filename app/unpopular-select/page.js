"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { UnpopularButton, UnpopularSelect } from "unpopular-js";

const SelectDocs = () => {
  const router = useRouter();
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
    <div style={styles.container}>
      <h1 style={styles.title}>UnpopularSelect Documentation</h1>
      <p style={styles.description}>
        The <code style={styles.code}>UnpopularSelect</code> component provides
        a versatile and customizable dropdown for selecting options. This guide
        will cover its various features and usage.
      </p>
      {/* <section style={styles.section}>
        <h2 style={styles.subtitle}>Installation</h2>
        <p style={styles.text}>Install the package using npm or yarn:</p>
        <pre style={styles.codeBlock}>
          <code>npm install unpopular-js</code>
        </pre>
        <pre style={styles.codeBlock}>
          <code>yarn add unpopular-js</code>
        </pre>
      </section> */}
      <section style={styles.section}>
        <h2 style={styles.subtitle}>UnpopularSelect Component</h2>

        <p style={styles.text}>
          The <code style={styles.code}>UnpopularSelect</code> component has
          various props to customize its appearance and behavior.
        </p>
        <h3 style={styles.subtitle}>Props</h3>
        <ul style={styles.list}>
          <li>
            <strong>asyncLoad</strong>
          </li>
          <li>
            <strong>clearable</strong> (function) -
          </li>
          <li>
            <strong>containerStyle</strong> (string) -
          </li>
          <li>
            <strong>disabled</strong> (object) -
          </li>
          <li>
            <strong>groupOptions</strong> (boolean) - <code>false</code>.
          </li>
          <li>
            <strong>placeholder</strong> (string) - <code>#0056b3</code>.
          </li>
          <li>
            <strong>renderOption</strong> (string) -{" "}
            <code>&ldquo;8px&ldquo;</code>.
          </li>
          <li>
            <strong>renderSelected</strong> (string) - s{" "}
            <code>&ldquo;16px&ldquo;</code>.
          </li>
          <li>
            <strong>style</strong> (string) - Default is{" "}
            <code>&ldquo;12px 24px&ldquo;</code>.
          </li>
          <li>
            <strong>value</strong> (string) -
          </li>
          <li>
            <strong>onChange</strong> (function) -
          </li>
          <li>
            <strong>options</strong> (array) -
          </li>
          <li>
            <strong>searchable</strong> (boolean) - <code>false</code>.
          </li>
        </ul>

        <h2 style={styles.subtitle}>Usage Example</h2>
        <p style={styles.text}>
          Here&apos;s a basic example of how to use the{" "}
          <code style={styles.code}>UnpopularSelect</code> component:
        </p>
        <pre style={styles.codeBlock}>
          <code>
            {`import React from 'react';
import UnpopularSelect from 'unpopular-js';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <UnpopularSelect
        options={options}
        value={selectedOption}
        onChange={handleSingleSelect}
        style={styles.select}
      />

      <UnpopularSelect
        options={options}
        value={selectedOptions}
        onChange={handleMultiSelect}
        multiSelect
        style={styles.select}
      />

      <UnpopularSelect
        asyncLoad
        clearable
        groupOptions
        placeholder="Select an option..."
        renderOption={renderCustomOption}
        renderSelected={renderCustomOption}
        style={styles.select}
        value={selectedOption}
        onChange={handleSingleSelect}
        options={options}
        searchable
      />
    </div>
  );
};

export default App;`}
          </code>
        </pre>
        <h2 style={styles.subtitle}>Extended Use Cases</h2>
        <p style={styles.text}>
          Here are additional use cases to test the{" "}
          <code style={styles.code}>UnpopularSelect</code> component with
          various customizations:
        </p>

        <h2 style={styles.subtitle}>1. Single Select</h2>
        <p style={styles.text}>
          Use the <code style={styles.code}>UnpopularSelect</code> component to
          select a single option from a list.
        </p>
        <div style={styles.centered}>
          <UnpopularSelect
            options={options}
            value={selectedOption}
            onChange={handleSingleSelect}
            style={styles.select}
          />
        </div>
        <pre style={styles.codeBlock}>
          <code>
            {`<UnpopularSelect
  options={options}
  value={selectedOption}
  onChange={handleSingleSelect}
  style={styles.select}
/>`}
          </code>
        </pre>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>2. Multi-Select</h2>
        <p style={styles.text}>
          Use the <code style={styles.code}>UnpopularSelect</code> component to
          select multiple options.
        </p>
        <div style={styles.centered}>
          <UnpopularSelect
            options={options}
            value={selectedOptions}
            onChange={handleMultiSelect}
            multiSelect
            style={styles.select}
          />
        </div>
        <pre style={styles.codeBlock}>
          <code>
            {` <UnpopularSelect
  options={options}
  value={selectedOptions}
  onChange={handleMultiSelect}
  multiSelect
  style={styles.select}
/>`}
          </code>
        </pre>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>3. Searchable Dropdown</h2>
        <p style={styles.text}>
          Enable search functionality with the{" "}
          <code style={styles.code}>searchable</code> prop.
        </p>
        <div style={styles.centered}>
          <UnpopularSelect
            options={options}
            value={selectedOption}
            onChange={handleSingleSelect}
            searchable
            style={styles.select}
          />
        </div>
        <pre style={styles.codeBlock}>
          <code>
            {` <UnpopularSelect   
  options={options}
  value={selectedOption}
  onChange={handleSingleSelect}
  searchable
  style={styles.select}
/>`}
          </code>
        </pre>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>4. Async Loading</h2>
        <p style={styles.text}>
          Load options asynchronously with the{" "}
          <code style={styles.code}>asyncLoad</code> and{" "}
          <code style={styles.code}>loadOptions</code> props.
        </p>
        <div style={styles.centered}>
          <UnpopularSelect
            options={[]}
            value={selectedOption}
            onChange={handleSingleSelect}
            asyncLoad
            loadOptions={asyncLoadOptions}
            style={styles.select}
          />
        </div>
        <pre style={styles.codeBlock}>
          <code>
            {` <UnpopularSelect 
  options={[]}
  value={selectedOption}
  onChange={handleSingleSelect}
  asyncLoad
  loadOptions={asyncLoadOptions}
  style={styles.select}
/>`}
          </code>
        </pre>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>5. Custom Rendering</h2>
        <p style={styles.text}>
          Customize the rendering of options and selected values using the{" "}
          <code style={styles.code}>renderOption</code> and{" "}
          <code style={styles.code}>renderSelected</code> props.
        </p>
        <div style={styles.centered}>
          <UnpopularSelect
            options={options}
            value={selectedOption}
            onChange={handleSingleSelect}
            renderOption={renderCustomOption}
            style={styles.select}
          />
        </div>
        <pre style={styles.codeBlock}>
          <code>
            {` <UnpopularSelect
  options={options}
  value={selectedOption}
  onChange={handleSingleSelect}
  renderOption={renderCustomOption}
  style={styles.select}
/>`}
          </code>
        </pre>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Disabled State</h2>
        <p style={styles.text}>
          Disable the dropdown with the{" "}
          <code style={styles.code}>disabled</code> prop.
        </p>
        <div style={styles.centered}>
          <UnpopularSelect
            options={options}
            value={selectedOption}
            onChange={handleSingleSelect}
            disabled
            style={styles.select}
          />
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Styling</h2>
        <p style={styles.text}>
          The <code style={styles.code}>UnpopularButton</code> component comes
          with default styling but allows you to customize its appearance
          through props and inline styles. You can adjust colors, border radius,
          font size, and padding to fit your design needs.
        </p>
      </section>
      <div className="flex justify-between mt-5 w-full">
        <UnpopularButton
          style={{ backgroundColor: "#0056b3" }}
          onClick={() => router.push("/unpopular-button")}
        >
          To UnpopularButton
        </UnpopularButton>
        <UnpopularButton onClick={() => router.push("/unpopular-toast")}>
          To UnpopularToast
        </UnpopularButton>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    color: "#333",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#007bff",
  },
  list: {
    paddingLeft: "20px",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.1rem",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "40px",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    marginTop: "30px",
    color: "#0056b3",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "10px",
  },
  code: {
    backgroundColor: "#f8f9fa",
    padding: "2px 4px",
    borderRadius: "4px",
    fontSize: "1rem",
    marginTop: "10px",
  },
  select: {
    width: "300px",
    borderRadius: "8px",
    border: "1px solid #007bff",
    backgroundColor: "#f0f4f8",
    padding: "10px",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
  },
  codeBlock: {
    backgroundColor: "#f8f9fa",
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    overflowX: "auto",
    marginTop: "10px",
  },
};

export default SelectDocs;
