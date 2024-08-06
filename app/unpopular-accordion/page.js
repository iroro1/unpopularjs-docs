"use client";
import React from "react";
import { UnpopularButton, UnpopularAccordion } from "unpopular-js";
import { useRouter } from "next/navigation";

const sections = [
  {
    header: "Section 1",
    content: <p>This is the content of section 1.</p>,
  },
  {
    header: "Section 2",
    content: <p>This is the content of section 2.</p>,
  },
  {
    header: "Section 3",
    content: <p>This is the content of section 3.</p>,
  },
];

const AccordionDocs = () => {
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
        UnpopularAccordion Documentation
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularAccordion</code> component allows you to create
        expandable and collapsible sections. Below are examples of how to use
        the component in different scenarios.
      </p>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Props</h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The following props are available:
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead
          style={{ backgroundColor: "#f5f5f5", borderBottom: "1px solid #ddd" }}
        >
          <tr>
            <th style={{ padding: "10px", textAlign: "left" }}>Prop</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px", textAlign: "left" }}>
              <code>sections</code>
            </td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              An array of objects, each containing a <code>header</code> and{" "}
              <code>content</code>.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px", textAlign: "left" }}>
              <code>accordionStyle</code>
            </td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              An object containing styles for the accordion.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px", textAlign: "left" }}>
              <code>collapsedIcon</code>
            </td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              The icon to display when the section is collapsed.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px", textAlign: "left" }}>
              <code>contentStyle</code>
            </td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              An object containing styles for the content.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px", textAlign: "left" }}>
              <code>expandedIcon</code>
            </td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              The icon to display when the section is expanded.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px", textAlign: "left" }}>
              <code>sectionStyle</code>
            </td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              An object containing styles for the section.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px", textAlign: "left" }}>
              <code>transitionDuration</code>
            </td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              The duration of the transition when the section is expanded or
              collapsed.
            </td>
          </tr>
          <tr style={{ borderBottom: "1px solid #ddd" }}>
            <td style={{ padding: "10px", textAlign: "left" }}>
              <code>headerStyle</code>
            </td>
            <td style={{ padding: "10px", textAlign: "left" }}>
              An object containing styles for the header.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ color: "#007bff", marginTop: "40px", fontSize: "24px" }}>
        Basic Usage
      </h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        To create a basic accordion, you need to provide the{" "}
        <code>sections</code> prop. The <code>sections</code> prop is an array
        of objects, each containing a <code>header</code> and{" "}
        <code>content</code>.
      </p>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`const sections = [
  { header: "Section 1", content: <p>This is the content of section 1.</p> },
  { header: "Section 2", content: <p>This is the content of section 2.</p> },
  { header: "Section 3", content: <p>This is the content of section 3.</p> },
];

// Usage
<UnpopularAccordion sections={sections} />`}
        </code>
      </pre>
      <UnpopularAccordion sections={sections} />

      <h2 style={{ color: "#007bff", marginTop: "40px", fontSize: "24px" }}>
        Custom Styles and Icons
      </h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        You can apply custom styles to the accordion, sections, headers, and
        content by using the <code>accordionStyle</code>,{" "}
        <code>sectionStyle</code>, <code>headerStyle</code>, and{" "}
        <code>contentStyle</code> props. You can also provide custom icons for
        expanded and collapsed states.
      </p>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`const accordionStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
};

const sectionStyle = {
  marginBottom: '10px',
};

const headerStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '20px',
  fontSize: '18px',
};

const contentStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
};

const expandedIcon = <span>▲</span>;
const collapsedIcon = <span>▼</span>;

// Usage
<UnpopularAccordion
  sections={sections}
  accordionStyle={accordionStyle}
  sectionStyle={sectionStyle}
  headerStyle={headerStyle}
  contentStyle={contentStyle}
  expandedIcon={expandedIcon}
  collapsedIcon={collapsedIcon}
/>`}
        </code>
      </pre>

      <h2 style={{ color: "#007bff", marginTop: "40px", fontSize: "24px" }}>
        Additional use cases
      </h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        You can add additional features to the accordion by using the{" "}
        <code>expandedIcon</code>, <code>collapsedIcon</code>, and{" "}
        <code>transitionDuration</code> props.
      </p>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`const expandedIcon = <span>▲</span>;
const collapsedIcon = <span>▼</span>;
const transitionDuration = 300; // in milliseconds

// Usage
<UnpopularAccordion
  sections={sections}
  expandedIcon={expandedIcon}
  collapsedIcon={collapsedIcon}
  transitionDuration={transitionDuration}
/>`}
        </code>
      </pre>

      <UnpopularAccordion
        sections={sections}
        accordionStyle={{ border: "1px solid #ddd", borderRadius: "8px" }}
        sectionStyle={{ marginBottom: "0px" }}
        headerStyle={{
          backgroundColor: "tomato",
          color: "#fff",
          padding: "10px",
          fontSize: "18px",
        }}
        contentStyle={{ backgroundColor: "#f9f9f9", padding: "10px" }}
        expandedIcon={<span>▲</span>}
        collapsedIcon={<span>▼</span>}
      />

      <div className="flex justify-between mt-5 w-full">
        <UnpopularButton
          style={{ backgroundColor: "#0056b3" }}
          onClick={() => router.push("/unpopular-table")}
        >
          To UnpopularTable
        </UnpopularButton>
        <UnpopularButton onClick={() => router.push("/unpopular-tabs")}>
          To UnpopularTabs
        </UnpopularButton>
      </div>
    </div>
  );
};

export default AccordionDocs;
