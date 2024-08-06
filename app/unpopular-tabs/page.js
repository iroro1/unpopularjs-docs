"use client";
import React from "react";
import { UnpopularButton, UnpopularTabs } from "unpopular-js";
import { useRouter } from "next/navigation";

const tabs = [
  {
    label: "Tab 1",
    content: <p>This is the content of Tab 1.</p>,
    icon: "📚",
  },
  {
    label: "Tab 2",
    content: <p>This is the content of Tab 2.</p>,
    icon: "🔍",
  },
  {
    label: "Tab 3",
    content: <p>This is the content of Tab 3.</p>,
    icon: "⚙️",
  },
];

const TabsDocs = () => {
  const router = useRouter();
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
          color: "#007bff",
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "36px",
        }}
      >
        UnpopularTabs Documentation
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularTabs</code> component allows you to create a modern
        tabbed interface with customizable styles and features.
      </p>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Props</h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularTabs</code> component accepts the following props:
      </p>

      <table
        style={{
          width: "100%",
          marginTop: "20px",
          marginBottom: "40px",
          borderCollapse: "collapse",
        }}
      >
        <thead
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "1.6",
            backgroundColor: "#f8f9fa",
            textAlign: "left",
          }}
        >
          <tr style={{ borderBottom: "1px solid #dee2e6", padding: "12px" }}>
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={{
              borderBottom: "1px solid #dee2e6",
              padding: "12px",
              verticalAlign: "top",
              fontSize: "14px",
            }}
          >
            <td>tabs</td>
            <td>Array</td>
            <td>An array of objects representing the tabs.</td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #dee2e6",
              padding: "12px",
              verticalAlign: "top",
              fontSize: "14px",
            }}
          >
            <td>tabStyle</td>
            <td>Object</td>
            <td>An object representing the styles for the tabs.</td>
          </tr>
          <tr
            style={{
              padding: "12px",
              verticalAlign: "top",
              fontSize: "14px",
              borderBottom: "1px solid #dee2e6",
            }}
          >
            <td>contentStyle</td>
            <td>Object</td>
            <td>An object representing the styles for the content.</td>
          </tr>
          <tr
            style={{
              padding: "12px",
              verticalAlign: "top",
              fontSize: "14px",
              borderBottom: "1px solid #dee2e6",
            }}
          >
            <td>transitionDuration</td>
            <td>String</td>
            <td>The duration of the transition effect in milliseconds.</td>
          </tr>
          <tr
            style={{
              padding: "12px",
              verticalAlign: "top",
              fontSize: "14px",
              borderBottom: "1px solid #dee2e6",
            }}
          >
            <td>activeTabStyle</td>
            <td>Object</td>
            <td>An object representing the styles for the active tab.</td>
          </tr>
          <tr
            style={{
              padding: "12px",
              verticalAlign: "top",
              fontSize: "14px",
              borderBottom: "1px solid #dee2e6",
            }}
          >
            <td>iconSize</td>
            <td>String</td>
            <td>The size of the icons in the tabs.</td>
          </tr>
          <tr
            style={{
              padding: "12px",
              verticalAlign: "top",
              fontSize: "14px",
              borderBottom: "1px solid #dee2e6",
            }}
          >
            <td>animatedContent</td>
            <td>Boolean</td>
            <td>Whether to animate the content.</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Basic Usage</h2>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`const tabs = [
  { label: "Tab 1", content: <p>This is the content of Tab 1.</p>, icon: '📚' },
  { label: "Tab 2", content: <p>This is the content of Tab 2.</p>, icon: '🔍' },
  { label: "Tab 3", content: <p>This is the content of Tab 3.</p>, icon: '⚙️' },
];

// Usage
<UnpopularTabs tabs={tabs} />`}
        </code>
      </pre>
      <UnpopularTabs tabs={tabs} />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Custom Styles</h2>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`const tabStyle = {
  backgroundColor: '#e9ecef',
  color: '#333',
};

const activeTabStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  fontWeight: 'bold',
};

const contentStyle = {
  padding: '20px',
  backgroundColor: '#fff',
};

// Usage
<UnpopularTabs
  tabs={tabs}
  tabStyle={tabStyle}
  activeTabStyle={activeTabStyle}
  contentStyle={contentStyle}
  iconSize="30px"
  transitionDuration="0.5s"
/>`}
        </code>
      </pre>
      <UnpopularTabs
        tabs={tabs}
        tabStyle={{ backgroundColor: "#e9ecef", color: "#333" }}
        activeTabStyle={{
          backgroundColor: "#007bff",
          color: "#fff",
          fontWeight: "bold",
        }}
        contentStyle={{ padding: "20px", backgroundColor: "#fff" }}
        iconSize="30px"
        transitionDuration="0.5s"
      />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Conclusion</h2>
      <p>
        The UnpopularTabs component is a reusable component that displays a list
        of tabs and their corresponding content. It allows users to switch
        between different tabs and view the content associated with each tab.
      </p>

      <div className="flex justify-between mt-5 w-full">
        <UnpopularButton
          style={{ backgroundColor: "#0056b3" }}
          onClick={() => router.push("/unpopular-accordion")}
        >
          To UnpopularAccordion
        </UnpopularButton>
        <UnpopularButton onClick={() => router.push("/unpopular-carousel")}>
          To UnpopularCarousel
        </UnpopularButton>
      </div>
    </div>
  );
};

export default TabsDocs;
