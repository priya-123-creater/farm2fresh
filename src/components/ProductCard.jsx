function ProductCard({ product, openProduct }) {
      return (
   <div
  className="product-card"
  onClick={openProduct}
>

      {/* PRODUCT IMAGE */}
      <div className="product-image">

        <span className="product-emoji">
          {product.emoji}
        </span>

        <span className="product-tag">
          {product.tag}
        </span>

        <button className="heart">
          ♡
        </button>

      </div>

      {/* PRODUCT DETAILS */}
      <div className="product-info">

        <div className="product-title">

          <div>
            <h3>{product.name}</h3>

            <p>
              🌱 {product.farmer}
            </p>
          </div>

          <span className="rating">
            ★ 4.8
          </span>

        </div>

        {/* LOCATION */}
        <div className="product-location">
          📍 {product.location}
        </div>

        {/* PRICE + ADD */}
        <div className="product-bottom">

          <div>
            <strong>
              ₹{product.price}
            </strong>

            <span>
              /{product.unit}
            </span>
          </div>

          <button className="add-btn">
            + Add
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;