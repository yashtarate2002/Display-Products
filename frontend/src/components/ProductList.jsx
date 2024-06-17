import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import '../Style/ProductList.css';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState('name');
  const [visibleProducts, setVisibleProducts] = useState(8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); 
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const handleLoadMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 8);
  };

  const filteredProducts = products
    .filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortCriteria === 'price') {
        return a.price - b.price;
      } else if (sortCriteria === 'rating') {
        return b.rating.rate - a.rating.rate;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

  return (
    <div>
      <br />
      <br />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <SortOptions sortCriteria={sortCriteria} onSortChange={handleSortChange} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="product-list">
          {filteredProducts.slice(0, visibleProducts).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <br />
      {visibleProducts < filteredProducts.length && (
        <button className="load" onClick={handleLoadMore}>Load More</button>
      )}

      <br />
      <br />

      <div className="users">
        <h2>Users</h2>
        <Link to='/users' className='user-btn'>User</Link>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ProductList;
