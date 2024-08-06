"use client";

import React from "react";
import { UnpopularButton, UnpopularTable } from "unpopular-js";
import { useRouter } from "next/navigation";

const tableData = [
  { name: "John Doe", age: 28, email: "john.doe@example.com" },
  { name: "Jane Smith", age: 34, email: "jane.smith@example.com" },
  { name: "Sam Johnson", age: 23, email: "sam.johnson@example.com" },
  { name: "Chris Lee", age: 45, email: "chris.lee@example.com" },
  { name: "Patricia Brown", age: 31, email: "patricia.brown@example.com" },
  { name: "Michael Davis", age: 27, email: "michael.davis@example.com" },
  { name: "Jessica Garcia", age: 29, email: "jessica.garcia@example.com" },
  { name: "Daniel Martinez", age: 33, email: "daniel.martinez@example.com" },
  { name: "Laura Hernandez", age: 38, email: "laura.hernandez@example.com" },
  { name: "David Wilson", age: 41, email: "david.wilson@example.com" },
];

const tableColumns = [
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
  { header: "Email", accessor: "email" },
  {
    header: "Custom Cell",
    accessor: "custom",
    render: () => <span style={{ color: "red" }}> Custom Cell </span>,
  },
];

const TableDocs = () => {
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
        UnpopularTable Documentation
      </h1>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularTable</code> component provides a flexible and
        responsive table with various customization options. Below are examples
        of how to use the component in different scenarios.
      </p>

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Props</h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        The <code>UnpopularTable</code> component has the following props:
      </p>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <thead
          style={{
            backgroundColor: "#f2f2f2",
            borderBottom: "2px solid #ddd",
            textAlign: "left",
            padding: "10px",
            color: "#333",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          <tr>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
              }}
            >
              Prop
            </th>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
              }}
            >
              Description
            </th>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                borderBottom: "1px solid #ddd",
              }}
            >
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              fontSize: "14px",
              fontWeight: "normal",
              color: "#666",
              padding: "10px",
              textAlign: "left",
              backgroundColor: "#fff",
            }}
          >
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              columns
            </td>
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              An array of objects, each containing a header and an accessor
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Array
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              fontSize: "14px",
              fontWeight: "normal",
              color: "#666",
              padding: "10px",
              textAlign: "left",
              backgroundColor: "#fff",
            }}
          >
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              data
            </td>
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              An array of objects where each object represents a row in the
              table
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Array
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              fontSize: "14px",
              fontWeight: "normal",
              color: "#666",
              padding: "10px",
              textAlign: "left",
              backgroundColor: "#fff",
            }}
          >
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              bordered
            </td>
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              A boolean indicating whether the table should be bordered
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Boolean
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              fontSize: "14px",
              fontWeight: "normal",
              color: "#666",
              padding: "10px",
              textAlign: "left",
              backgroundColor: "#fff",
            }}
          >
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              hover
            </td>
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              A boolean indicating whether the table should be hoverable
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Boolean
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              fontSize: "14px",
              fontWeight: "normal",
              color: "#666",
              padding: "10px",
              textAlign: "left",
              backgroundColor: "#fff",
            }}
          >
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              striped
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              A boolean indicating whether the table should be striped
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Boolean
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              fontSize: "14px",
              fontWeight: "normal",
              color: "#666",
              padding: "10px",
              textAlign: "left",
              backgroundColor: "#fff",
            }}
          >
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              headerStyle
            </td>

            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              An object containing style properties for the table header
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Object
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              fontSize: "14px",
              fontWeight: "normal",
              color: "#666",
              padding: "10px",
              textAlign: "left",
              backgroundColor: "#fff",
            }}
          >
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              rowStytle
            </td>

            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              An object containing style properties for the table row
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Object
            </td>
          </tr>
          <tr
            style={{
              borderBottom: "1px solid #ddd",
              fontSize: "14px",
              fontWeight: "normal",
              color: "#666",
              padding: "10px",
              textAlign: "left",
              backgroundColor: "#fff",
            }}
          >
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              tableStyle
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              An object containing style properties for the table
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Object
            </td>
          </tr>

          <tr
            style={{
              borderBottom: "1px solid #ddd",
              fontSize: "14px",
              fontWeight: "normal",
              color: "#666",
              padding: "10px",
              textAlign: "left",
              backgroundColor: "#fff",
            }}
          >
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              responsive
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              A boolean indicating whether the table should be responsive
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Boolean
            </td>
          </tr>

          <tr
            style={{
              borderBottom: "1px solid #ddd",
              fontSize: "14px",
              fontWeight: "normal",
              color: "#666",
              padding: "10px",
              textAlign: "left",
              backgroundColor: "#fff",
            }}
          >
            <td
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              itemsPerPage
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              The number of items to display per page
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
              Number
            </td>
          </tr>
        </tbody>
      </table>

      <h2
        style={{
          color: "#007bff",
          marginTop: "40px",
          fontSize: "28px",
          lineHeight: "1.6",
        }}
      >
        Basic Usage
      </h2>
      <h2 style={{ color: "#007bff", marginTop: "40px" }}>1. Basic Table</h2>

      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        To create a basic table, you need to provide the <code>columns</code>{" "}
        and <code>data</code> props. The <code>columns</code> prop is an array
        of objects, each containing a <code>header</code> and an{" "}
        <code>accessor</code>. The <code>data</code> prop is an array of objects
        where each object represents a row in the table.
      </p>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`const columns = [
  { header: "Name", accessor: "name" },
  { header: "Age", accessor: "age" },
  { header: "Email", accessor: "email" },
];

const data = [
  { name: "John Doe", age: 28, email: "john.doe@example.com" },
  { name: "Jane Smith", age: 34, email: "jane.smith@example.com" },
  { name: "Sam Johnson", age: 23, email: "sam.johnson@example.com" },
];

// Usage
<UnpopularTable columns={columns} data={data} />`}
        </code>
      </pre>
      <UnpopularTable columns={tableColumns} data={tableData} />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>2. Striped Table</h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        You can create a striped table by setting the <code>striped</code> prop
        to <code>true</code>. This will alternate the background color of the
        rows for better readability.
      </p>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`<UnpopularTable columns={columns} data={data} striped />`}
        </code>
      </pre>
      <UnpopularTable columns={tableColumns} data={tableData} striped />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>3. Bordered Table</h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        To add borders to your table, use the <code>bordered</code> prop.
      </p>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`<UnpopularTable columns={columns} data={data} bordered />`}
        </code>
      </pre>
      <UnpopularTable columns={tableColumns} data={tableData} bordered />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        4. Hoverable Table
      </h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        To highlight rows when hovered over, set the <code>hover</code> prop to{" "}
        <code>true</code>.
      </p>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>{`<UnpopularTable columns={columns} data={data} hover />`}</code>
      </pre>
      <UnpopularTable columns={tableColumns} data={tableData} hover />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        5. Responsive Table
      </h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        For a responsive table that scrolls horizontally on smaller screens, use
        the <code>responsive</code> prop.
      </p>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`<UnpopularTable columns={columns} data={data} responsive />`}
        </code>
      </pre>
      <UnpopularTable columns={tableColumns} data={tableData} responsive />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>6. Custom Styles</h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        You can apply custom styles to the table, headers, and rows by using the{" "}
        <code>tableStyle</code>, <code>headerStyle</code>, and{" "}
        <code>rowStyle</code> props.
      </p>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`const tableStyle = {
  backgroundColor: '#fff',
  color: '#333',
};

const headerStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
};

const rowStyle = {
  backgroundColor: '#f9f9f9',
};

// Usage
<UnpopularTable
  columns={columns}
  data={data}
  tableStyle={tableStyle}
  headerStyle={headerStyle}
  rowStyle={rowStyle}
/>`}
        </code>
      </pre>
      <UnpopularTable
        columns={tableColumns}
        data={tableData}
        tableStyle={{ backgroundColor: "#fff", color: "#333" }}
        headerStyle={{ backgroundColor: "#007bff", color: "#fff" }}
        rowStyle={{ backgroundColor: "#f9f9f9" }}
      />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>7. Pagination</h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        To add pagination to your table, use the <code>itemsPerPage</code> prop
        to specify the number of items per page.
      </p>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`<UnpopularTable columns={columns} data={data} itemsPerPage={5} />`}
        </code>
      </pre>
      <UnpopularTable
        columns={tableColumns}
        data={tableData}
        itemsPerPage={5}
      />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>
        8. Combining Props
      </h2>
      <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
        You can combine multiple props to achieve the desired table appearance.
      </p>
      <pre
        style={{
          backgroundColor: "#f8f8f8",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <code>
          {`<UnpopularTable
  columns={columns}
  data={data}
  striped
  bordered
  hover
  responsive
  itemsPerPage={5}
  tableStyle={{ backgroundColor: '#fff', color: '#333' }}
  headerStyle={{ backgroundColor: '#007bff', color: '#fff' }}
  rowStyle={{ backgroundColor: '#f9f9f9' }}
/>`}
        </code>
      </pre>
      <UnpopularTable
        columns={tableColumns}
        data={tableData}
        striped
        bordered
        hover
        responsive
        itemsPerPage={5}
        tableStyle={{ backgroundColor: "#fff", color: "#333" }}
        headerStyle={{ backgroundColor: "#007bff", color: "#fff" }}
        rowStyle={{ backgroundColor: "#f9f9f9" }}
      />

      <h2 style={{ color: "#007bff", marginTop: "40px" }}>Conclusion</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        The <code>UnpopularTable</code> component provides a versatile and
        stylish solution for building responsive tables. Utilize its
        customization options to enhance user experience with elegant and
        functional toast messages in your React applications.
      </p>

      <div className="flex justify-between mt-5 w-full">
        <UnpopularButton
          style={{ backgroundColor: "#0056b3" }}
          onClick={() => router.push("/unpopular-tooltip")}
        >
          To UnpopularTooltip
        </UnpopularButton>
        <UnpopularButton onClick={() => router.push("/unpopular-accordion")}>
          To UnpopularAccordion
        </UnpopularButton>
      </div>
    </div>
  );
};

export default TableDocs;
