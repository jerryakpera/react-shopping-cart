import { useState } from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');

  const sortProducts = (event) => {
    setSort(event.target.value);

    const sortedProducts = [...data.products].sort((a, b) =>
      event.target.value === 'lowest' ? a.price - b.price : b.price - a.price
    );

    if (event.target.value === 'Latest') {
      setProducts(data.products);
    } else {
      setProducts(sortedProducts);
    }
  };

  const filterProducts = (event) => {
    setSize(event.target.value);
    if (event.target.value === '') {
      setProducts(data.products);
    } else {
      setProducts(
        data.products.filter((product) =>
          product.availableSizes.includes(event.target.value)
        )
      );
    }
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/">Reach Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              filterProducts={filterProducts}
              sortProducts={sortProducts}
            />
            <Products products={products} />
          </div>
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All rights reserved</footer>
    </div>
  );
};

export default App;
