"use client";
import React, { useState } from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { UnpopularButton, UnpopularToast } from "unpopular-js";
import { useRouter } from "next/navigation";

export default function ToastDocs() {
  const [toast, setToast] = useState(null);
  const [toastType, setToastType] = useState("info");
  const [toastPosition, setToastPosition] = useState("top-right");
  const [toastAnimation, setToastAnimation] = useState("fade");
  const [toastColor, setToastColor] = useState("#007bff");
  const [textColor, setTextColor] = useState("#fff");
  const [icon, setIcon] = useState(null);
  const router = useRouter();
  const showToast = (
    type,
    position,
    animation,
    backgroundColor,
    textColor,
    icon
  ) => {
    setToastType(type);
    setToastPosition(position);
    setToastAnimation(animation);
    setToastColor(backgroundColor);
    setTextColor(textColor);
    setIcon(icon);
    setToast({
      message: `This is a ${type} toast message!`,
      type: type,
      duration: 5000,
      backgroundColor: backgroundColor,
      textColor: textColor,
      icon: icon,
      position: position,
      animation: animation,
    });
    setTimeout(() => setToast(null), 5000); // Hide toast after duration
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#007bff",
        }}
      >
        UnpopularToast Component Documentation
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularToast</code> component is a versatile and
        customizable notification system for React. Explore the various options
        available to tailor your toasts to fit your application's design and
        functionality needs.
      </p>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Basic Usage</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        To use the <code>UnpopularToast</code> component, import it and include
        it in your component. Below is a simple usage example:
      </p>
      <pre
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px",
          borderRadius: "4px",
          overflow: "auto",
          marginBottom: "20px",
        }}
      >
        <code>{`import UnpopularToast from 'unpopular-js';
// Usage in your component
<UnpopularToast
  message="This is a basic toast notification!"
  type="info"
  duration={5000}
  onClose={() => console.log('Toast closed')}
/>`}</code>
      </pre>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        Customization Options
      </h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        Customize the <code>UnpopularToast</code> component with the following
        props:
      </p>
      <ul style={{ fontSize: "16px", lineHeight: "1.6" }}>
        <li>
          <strong>message</strong>: The text message to display in the toast.
        </li>
        <li>
          <strong>type</strong>: The type of toast. Options are{" "}
          <code>'success'</code>, <code>'error'</code>, and <code>'info'</code>.
          Default is <code>'info'</code>.
        </li>
        <li>
          <strong>duration</strong>: Duration (in milliseconds) before the toast
          auto-hides. Default is 5000ms.
        </li>
        <li>
          <strong>onClose</strong>: Callback function triggered when the toast
          is closed.
        </li>
        <li>
          <strong>backgroundColor</strong>: Background color of the toast. Can
          be any valid CSS color value.
        </li>
        <li>
          <strong>textColor</strong>: Text color of the toast. Can be any valid
          CSS color value.
        </li>
        <li>
          <strong>icon</strong>: Icon to display inside the toast. Can be a
          React element.
        </li>
        <li>
          <strong>position</strong>: Position of the toast on the screen.
          Options are <code>'top-left'</code>, <code>'top-right'</code>,{" "}
          <code>'bottom-left'</code>, and <code>'bottom-right'</code>. Default
          is <code>'top-right'</code>.
        </li>
        <li>
          <strong>animation</strong>: Animation effect for the toast. Options
          are <code>'fade'</code> and <code>'slide'</code>. Default is{" "}
          <code>'fade'</code>.
        </li>
      </ul>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Example Usages</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{ color: "#007bff", fontSize: "24px", marginBottom: "10px" }}
          >
            Success Toast
          </h3>
          <button
            onClick={() =>
              showToast(
                "success",
                "top-right",
                "fade",
                "#28a745",
                "#fff",
                <FaCheckCircle />
              )
            }
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              color: "#fff",
              backgroundColor: "#28a745",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Show Success Toast
          </button>
          {toast && toastType === "success" && (
            <UnpopularToast
              message={toast.message}
              type={toast.type}
              duration={toast.duration}
              onClose={() => setToast(null)}
              backgroundColor={toast.backgroundColor}
              textColor={toast.textColor}
              icon={toast.icon}
              position={toast.position}
              animation={toast.animation}
            />
          )}
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{ color: "#007bff", fontSize: "24px", marginBottom: "10px" }}
          >
            Error Toast
          </h3>
          <button
            onClick={() =>
              showToast(
                "error",
                "bottom-left",
                "slide",
                "#dc3545",
                "#fff",
                <FaExclamationCircle />
              )
            }
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              color: "#fff",
              backgroundColor: "#dc3545",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Show Error Toast
          </button>
          {toast && toastType === "error" && (
            <UnpopularToast
              message={toast.message}
              type={toast.type}
              duration={toast.duration}
              onClose={() => setToast(null)}
              backgroundColor={toast.backgroundColor}
              textColor={toast.textColor}
              icon={toast.icon}
              position={toast.position}
              animation={toast.animation}
            />
          )}
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{ color: "#007bff", fontSize: "24px", marginBottom: "10px" }}
          >
            Info Toast
          </h3>
          <button
            onClick={() =>
              showToast(
                "info",
                "top-left",
                "fade",
                "#17a2b8",
                "#fff",
                <FaInfoCircle />
              )
            }
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              color: "#fff",
              backgroundColor: "#17a2b8",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Show Info Toast
          </button>
          {toast && toastType === "info" && (
            <UnpopularToast
              message={toast.message}
              type={toast.type}
              duration={toast.duration}
              onClose={() => setToast(null)}
              backgroundColor={toast.backgroundColor}
              textColor={toast.textColor}
              icon={toast.icon}
              position={toast.position}
              animation={toast.animation}
            />
          )}
        </div>
      </div>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        Advanced Customization
      </h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        For more complex scenarios, you can further customize the{" "}
        <code>UnpopularToast</code> component to fit your design preferences and
        application needs. Combine it with state management and other UI
        components to create dynamic notifications.
      </p>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Conclusion</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        The <code>UnpopularToast</code> component provides a versatile and
        stylish solution for displaying notifications. Utilize its customization
        options to enhance user experience with elegant and functional toast
        messages in your React applications.
      </p>

      <div className="flex justify-between mt-5 w-full">
        <UnpopularButton
          style={{ backgroundColor: "#0056b3" }}
          onClick={() => router.push("/unpopular-select")}
        >
          To UnpopularSelect
        </UnpopularButton>
        <UnpopularButton onClick={() => router.push("/unpopular-modal")}>
          To UnpopularModal
        </UnpopularButton>
      </div>
    </div>
  );
}
