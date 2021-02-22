import formatCurrency from '../util';

const Products = ({ products, addToCart }) => {
  return (
    <div>
      {/* {products} */}
      <ul className="products">
        {products.map((product) => (
          <li key={product._id}>
            <div className="product">
              <a href={'#' + product._id}>
                <img src={product.image} alt={product.title} />
                <p>
                  {product.title} ({product.availableSizes.join(', ')})
                </p>
              </a>
              <div className="product-price">
                <div>{formatCurrency(product.price)}</div>
                <button
                  className="button primary"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
