import React from 'react';
import '../Style/SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default SearchBar;
