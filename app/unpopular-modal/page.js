"use client";

import React, { useState } from "react";
import { UnpopularButton, UnpopularModal } from "unpopular-js";
import { useRouter } from "next/navigation";

export default function ModalDocs() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCustom, setIsOpenCustom] = useState(false);
  const [isOpenAnimated, setIsOpenAnimated] = useState(false);
  const [isOpenCustomButton, setIsOpenCustomButton] = useState(false);
  const [isOpenNoCloseButton, setIsOpenNoCloseButton] = useState(false);
  const [isOpenTopPosition, setIsOpenTopPosition] = useState(false);
  const [isOpenBottomPosition, setIsOpenBottomPosition] = useState(false);
  const [isOpenCloseOnClickOutside, setIsOpenCloseOnClickOutside] =
    useState(false);

  const router = useRouter();
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
          color: "#007bff",
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

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Props</h2>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularModal</code> component accepts the following
        properties:
      </p>

      <table
        style={{
          width: "100%",
          border: "1px solid #ccc",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                backgroundColor: "#f2f2f2",
              }}
            >
              Property
            </th>
            <th
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                backgroundColor: "#f2f2f2",
              }}
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              isOpen
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              Determines whether the modal is open or not.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              onClose
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              A function that is called when the modal is closed.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              title
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              The title of the modal.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              children
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              The content of the modal.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              size
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              The size of the modal.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              position
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              The position of the modal.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              backdropColor
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              The color of the modal backdrop.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              titleColor
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              The color of the modal title.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              buttonColor
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              The color of the modal button.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              buttonTextColor
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              The color of the modal button text.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              buttonOnClick
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              The function that is called when the modal button is clicked.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              closeButton
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              Determines whether the close button is shown or not.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              closeOnClickOutside
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              Determines whether the modal is closed when the user clicks
              outside the modal.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              showbutton
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              Determines whether the button is shown or not.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              buttonTitle
            </td>
            <td
              style={{
                padding: "10px",
                border: "1px solid #ccc",
              }}
            >
              The title of the modal button.
            </td>
          </tr>
        </tbody>
      </table>

      <h2 style={{ color: "#007bff", marginTop: "40px", fontSize: "1.5rem" }}>
        Use Cases
      </h2>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>1. Basic Modal</h2>
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
        backdropColor="rgba(0, 0, 0, 0.9)"
        showbutton={false}
      >
        This is a basic modal with a title and content.
      </UnpopularModal>
      <pre
        style={{
          marginTop: "40px",
          fontSize: "14px",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <code>
          {`
<UnpopularModal
  isOpen={isOpen} 
  onClose={toggleModal}
  title="Basic Modal"
  size="medium"
  backdropColor="rgba(0, 0, 0, 0.9)"
  showbutton={false}
>
This is a basic modal

</UnpopularModal>
          `}
        </code>
      </pre>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        2. Modal with Custom Colors
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
        titleColor="#444"
        contentColor="#aaa"
        buttonColor="#ff5722"
        buttonOnClick={() => setIsOpenCustom(false)}
        buttonTextColor="#fff"
      >
        This modal has custom colors for the backdrop, title, content, and
        buttons.
      </UnpopularModal>

      <pre
        style={{
          marginTop: "40px",
          fontSize: "14px",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <code>
          {`  
<UnpopularModal
   isOpen={isOpenCustom}
   onClose={() => setIsOpenCustom(false)}
   title="Custom Color Modal"
   size="large"
   backdropColor="rgba(0, 0, 0, 0.7)"
   titleColor="#444"
   contentColor="#aaa"
   buttonColor="#ff5722"
   buttonOnClick={() => setIsOpenCustom(false)}
   buttonTextColor="#fff"
>
   This modal has custom colors for the backdrop, title, content, and
   buttons.
</UnpopularModal>
          `}
        </code>
      </pre>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        3. Modal with Animation and Position
      </h2>
      <button
        onClick={() => setIsOpenAnimated(true)}
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
        isOpen={isOpenAnimated}
        onClose={() => setIsOpenAnimated(false)}
        title="Animated Modal"
        size="small"
        position="top"
        animation="scale"
        backdropColor="rgba(0, 0, 0, 0.3)"
        buttonColor="#4caf50"
        buttonOnClick={() => setIsOpenAnimated(false)}
      >
        This modal appears with a scale animation and is positioned at the top
        of the screen.
      </UnpopularModal>
      <pre
        style={{
          marginTop: "40px",
          fontSize: "14px",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <code>
          {` 
<UnpopularModal
 isOpen={isOpenAnimated}
 onClose={() => setIsOpenAnimated(false)}
 title="Animated Modal"
 size="small"
 position="top"
 animation="scale"
 backdropColor="rgba(0, 0, 0, 0.3)"
 buttonColor="#4caf50"
 buttonOnClick={() => setIsOpenAnimated(false)}
>
 This modal appears with a scale animation and is positioned at the top
 of the screen.
</UnpopularModal>
          `}
        </code>
      </pre>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        4. Modal with Custom Button
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
      <pre
        style={{
          marginTop: "40px",
          fontSize: "14px",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <code>
          {`
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
            `}
        </code>
      </pre>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        5. Modal without Close Button
      </h2>
      <button
        onClick={() => setIsOpenNoCloseButton(true)}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Open Modal without Close Button
      </button>
      <UnpopularModal
        isOpen={isOpenNoCloseButton}
        onClose={() => setIsOpenNoCloseButton(false)}
        title="No Close Button Modal"
        size="medium"
        closeButton={false}
      >
        This modal does not have a close button.
      </UnpopularModal>
      <pre
        style={{
          marginTop: "40px",
          fontSize: "14px",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <code>
          {`
<UnpopularModal
  isOpen={isOpenNoCloseButton}
  onClose={() => setIsOpenNoCloseButton(false)}
  title="No Close Button Modal"
  size="medium"
  closeButton={false}
>
  This modal does not have a close button.
</UnpopularModal>
            `}
        </code>
      </pre>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        6. Modal Positioned at the Top
      </h2>
      <button
        onClick={() => setIsOpenTopPosition(true)}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Open Top Positioned Modal
      </button>

      <UnpopularModal
        isOpen={isOpenTopPosition}
        onClose={() => setIsOpenTopPosition(false)}
        title="Top Positioned Modal"
        size="medium"
        position="top"
      >
        This modal is positioned at the top of the screen.
      </UnpopularModal>

      <pre
        style={{
          marginTop: "40px",
          fontSize: "14px",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <code>
          {`
<UnpopularModal
  isOpen={isOpenTopPosition}
  onClose={() => setIsOpenTopPosition(false)}
  title="Top Positioned Modal"
  size="medium"
  position="top"
>
  This modal is positioned at the top of the screen.
</UnpopularModal>
`}
        </code>
      </pre>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        7. Modal Positioned at the Bottom
      </h2>
      <button
        onClick={() => setIsOpenBottomPosition(true)}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Open Bottom Positioned Modal
      </button>
      <UnpopularModal
        isOpen={isOpenBottomPosition}
        onClose={() => setIsOpenBottomPosition(false)}
        title="Bottom Positioned Modal"
        size="medium"
        position="bottom"
      >
        This modal is positioned at the bottom of the screen.
      </UnpopularModal>

      <pre
        style={{
          marginTop: "40px",
          fontSize: "14px",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <code>
          {`
<UnpopularModal
  isOpen={isOpenBottomPosition}
  onClose={() => setIsOpenBottomPosition(false)}
  title="Bottom Positioned Modal"
  size="medium"
  position="bottom"
>
  This modal is positioned at the bottom of the screen.
</UnpopularModal>
  `}
        </code>
      </pre>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        8. Modal with Close on Click Outside
      </h2>
      <button
        onClick={() => setIsOpenCloseOnClickOutside(true)}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Open Close on Click Outside Modal
      </button>
      <UnpopularModal
        isOpen={isOpenCloseOnClickOutside}
        onClose={() => setIsOpenCloseOnClickOutside(false)}
        title="Close on Click Outside Modal"
        size="medium"
        closeOnClickOutside={true}
      >
        This modal closes when clicking outside of it.
      </UnpopularModal>

      <pre
        style={{
          marginTop: "40px",
          fontSize: "14px",
          backgroundColor: "#f5f5f5",
          padding: "20px",
        }}
      >
        <code>
          {`
<UnpopularModal
   isOpen={isOpenCloseOnClickOutside}
   onClose={() => setIsOpenCloseOnClickOutside(false)}
   title="Close on Click Outside Modal"
   size="medium"
   closeOnClickOutside={true}
>
   This modal closes when clicking outside of it.
</UnpopularModal>
  `}
        </code>
      </pre>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Conclusion</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        The <code>UnpopularModal</code> component provides a versatile and
        stylish solution for creating modal components. Utilize its
        customization options to enhance user experience with elegant and
        functional toast messages in your React applications.
      </p>

      <div className="flex justify-between mt-5 w-full">
        <UnpopularButton
          style={{ backgroundColor: "#0056b3" }}
          onClick={() => router.push("/unpopular-toast")}
        >
          To UnpopularToast
        </UnpopularButton>
        <UnpopularButton onClick={() => router.push("/unpopular-tooltip")}>
          To UnpopularTooltip
        </UnpopularButton>
      </div>
    </div>
  );
}
