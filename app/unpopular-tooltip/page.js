"use client";

import React from "react";
import { UnpopularButton, UnpopularTooltip } from "unpopular-js";
import { useRouter } from "next/navigation";

export default function TooltipDocs() {
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
        UnpopularTooltip Documentation
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularTooltip</code> component provides a customizable
        tooltip with various options. Below are examples showcasing different
        configurations and use cases.
      </p>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Props</h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularTooltip</code> component accepts the following props:
      </p>

      <table style={{ width: "100%" }}>
        <thead style={{ backgroundColor: "#f5f5f5" }}>
          <tr
            style={{
              backgroundColor: "#f5f5f5",
              color: "#333",
              fontWeight: "bold",
              fontSize: "16px",
              padding: "10px 0",
              textAlign: "left",
              borderBottom: "1px solid #ddd",
            }}
          >
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody style={{ fontSize: "16px" }}>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              padding: "15px",
              textAlign: "left",
              color: "#333",
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "1.6",
              verticalAlign: "top",
            }}
          >
            <td>content</td>
            <td>string</td>
            <td>The content of the tooltip.</td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              padding: "15px",
              textAlign: "left",
              color: "#333",
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "1.6",
              verticalAlign: "top",
            }}
          >
            <td>backgroundColor</td>
            <td>string</td>
            <td>The background color of the tooltip.</td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              padding: "15px",
              textAlign: "left",
              color: "#333",
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "1.6",
              verticalAlign: "top",
            }}
          >
            <td>color</td>
            <td>string</td>
            <td>The text color of the tooltip.</td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              padding: "15px",
              textAlign: "left",
              color: "#333",
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "1.6",
              verticalAlign: "top",
            }}
          >
            <td>borderRadius</td>
            <td>string</td>
            <td>The border radius of the tooltip.</td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              padding: "15px",
              textAlign: "left",
              color: "#333",
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "1.6",
              verticalAlign: "top",
            }}
          >
            <td>padding</td>
            <td>string</td>
            <td>The padding of the tooltip.</td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              padding: "15px",
              textAlign: "left",
              color: "#333",
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "1.6",
              verticalAlign: "top",
            }}
          >
            <td>children</td>
            <td>ReactNode</td>
            <td>The content of the tooltip.</td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              padding: "15px",
              textAlign: "left",
              color: "#333",
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "1.6",
              verticalAlign: "top",
            }}
          >
            <td>animation</td>
            <td>string</td>
            <td>The animation of the tooltip.</td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              padding: "15px",
              textAlign: "left",
              color: "#333",
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "1.6",
              verticalAlign: "top",
            }}
          >
            <td>delay</td>
            <td>number</td>
            <td>The delay of the tooltip.</td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              padding: "15px",
              textAlign: "left",
              color: "#333",
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "1.6",
              verticalAlign: "top",
            }}
          >
            <td>position</td>
            <td>string</td>
            <td>
              The position of the tooltip (&ldquo;top&ldquo;,
              &ldquo;bottom&ldquo;, &ldquo;left&ldquo;, &ldquo;right&ldquo;).
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              padding: "15px",
              textAlign: "left",
              color: "#333",
              fontSize: "14px",
              fontWeight: "normal",
              lineHeight: "1.6",
              verticalAlign: "top",
            }}
          >
            <td>fontSize</td>
            <td>string</td>
            <td>The font size of the tooltip.</td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ color: "#007bff", marginTop: "40px", fontSize: "24px" }}>
        Usage Examples
      </h2>
      <h2 style={{ color: "#007bff", marginTop: "10px" }}> 1. Basic Tooltip</h2>
      <div style={{ margin: "20px 0" }}>
        <UnpopularTooltip content="This is a basic tooltip">
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Hover over me
          </button>
        </UnpopularTooltip>
        <pre
          style={{
            marginTop: "10px",
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "1.6",
            verticalAlign: "top",
            backgroundColor: "#f8f9fa",
            borderRadius: "4px",
            padding: "10px",
            color: "#333",
            overflow: "auto",
          }}
        >
          <code>{`<UnpopularTooltip content="This is a basic tooltip">
  <button
    style={{
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      cursor: "pointer",
    }}
  >
    Hover over me 
  </button>
</UnpopularTooltip>`}</code>
        </pre>
      </div>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        2. Tooltip with Custom Colors
      </h2>
      <div style={{ margin: "20px 0" }}>
        <UnpopularTooltip
          content="Custom colors tooltip"
          backgroundColor="#333"
          color="#fff"
          borderRadius="8px"
          padding="12px"
        >
          <button
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Hover over me
          </button>
        </UnpopularTooltip>
        <pre
          style={{
            marginTop: "10px",
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "1.6",
            verticalAlign: "top",
            backgroundColor: "#f8f9fa",
            borderRadius: "4px",
            padding: "10px",
            color: "#333",
            overflow: "auto",
          }}
        >
          <code>{`<UnpopularTooltip
  content="Custom colors tooltip"
  backgroundColor="#333"
  color="#fff"
  borderRadius="8px"
  padding="12px"
>
  <button
    style={{
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      cursor: "pointer",
    }}
  >
    Hover over me
  </button>
</UnpopularTooltip>`}</code>
        </pre>
      </div>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        3. Tooltip with Slide Animation
      </h2>
      <div style={{ margin: "20px 0" }}>
        <UnpopularTooltip
          content="Slide animation tooltip"
          animation="slide"
          position="bottom"
        >
          <button
            style={{
              backgroundColor: "#dc3545",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Hover over me
          </button>
        </UnpopularTooltip>
        <pre
          style={{
            marginTop: "10px",
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "1.6",
            verticalAlign: "top",
            backgroundColor: "#f8f9fa",
            borderRadius: "4px",
            padding: "10px",
            color: "#333",
            overflow: "auto",
          }}
        >
          <code>{`<UnpopularTooltip
  content="Slide animation tooltip"
  animation="slide"
  position="bottom"
>
  <button
    style={{
      backgroundColor: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      cursor: "pointer",
    }}
  >
    Hover over me
  </button>
</UnpopularTooltip>`}</code>
        </pre>
      </div>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        4. Tooltip with Custom Delay
      </h2>
      <div style={{ margin: "20px 0" }}>
        <UnpopularTooltip content="Tooltip with delay" delay={500}>
          <button
            style={{
              backgroundColor: "#ffc107",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Hover over me
          </button>
        </UnpopularTooltip>
        <pre
          style={{
            marginTop: "10px",
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "1.6",
            verticalAlign: "top",
            backgroundColor: "#f8f9fa",
            borderRadius: "4px",
            padding: "10px",
            color: "#333",
            overflow: "auto",
          }}
        >
          <code>{`<UnpopularTooltip content="Tooltip with delay" delay={500}>
  <button
    style={{
      backgroundColor: "#ffc107",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      cursor: "pointer",
    }}
  >
    Hover over me
  </button>
</UnpopularTooltip>`}</code>
        </pre>
      </div>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        5. Tooltip on Different Sides
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "20px 0",
        }}
      >
        <UnpopularTooltip content="Tooltip on top" position="top">
          <button
            style={{
              backgroundColor: "#17a2b8",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Top
          </button>
        </UnpopularTooltip>
        <UnpopularTooltip content="Tooltip on bottom" position="bottom">
          <button
            style={{
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Bottom
          </button>
        </UnpopularTooltip>
        <UnpopularTooltip content="Tooltip on left" position="left">
          <button
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Left
          </button>
        </UnpopularTooltip>
        <UnpopularTooltip content="Tooltip on right" position="right">
          <button
            style={{
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Right
          </button>
        </UnpopularTooltip>
      </div>

      <pre
        style={{
          marginTop: "10px",
          fontSize: "14px",
          fontWeight: "normal",
          lineHeight: "1.6",
          verticalAlign: "top",
          backgroundColor: "#f8f9fa",
          borderRadius: "4px",
          padding: "10px",
          color: "#333",
          overflow: "auto",
        }}
      >
        <code>{`<UnpopularTooltip content="Tooltip on top" position="top">
  <button
    style={{
      backgroundColor: "#17a2b8",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      cursor: "pointer",
    }}
  >
    Top
  </button>
</UnpopularTooltip>

<UnpopularTooltip content="Tooltip on bottom" position="bottom">
  <button
    style={{
      backgroundColor: "#6c757d",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      cursor: "pointer",
    }}
  >
    Bottom
  </button>
</UnpopularTooltip> 

<UnpopularTooltip content="Tooltip on left" position="left">
  <button
    style={{
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      cursor: "pointer",
    }}
  >
    Left
  </button>
</UnpopularTooltip>

<UnpopularTooltip content="Tooltip on right" position="right">
  <button
    style={{
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      padding: "10px 20px",
      cursor: "pointer",
    }}
  >
    Right
  </button>
</UnpopularTooltip>`}</code>
      </pre>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Conclusion</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        The <code>UnpopularTooltip</code> component provides a versatile and
        stylish solution for displaying tooltips. Utilize its customization
        options to enhance user experience with elegant and functional toast
        messages in your React applications.
      </p>

      <div className="flex justify-between mt-5 w-full">
        <UnpopularButton
          style={{ backgroundColor: "#0056b3" }}
          onClick={() => router.push("/unpopular-modal")}
        >
          To UnpopularModal
        </UnpopularButton>
        <UnpopularButton onClick={() => router.push("/unpopular-table")}>
          To UnpopularTable
        </UnpopularButton>
      </div>
    </div>
  );
}
