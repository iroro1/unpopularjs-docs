"use client";

import React from "react";
import UnpopularTooltip from "../../components/UnpopularTooltip"; // Adjust the import according to your project structure

export default function TooltipDocs() {
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
        UnpopularTooltip Documentation
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularTooltip</code> component provides a customizable
        tooltip with various options. Below are examples showcasing different
        configurations and use cases.
      </p>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Basic Tooltip</h2>
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
      </div>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        Tooltip with Custom Colors
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
      </div>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        Tooltip with Slide Animation
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
      </div>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        Tooltip with Custom Delay
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
      </div>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        Tooltip on Different Sides
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
    </div>
  );
}
