import React, { useState } from "react";
import PropTypes from "prop-types";
import "./UnpopularTable.css"; // Make sure to create a CSS file for styling

const UnpopularTable = ({
  columns,
  data,
  striped,
  bordered,
  hover,
  responsive,
  itemsPerPage,
  tableStyle,
  headerStyle,
  rowStyle,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Get the data to display for the current page
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={responsive ? "table-responsive" : ""}>
      <table
        className={`unpopular-table ${striped ? "striped" : ""} ${
          bordered ? "bordered" : ""
        } ${hover ? "hover" : ""}`}
        style={tableStyle}
      >
        <thead>
          <tr style={headerStyle}>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex} style={rowStyle}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex}>
                    {column.render
                      ? column.render(row[column.accessor], row)
                      : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

UnpopularTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
      render: PropTypes.func, // Allow for custom render functions
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.bool,
  itemsPerPage: PropTypes.number,
  tableStyle: PropTypes.object, // Custom table styles
  headerStyle: PropTypes.object, // Custom header styles
  rowStyle: PropTypes.object, // Custom row styles
};

UnpopularTable.defaultProps = {
  striped: false,
  bordered: false,
  hover: false,
  responsive: false,
  itemsPerPage: 10, // Default items per page
  tableStyle: {},
  headerStyle: {},
  rowStyle: {},
};

export default UnpopularTable;
