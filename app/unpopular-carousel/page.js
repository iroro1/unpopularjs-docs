"use client";
import React from "react";
import { UnpopularButton, UnpopularCarousel } from "unpopular-js";
import { useRouter } from "next/navigation";

const items = [
  <div
    key={1}
    style={{
      backgroundColor: "#ff9999",
      height: "300px",
      minWidth: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Slide 1
  </div>,
  <div
    key={2}
    style={{
      backgroundColor: "#99ff99",
      height: "300px",
      minWidth: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Slide 2
  </div>,
  <div
    key={3}
    style={{
      backgroundColor: "#9999ff",
      height: "300px",
      minWidth: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    Slide 3
  </div>,
];

const CarouselDocs = () => {
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
        UnpopularCarousel Documentation
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularCarousel</code> component allows you to create a
        modern and stylish carousel with various customization options.
      </p>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Basic Usage</h2>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`const items = [
  <div style={{ backgroundColor: '#ff9999', height: '300px' }}>Slide 1</div>,
  <div style={{ backgroundColor: '#99ff99', height: '300px' }}>Slide 2</div>,
  <div style={{ backgroundColor: '#9999ff', height: '300px' }}>Slide 3</div>,
];

// Usage
<UnpopularCarousel items={items} />`}
        </code>
      </pre>
      <UnpopularCarousel key={items} items={items} />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Custom Styles</h2>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`const containerStyle = { borderRadius: '10px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' };
const itemStyle = { padding: '20px', fontSize: '18px' };
const activeItemStyle = { transform: 'scale(1.05)' };
const navigationStyle = { backgroundColor: 'rgba(0, 0, 0, 0.5)' };
const indicatorStyle = { backgroundColor: 'rgba(0, 0, 0, 0.3)' };
const indicatorActiveStyle = { backgroundColor: '#007bff' };

// Usage
<UnpopularCarousel
  items={items}
  containerStyle={containerStyle}
  itemStyle={itemStyle}
  activeItemStyle={activeItemStyle}
  navigationStyle={navigationStyle}
  indicatorStyle={indicatorStyle}
  indicatorActiveStyle={indicatorActiveStyle}
  autoplay
  autoplayInterval={5000}
/>`}
        </code>
      </pre>
      <UnpopularCarousel
        items={items}
        containerStyle={{
          borderRadius: "10px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
        itemStyle={{ padding: "20px", fontSize: "18px", width: "100vw" }}
        activeItemStyle={{ transform: "scale(1.05)" }}
        navigationStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        indicatorStyle={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        indicatorActiveStyle={{ backgroundColor: "#007bff" }}
        autoplay
        autoplayInterval={5000}
      />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Conclusion</h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        In this example, we have provided various customization options for the
        <code>UnpopularCarousel</code> component. You can customize the
        container style, item style, active item style, navigation style,
        indicator style, indicator active style, autoplay, and autoplay
        interval. You can also add additional features such as lazy loading,
        infinite scrolling, and more.
      </p>

      <div className="flex justify-between mt-5 w-full">
        <UnpopularButton
          style={{ backgroundColor: "#0056b3" }}
          onClick={() => router.push("/unpopular-tabs")}
        >
          To UnpopularTabs
        </UnpopularButton>
        <UnpopularButton onClick={() => router.push("/unpopular-date-picker")}>
          To UnpopularDatePicker
        </UnpopularButton>
      </div>
    </div>
  );
};

export default CarouselDocs;
