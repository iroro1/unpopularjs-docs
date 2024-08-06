"use client";

import { useRouter } from "next/navigation";
import { UnpopularButton } from "unpopular-js";

export default function Home() {
  const router = useRouter();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#f4f4f4", // Light background for better readability
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          color: "#333",
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "36px",
          fontWeight: "bold",
        }}
      >
        Installation Guide for Unpopular JS
      </h1>

      <section>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Welcome to <strong>Unpopular JS</strong>, a modern and customizable UI
          component library for React. Our library aims to provide a simple yet
          elegant set of components to enhance your web applications. Currently,
          our library features the <code>UnpopularButton</code> component,
          designed to be flexible and stylish, fitting seamlessly into your
          React projects. Its first version was created on the 5th of August
          2024
        </p>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
          Follow the steps below to get started with the{" "}
          <code>UnpopularButton</code> component and see how it can be used in
          your application.
        </p>
      </section>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        Install the Package
      </h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        To add the <code>unpopular-js</code> package to your React project, use
        npm or Yarn. Here’s how you can install it:
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
        <code>{`npm install unpopular-js`}</code>
      </pre>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        Alternatively, if you are using Yarn, run:
      </p>
      <pre
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px",
          borderRadius: "4px",
          overflow: "auto",
        }}
      >
        <code>{`yarn add unpopular-js`}</code>
      </pre>

      <div className="flex justify-end mt-5">
        <UnpopularButton onClick={() => router.push("/unpopular-button")}>
          To UnpopularButton
        </UnpopularButton>
      </div>
    </div>
  );
}
