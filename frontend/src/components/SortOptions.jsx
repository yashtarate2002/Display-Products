import React from 'react';
import '../Style/SortOptions.css';

const SortOptions = ({ sortCriteria, onSortChange }) => {
  return (
    <select value={sortCriteria} onChange={onSortChange}>
      <option value="name">Name</option>
      <option value="price">Price</option>
      <option value="rating">Rating</option>
    </select>
  );
};

export default SortOptions;
