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
        Installation Guide
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        Follow these steps to install and use the <code>UnpopularButton</code>{" "}
        component in your React project.
      </p>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        Step 1: Install the Package
      </h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        Run the following command to install the <code>unpopular-js</code>{" "}
        package using npm:
      </p>
      <pre
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px",
          borderRadius: "4px",
          overflow: "auto",
        }}
      >
        <code>{`npm install unpopular-js`}</code>
      </pre>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        If you are using Yarn, run:
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
          To Unpopular Button
        </UnpopularButton>
      </div>
    </div>
  );
}
