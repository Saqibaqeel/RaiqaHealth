import React from "react";
import "./List.css";
function ListView({
  count,
  incrementCount,
  decrementCount,
  addNumber,
  listArray,
  clearList,
  sortAscending,
  sortDescending,
  deleteNumber,
  min,
  max,
}) {
  const hasNumbers = listArray.length > 0;

  return (
    <div className="first-container">
      <h1>Counter List App</h1>

      {/* Counter Section */}
      <div className="counter-card">
        <h2>Counter</h2>
        <div className="counter-controls">
          <button
            onClick={decrementCount}
            aria-label="Decrease count"
            className="counter-btn"
          >
            –
          </button>
          <span className="counter-value">{count}</span>
          <button
            onClick={incrementCount}
            aria-label="Increase count"
            className="counter-btn"
          >
            +
          </button>
        </div>
        <button
          className="add-btn"
          onClick={() => addNumber(count)}
          disabled={count === ""}
        >
          Add to List
        </button>
      </div>

      {/* Numbers List Section */}
      <div className="list-card">
        <div className="min-max-row">
          <span>Min: {min ?? "-"}</span>
          <span> | </span>
          <span>Max: {max ?? "-"}</span>
        </div>

        <h2>Numbers List</h2>

        {/* List Actions */}
        <div className="action-row">
          <button className="reset-btn" onClick={clearList}>
            Reset
          </button>
          <button className="sort-desc-btn" onClick={sortDescending}>
            Sort ↓
          </button>
          <button className="sort-asc-btn" onClick={sortAscending}>
            Sort ↑
          </button>
        </div>

        {/* List Items */}
        {hasNumbers ? (
          <ul>
            {listArray.map((num, i) => (
              <li key={`${num}-${i}`} className="list-item">
                <span>{num}</span>
                <span className="item-index">#{i + 1}</span>
                <button
                  onClick={() => deleteNumber(num)}
                  aria-label={`Remove ${num}`}
                  className="delete-btn"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-message">
            Click Add to  to start adding numbers.
          </p>
        )}

        <p className="total-numbers">
          Total numbers: {listArray.length}
        </p>
      </div>
    </div>
  );
}

export default ListView;
