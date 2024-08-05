"use client";
import { UnpopularButton } from "unpopular-js";

const ButtonDocs = () => {
  const buttonStyles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      minHeight: "100vh",
    },
    section: {
      margin: "20px 0",
      textAlign: "center",
      maxWidth: "800px",
    },
    title: {
      fontSize: "2rem",
      color: "#333",
    },
    description: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "10px",
    },
    exampleContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    buttonWrapper: {
      margin: "10px",
    },
    codeBlock: {
      backgroundColor: "#333",
      color: "#f4f4f4",
      padding: "10px",
      borderRadius: "5px",
      maxWidth: "600px",
      textAlign: "left",
      whiteSpace: "pre-wrap",
      overflowX: "auto",
    },
  };

  return (
    <div style={buttonStyles.container}>
      <div style={buttonStyles.section}>
        <h1 style={buttonStyles.title}>UnpopularButton Component</h1>
        <p style={buttonStyles.description}>
          The `UnpopularButton` is a modern and customizable button component
          that includes hover effects, smooth transitions, and easy styling
          options.
        </p>
      </div>

      <div style={buttonStyles.section}>
        <h2 style={buttonStyles.title}>Default Button</h2>
        <div style={buttonStyles.exampleContainer}>
          <div style={buttonStyles.buttonWrapper}>
            <UnpopularButton>Click Me</UnpopularButton>
          </div>
          <pre style={buttonStyles.codeBlock}>
            {`<UnpopularButton>Click Me</UnpopularButton>`}
          </pre>
        </div>
        <p style={buttonStyles.description}>
          A basic button with default styles and hover effect.
        </p>
      </div>

      <div style={buttonStyles.section}>
        <h2 style={buttonStyles.title}>Custom Button</h2>
        <div style={buttonStyles.exampleContainer}>
          <div style={buttonStyles.buttonWrapper}>
            <UnpopularButton
              style={{
                backgroundColor: "#ff5722",
                borderRadius: "12px",
                padding: "14px 28px",
              }}
              hoverColor="#e64a19"
            >
              Custom Style
            </UnpopularButton>
          </div>
          <pre style={buttonStyles.codeBlock}>
            {`<UnpopularButton
  style={{ backgroundColor: '#ff5722', borderRadius: '12px', padding: '14px 28px' }}
  hoverColor="#e64a19"
>
  Custom Style
</UnpopularButton>`}
          </pre>
        </div>
        <p style={buttonStyles.description}>
          A button with custom styles, including background color, border
          radius, and padding.
        </p>
      </div>

      <div style={buttonStyles.section}>
        <h2 style={buttonStyles.title}>Disabled Button</h2>
        <div style={buttonStyles.exampleContainer}>
          <div style={buttonStyles.buttonWrapper}>
            <UnpopularButton disabled>Disabled</UnpopularButton>
          </div>
          <pre style={buttonStyles.codeBlock}>
            {`<UnpopularButton disabled>Disabled</UnpopularButton>`}
          </pre>
        </div>
        <p style={buttonStyles.description}>
          A button that is disabled and appears with reduced opacity.
        </p>
      </div>

      <div style={buttonStyles.section}>
        <h2 style={buttonStyles.title}>Button with Hover Color</h2>
        <div style={buttonStyles.exampleContainer}>
          <div style={buttonStyles.buttonWrapper}>
            <UnpopularButton hoverColor="#00bcd4">Hover Me</UnpopularButton>
          </div>
          <pre style={buttonStyles.codeBlock}>
            {`<UnpopularButton hoverColor="#00bcd4">Hover Me</UnpopularButton>`}
          </pre>
        </div>
        <p style={buttonStyles.description}>
          A button with a custom hover color that changes when you hover over
          it.
        </p>
      </div>
    </div>
  );
};

export default ButtonDocs;
