import React from 'react';
import './List.css';

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
  return (
    <div className="first-container">

      <h1>Counter List App</h1>

      <div className="counter-card">
        <h2>Counter</h2>
        <div className="counter-controls">
          <button onClick={decrementCount} aria-label="Decrease count">-</button>
          <span>{count}</span>
          <button onClick={incrementCount} aria-label="Increase count">+</button>
        </div>
        <button className="add-btn" onClick={() => addNumber(count)}>Add to List</button>
      </div>

      <div className="list-card">
        <div className="min-max-row">
          <span>Min: {min !== undefined ? min : '-'}</span> | <span>Max: {max !== undefined ? max : '-'}</span>
        </div>

        <h2>Numbers List</h2>

        <div className="action-row">
          <button className="reset-btn" onClick={clearList}>Reset</button>
          <button className="sort-desc-btn" onClick={sortDescending}>Sort ↓</button>
          <button className="sort-asc-btn" onClick={sortAscending}>Sort ↑</button>
        </div>

        <ul>
          {listArray.length ? (
            listArray.map((num, i) => (
              <li key={{num}}>
                <span>{num}</span>
                <span>#{i + 1}</span>
                <button onClick={() => deleteNumber(num)} aria-label={`Remove ${num}`}>x</button>
              </li>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#888' }}>click add to start adding</p>
          )}
        </ul>

        <p className="total-numbers">Total numbers: {listArray.length}</p>
      </div>
    </div>
  );
}

export default ListView;
