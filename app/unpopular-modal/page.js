"use client";

import React, { useState } from "react";
import UnpopularModal from "../../components/UnpopularModal"; // Adjust the import according to your project structure

export default function ModalDocs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCustom, setIsOpenCustom] = useState(false);
  const [isOpenCustomButton, setIsOpenCustomButton] = useState(false);
  const [isOpenAdnimated, setIsOpenAdnimated] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

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
        UnpopularModal Documentation
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularModal</code> component provides a customizable modal
        dialog box with various options to fit your needs. Below are examples of
        how to use the component in different scenarios.
      </p>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Basic Modal</h2>
      <button
        onClick={toggleModal}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Open Basic Modal
      </button>
      <UnpopularModal
        isOpen={isOpen}
        onClose={toggleModal}
        title="Basic Modal"
        size="medium"
      >
        This is a basic modal with a title and content.
      </UnpopularModal>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        Modal with Custom Colors
      </h2>
      <button
        onClick={() => setIsOpenCustom(true)}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Open Custom Color Modal
      </button>
      <UnpopularModal
        isOpen={isOpenCustom}
        onClose={() => setIsOpenCustom(false)}
        title="Custom Color Modal"
        size="large"
        backdropColor="rgba(0, 0, 0, 0.7)"
        titleColor="#fff"
        contentColor="#ddd"
        buttonColor="#ff5722"
        buttonTextColor="#fff"
      >
        This modal has custom colors for the backdrop, title, content, and
        buttons.
      </UnpopularModal>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        Modal with Animation and Position
      </h2>
      <button
        onClick={() => setIsOpenAdnimated(true)}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Open Animated Modal
      </button>
      <UnpopularModal
        isOpen={isOpenAdnimated}
        onClose={() => setIsOpenAdnimated(false)}
        title="Animated Modal"
        size="small"
        position="top"
        animation="scale"
        backdropColor="rgba(0, 0, 0, 0.3)"
        buttonColor="#4caf50"
      >
        This modal appears with a scale animation and is positioned at the top
        of the screen.
      </UnpopularModal>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        Modal with Custom Button
      </h2>
      <button
        onClick={() => setIsOpenCustomButton(true)}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Open Custom Button Modal
      </button>
      <UnpopularModal
        isOpen={isOpenCustomButton}
        onClose={() => setIsOpenCustomButton(false)}
        title="Custom Button Modal"
        size="medium"
        buttonColor="#ff5722"
        buttonTextColor="#fff"
        closeButton={false}
      >
        This modal has a custom button color and hides the default close button.
      </UnpopularModal>
    </div>
  );
}
