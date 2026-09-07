
function ProductDetails({ goBack }) {
  return (
    <div className="product-details-page">

      <div className="details-container">

        {/* BACK */}
       <button
  className="back-btn"
  onClick={goBack}
>
  ← Back to Fresh Produce
</button>
        <div className="details-layout">

          {/* PRODUCT VISUAL */}
          <div className="details-image">

            <span>🍅</span>

            <div className="fresh-badge">
              🌱 Fresh Harvest
            </div>

          </div>

          {/* PRODUCT INFORMATION */}
          <div className="details-info">

            <span className="eyebrow">
              FARM FRESH PRODUCT
            </span>

            <h1>Fresh Tomatoes</h1>

            <div className="details-rating">
              ⭐ 4.8
              <span> • 126 reviews</span>
            </div>

            <p className="details-description">
              Freshly harvested tomatoes directly from
              verified local farmers. No unnecessary
              intermediaries.
            </p>

            {/* PRICE */}
            <div className="price-box">

              <div>
                <span>Farm2Fresh Price</span>

                <h2>
                  ₹28
                  <small>/ kg</small>
                </h2>
              </div>

              <div className="save-badge">
                Save ₹7
              </div>

            </div>

            {/* AI INSIGHT */}
            <div className="ai-insight">

              <div className="ai-icon">
                🤖
              </div>

              <div>
                <strong>
                  AI Price Insight
                </strong>

                <p>
                  Demand is currently high and supply
                  is moderate. This price provides a
                  fair return to the farmer.
                </p>
              </div>

            </div>

            {/* FARMER */}
            <div className="seller-box">

              <div className="seller-avatar">
                👨‍🌾
              </div>

              <div>
                <span>GROWN BY</span>

                <h3>
                  Kumar Farms ✓
                </h3>

                <p>
                  📍 Kanchipuram • 32 km away
                </p>
              </div>

              <button>
                View Farm →
              </button>

            </div>

            {/* QUANTITY */}
            <div className="purchase-row">

              <div className="quantity">
                <button>−</button>

                <strong>1 kg</strong>

                <button>+</button>
              </div>

              <button className="add-cart-large">
                🛒 Add to Cart — ₹28
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;

