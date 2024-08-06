"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { UnpopularButton } from "unpopular-js";

const ButtonDocs = () => {
  const router = useRouter();
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>UnpopularButton Documentation</h1>
      <p style={styles.description}>
        The <code style={styles.code}>UnpopularButton</code> component is a
        modern, customizable button with hover effects and smooth transitions.
        This guide will show you how to use and style it.
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
        <h2 style={styles.subtitle}>UnpopularButton Component</h2>
        <p style={styles.text}>
          The <code style={styles.code}>UnpopularButton</code> component has
          various props to customize its appearance and behavior.
        </p>
        <h3 style={styles.subtitle}>Props</h3>
        <ul style={styles.list}>
          <li>
            <strong>children</strong> (node) - The content to display inside the
            button.
          </li>
          <li>
            <strong>onClick</strong> (function) - A callback function to handle
            button clicks.
          </li>
          <li>
            <strong>type</strong> (string) - The type of the button. Can be
            "button", "submit", or "reset". Default is "button".
          </li>
          <li>
            <strong>style</strong> (object) - Inline styles to apply to the
            button.
          </li>
          <li>
            <strong>disabled</strong> (boolean) - Whether the button is
            disabled. Default is <code>false</code>.
          </li>
          <li>
            <strong>hoverColor</strong> (string) - The color of the button when
            hovered. Default is <code>#0056b3</code>.
          </li>
          <li>
            <strong>borderRadius</strong> (string) - The border radius of the
            button. Default is <code>"8px"</code>.
          </li>
          <li>
            <strong>fontSize</strong> (string) - The font size of the button
            text. Default is <code>"16px"</code>.
          </li>
          <li>
            <strong>padding</strong> (string) - The padding inside the button.
            Default is <code>"12px 24px"</code>.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Usage Example</h2>
        <p style={styles.text}>
          Here's a basic example of how to use the{" "}
          <code style={styles.code}>UnpopularButton</code> component:
        </p>
        <pre style={styles.codeBlock}>
          <code>
            {`import React from 'react';
import UnpopularButton from 'unpopular-js';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <UnpopularButton onClick={() => alert('Button clicked!')}>
        Click Me
      </UnpopularButton>

      <UnpopularButton
        style={{ backgroundColor: '#ff5722', borderRadius: '12px', padding: '14px 28px' }}
        hoverColor="#e64a19"
      >
        Custom Style
      </UnpopularButton>

      <UnpopularButton disabled>
        Disabled
      </UnpopularButton>

      <UnpopularButton hoverColor="#00bcd4">
        Hover Me
      </UnpopularButton>
    </div>
  );
};

export default App;`}
          </code>
        </pre>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>Extended Use Cases</h2>
        <p style={styles.text}>
          Here are additional use cases to test the{" "}
          <code style={styles.code}>UnpopularButton</code> component with
          various customizations:
        </p>

        <h3 style={styles.subtitle}>
          1. Button with Custom Font Size and Padding
        </h3>
        <UnpopularButton
          style={{ fontSize: "20px", padding: "16px 32px" }}
          hoverColor="#ff5722"
        >
          Large Button
        </UnpopularButton>
        <pre style={styles.codeBlock}>
          <code>
            {`<UnpopularButton
  style={{ fontSize: '20px', padding: '16px 32px' }}
  hoverColor="#ff5722"
>
  Large Button
</UnpopularButton>`}
          </code>
        </pre>

        <h3 style={styles.subtitle}>2. Button with Different Border Radius</h3>
        <UnpopularButton style={{ borderRadius: "50px" }} hoverColor="#8bc34a">
          Rounded Button
        </UnpopularButton>
        <pre style={styles.codeBlock}>
          <code>
            {`<UnpopularButton
  style={{ borderRadius: '50px' }}
  hoverColor="#8bc34a"
>
  Rounded Button
</UnpopularButton>`}
          </code>
        </pre>

        <h3 style={styles.subtitle}>3. Button with Disabled State</h3>
        <UnpopularButton style={{ backgroundColor: "#9e9e9e" }} disabled>
          Disabled Button
        </UnpopularButton>
        <pre style={styles.codeBlock}>
          <code>
            {`<UnpopularButton
  style={{ backgroundColor: '#9e9e9e' }}
  disabled
>
  Disabled Button
</UnpopularButton>`}
          </code>
        </pre>

        <h3 style={styles.subtitle}>4. Button with Custom Hover Color</h3>
        <UnpopularButton hoverColor="#673ab7">
          Custom Hover Color
        </UnpopularButton>
        <pre style={styles.codeBlock}>
          <code>
            {`<UnpopularButton
  hoverColor="#673ab7"
>
  Custom Hover Color
</UnpopularButton>`}
          </code>
        </pre>

        <h3 style={styles.subtitle}>5. Button with Custom Inline Styles</h3>
        <UnpopularButton
          style={{
            backgroundColor: "#ff5722",
            color: "#ffffff",
            fontSize: "18px",
            border: "2px solid #e64a19",
          }}
          hoverColor="#e64a19"
        >
          Stylish Button
        </UnpopularButton>
        <pre style={styles.codeBlock}>
          <code>
            {`<UnpopularButton
  style={{
    backgroundColor: '#ff5722',
    color: '#ffffff',
    fontSize: '18px',
    border: '2px solid #e64a19',
  }}
  hoverColor="#e64a19"
>
  Stylish Button
</UnpopularButton>`}
          </code>
        </pre>
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
          onClick={() => router.push("/")}
        >
          To Installation
        </UnpopularButton>
        <UnpopularButton onClick={() => router.push("/unpopular-select")}>
          To UnpopularSelect
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
  list: {
    paddingLeft: "20px",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  code: {
    backgroundColor: "#f8f9fa",
    padding: "2px 4px",
    borderRadius: "4px",
    fontSize: "1rem",
    marginTop: "10px",
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

export default ButtonDocs;
