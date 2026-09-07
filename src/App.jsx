import { useState } from "react";
import "./index.css";

/* =========================================================
   PRODUCT DATA
========================================================= */

const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 28,
    oldPrice: 35,
    unit: "kg",
    farmer: "Kumar Farms",
    location: "Kanchipuram",
    distance: "32 km",
    rating: 4.8,
    reviews: 126,
    emoji: "🍅",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=85",
    description:
      "Freshly harvested tomatoes directly from verified local farmers. No unnecessary intermediaries.",
  },
  {
    id: 2,
    name: "Organic Carrots",
    category: "Vegetables",
    price: 42,
    oldPrice: 50,
    unit: "kg",
    farmer: "Green Valley Farms",
    location: "Ooty",
    distance: "48 km",
    rating: 4.7,
    reviews: 98,
    emoji: "🥕",
    image:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=900&q=85",
    description:
      "Crunchy and naturally grown carrots sourced directly from a trusted farming community.",
  },
  {
    id: 3,
    name: "Fresh Bananas",
    category: "Fruits",
    price: 38,
    oldPrice: 45,
    unit: "kg",
    farmer: "Sri Lakshmi Farms",
    location: "Pollachi",
    distance: "21 km",
    rating: 4.9,
    reviews: 154,
    emoji: "🍌",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=85",
    description:
      "Naturally ripened bananas delivered fresh from the farm to your doorstep.",
  },
  {
    id: 4,
    name: "Fresh Spinach",
    category: "Leafy Greens",
    price: 25,
    oldPrice: 32,
    unit: "bunch",
    farmer: "Nature Fresh FPO",
    location: "Coimbatore",
    distance: "14 km",
    rating: 4.6,
    reviews: 82,
    emoji: "🥬",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=85",
    description:
      "Fresh leafy greens harvested every morning and delivered with minimal handling.",
  },
  {
    id: 5,
    name: "Farm Potatoes",
    category: "Vegetables",
    price: 32,
    oldPrice: 40,
    unit: "kg",
    farmer: "Anbu Farmers FPO",
    location: "Erode",
    distance: "39 km",
    rating: 4.7,
    reviews: 76,
    emoji: "🥔",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=85",
    description:
      "Quality farm potatoes sourced directly from farmers without multiple middlemen.",
  },
  {
    id: 6,
    name: "Sweet Oranges",
    category: "Fruits",
    price: 65,
    oldPrice: 78,
    unit: "kg",
    farmer: "Sunrise Orchards",
    location: "Dindigul",
    distance: "55 km",
    rating: 4.8,
    reviews: 112,
    emoji: "🍊",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=900&q=85",
    description:
      "Juicy and naturally grown oranges supplied directly from the orchard.",
  },
];


/* =========================================================
   PRICE TRANSPARENCY COMPONENT
========================================================= */

function PriceTransparency() {
  return (
    <section className="price-transparency" id="transparency">

      <div className="transparency-heading">
        <p className="eyebrow">KNOW WHERE YOUR MONEY GOES</p>

        <h2>
          A <i>fairer price</i>
          <br />
          for everyone.
        </h2>

        <p>
          Farm2Fresh removes unnecessary intermediaries from the supply
          chain and makes the journey of every rupee transparent.
        </p>
      </div>

      <div className="price-comparison">

        {/* Traditional */}
        <div className="price-box">

          <div className="price-box-title">
            <span>🏪</span>

            <div>
              <small>TRADITIONAL MARKET</small>
              <h3>Multiple Intermediaries</h3>
            </div>
          </div>

          <div className="supply-chain">
            👨‍🌾 Farmer
            <b>→</b>
            🧑‍💼 Trader
            <b>→</b>
            🏬 Wholesaler
            <b>→</b>
            🛒 Retailer
            <b>→</b>
            👨‍👩‍👧 Consumer
          </div>

          <div className="price-lines">
            <div>
              <span>Farmer receives</span>
              <strong>₹18</strong>
            </div>

            <div>
              <span>Trader margin</span>
              <strong>₹7</strong>
            </div>

            <div>
              <span>Wholesaler margin</span>
              <strong>₹8</strong>
            </div>

            <div>
              <span>Retailer margin</span>
              <strong>₹10</strong>
            </div>
          </div>

          <div className="consumer-price">
            <span>Consumer pays</span>
            <strong>₹43/kg</strong>
          </div>

        </div>


        {/* Farm2Fresh */}
        <div className="price-box farm2fresh">

          <div className="price-box-title">
            <span>🌿</span>

            <div>
              <small>FARM2FRESH</small>
              <h3>Direct Farm Connection</h3>
            </div>
          </div>

          <div className="supply-chain">
            👨‍🌾 Farmer
            <b>→</b>
            🌿 Farm2Fresh
            <b>→</b>
            👨‍👩‍👧 Consumer
          </div>

          <div className="price-lines">
            <div>
              <span>Farmer receives</span>
              <strong>₹24</strong>
            </div>

            <div>
              <span>Logistics</span>
              <strong>₹3</strong>
            </div>

            <div>
              <span>Platform support</span>
              <strong>₹2</strong>
            </div>

            <div>
              <span>Unnecessary middlemen</span>
              <strong>₹0</strong>
            </div>
          </div>

          <div className="consumer-price">
            <span>Consumer pays</span>
            <strong>₹29/kg</strong>
          </div>

        </div>

      </div>


      {/* Benefits */}

      <div className="transparency-benefits">

        <div>
          <strong>+33%</strong>
          <span>Potential farmer earnings</span>
        </div>

        <div>
          <strong>-32%</strong>
          <span>Consumer price impact</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Price visibility</span>
        </div>

        <div>
          <strong>0</strong>
          <span>Unnecessary intermediaries</span>
        </div>

      </div>

    </section>
  );
}


/* =========================================================
   MAIN APP
========================================================= */

function App() {

  /* -----------------------------
     STATES
  ----------------------------- */

  const [cart, setCart] = useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [showCart, setShowCart] =
    useState(false);

  const [orderPlaced, setOrderPlaced] =
    useState(false);


  /* -----------------------------
     CATEGORIES
  ----------------------------- */

  const categories = [
    { name: "All", icon: "🌿" },
    { name: "Vegetables", icon: "🥕" },
    { name: "Fruits", icon: "🍎" },
    { name: "Leafy Greens", icon: "🥬" },
  ];


  /* -----------------------------
     FILTER PRODUCTS
  ----------------------------- */

  const filteredProducts = products.filter((product) => {

    const categoryMatch =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const searchMatch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });


  /* -----------------------------
     ADD TO CART
  ----------------------------- */

  function addToCart(product) {

    const existingItem =
      cart.find((item) => item.id === product.id);

    if (existingItem) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }
  }


  /* -----------------------------
     INCREASE QUANTITY
  ----------------------------- */

  function increaseQuantity(id) {

    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }


  /* -----------------------------
     DECREASE QUANTITY
  ----------------------------- */

  function decreaseQuantity(id) {

    setCart(

      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)

    );
  }


  /* -----------------------------
     REMOVE ITEM
  ----------------------------- */

  function removeFromCart(id) {

    setCart(
      cart.filter((item) => item.id !== id)
    );

  }


  /* -----------------------------
     CART TOTAL
  ----------------------------- */

  const total = cart.reduce(

    (sum, item) =>
      sum + item.price * item.quantity,

    0

  );


  const cartCount = cart.reduce(

    (sum, item) =>
      sum + item.quantity,

    0

  );


  /* =========================================================
     ORDER SUCCESS PAGE
  ========================================================= */

  if (orderPlaced) {

    return (

      <div className="empty-cart">

        <div className="empty-cart-icon">
          🎉
        </div>

        <p className="eyebrow">
          ORDER CONFIRMED
        </p>

        <h2>
          Freshness is on the way!
        </h2>

        <p>
          Your order has been placed directly
          with our farming network.
        </p>

        <button
          className="primary"
          onClick={() => {
            setOrderPlaced(false);
            setShowCart(false);
            setCart([]);
          }}
        >
          Continue Shopping →
        </button>

      </div>

    );
  }


  /* =========================================================
     CART PAGE
  ========================================================= */

  if (showCart) {

    return (

      <div className="cart-page">

        {/* NAVBAR */}

        <nav className="navbar">

          <div
            className="logo"
            onClick={() => {
              setShowCart(false);
              setSelectedProduct(null);
            }}
          >

            <div className="logo-icon">
              🌿
            </div>

            <div>
              <strong>Farm2Fresh</strong>

              <small>
                FARM • FAIR • FRESH
              </small>
            </div>

          </div>


          <button
            className="back-home"
            onClick={() => setShowCart(false)}
          >
            ← Continue Shopping
          </button>

        </nav>


        <main className="cart-container">

          <div className="cart-header">

            <div>

              <p className="eyebrow">
                YOUR FRESH BASKET
              </p>

              <h1>
                Your <i>Cart.</i>
              </h1>

              <p className="cart-subtitle">
                Fresh produce directly from local farmers.
              </p>

            </div>


            <div className="cart-trust">

              <span>🌱</span>

              <div>

                <strong>
                  Supporting Farmers
                </strong>

                <small>
                  Direct purchase model
                </small>

              </div>

            </div>

          </div>


          {cart.length === 0 ? (

            <div className="empty-cart">

              <div className="empty-cart-icon">
                🛒
              </div>

              <h2>
                Your basket is empty
              </h2>

              <p>
                Add fresh products directly
                from local farmers.
              </p>

              <button
                className="primary"
                onClick={() => setShowCart(false)}
              >
                Start Shopping →
              </button>

            </div>

          ) : (

            <div className="cart-layout">

              {/* CART ITEMS */}

              <div className="cart-items">

                <div className="cart-items-header">

                  <span>
                    FRESH PRODUCE
                  </span>

                  <span>
                    {cartCount} ITEMS
                  </span>

                </div>


                {cart.map((item) => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <div className="cart-product-image">

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <span>
                        FRESH
                      </span>

                    </div>


                    <div className="cart-item-info">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        🌱 {item.farmer}
                      </p>

                      <small>
                        📍 {item.location}
                      </small>

                      <div className="delivery-mini">
                        🚚 Fresh delivery
                      </div>

                    </div>


                    <div className="quantity-control">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>


                    <div className="cart-price">

                      <strong>
                        ₹
                        {item.price *
                          item.quantity}
                      </strong>

                      <small>
                        ₹{item.price}/{item.unit}
                      </small>

                    </div>


                    <button
                      className="remove"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      ×
                    </button>

                  </div>

                ))}

              </div>


              {/* ORDER SUMMARY */}

              <div className="order-summary">

                <h2>
                  Order Summary
                </h2>


                <div className="summary-row">

                  <span>
                    Fresh Produce
                  </span>

                  <strong>
                    ₹{total}
                  </strong>

                </div>


                <div className="summary-row">

                  <span>
                    Delivery
                  </span>

                  <strong>
                    ₹20
                  </strong>

                </div>


                <div className="summary-row">

                  <span>
                    Farmer Benefit
                  </span>

                  <strong className="benefit">
                    + Direct
                  </strong>

                </div>


                <hr />


                <div className="summary-total">

                  <span>
                    Total
                  </span>

                  <strong>
                    ₹{total + 20}
                  </strong>

                </div>


                <button
                  className="checkout"
                  onClick={() =>
                    setOrderPlaced(true)
                  }
                >
                  <span>
                    Proceed to Checkout
                  </span>

                  <span>
                    →
                  </span>

                </button>


                <p className="secure">
                  🔒 Secure & transparent pricing
                </p>

              </div>

            </div>

          )}

        </main>

      </div>

    );
  }


  /* =========================================================
     PRODUCT DETAIL PAGE
  ========================================================= */

  if (selectedProduct) {

    const product = selectedProduct;

    return (

      <div>

        <nav className="navbar">

          <div
            className="logo"
            onClick={() =>
              setSelectedProduct(null)
            }
          >

            <div className="logo-icon">
              🌿
            </div>

            <div>
              <strong>
                Farm2Fresh
              </strong>

              <small>
                FARM • FAIR • FRESH
              </small>
            </div>

          </div>


          <button
            className="cart"
            onClick={() =>
              setShowCart(true)
            }
          >
            🛒

            {cartCount > 0 && (
              <span>
                {cartCount}
              </span>
            )}

          </button>

        </nav>


        <main className="product-detail">

          <button
            className="back-home"
            onClick={() =>
              setSelectedProduct(null)
            }
          >
            ← Back to Fresh Produce
          </button>


          <div className="product-detail-grid">

            {/* IMAGE */}

            <div className="product-image-large">

              <img
                src={product.image}
                alt={product.name}
              />

              <div className="fresh-badge">
                🌱 Fresh Harvest
              </div>

            </div>


            {/* INFO */}

            <div className="product-info">

              <p className="eyebrow">
                FARM FRESH PRODUCT
              </p>

              <h1>
                {product.name}
              </h1>


              <div>
                ⭐ {product.rating}
                {" "}•{" "}
                {product.reviews} reviews
              </div>


              <p className="product-description">
                {product.description}
              </p>


              {/* PRICE */}

              <div className="price-card">

                <div>

                  <small>
                    Farm2Fresh Price
                  </small>

                  <div className="big-price">

                    ₹{product.price}

                    <span>
                      /{product.unit}
                    </span>

                  </div>

                </div>


                <div className="save-badge">
                  Save ₹
                  {product.oldPrice -
                    product.price}
                </div>

              </div>


              {/* AI */}

              <div className="ai-insight">

                <div className="ai-icon">
                  🤖
                </div>

                <div>

                  <strong>
                    AI Price Insight
                  </strong>

                  <p>
                    Demand is currently high and
                    supply is moderate. This price
                    provides a fair return to the farmer.
                  </p>

                </div>

              </div>


              {/* FARMER */}

              <div className="farmer-card">

                <div className="farmer-avatar">
                  👨‍🌾
                </div>

                <div>

                  <small>
                    GROWN BY
                  </small>

                  <strong>
                    {product.farmer} ✓
                  </strong>

                  <p>
                    📍 {product.location}
                    {" "}• {product.distance} away
                  </p>

                </div>

                <button>
                  View Farm →
                </button>

              </div>


              {/* ADD CART */}

              <button
                className="add-cart-large"
                onClick={() => {
                  addToCart(product);
                  setShowCart(true);
                }}
              >
                🛒 Add to Fresh Basket
              </button>


              <div className="product-features">

                <span>
                  🚚 Fresh Delivery
                </span>

                <span>
                  🌱 Verified Farmer
                </span>

                <span>
                  💰 Fair Price
                </span>

              </div>

            </div>

          </div>

        </main>

      </div>

    );
  }


  /* =========================================================
     HOME PAGE
  ========================================================= */

  return (

    <div>

      {/* NAVBAR */}

      <nav className="navbar">

        <div
          className="logo"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >

          <div className="logo-icon">
            🌿
          </div>

          <div>

            <strong>
              Farm2Fresh
            </strong>

            <small>
              FARM • FAIR • FRESH
            </small>

          </div>

        </div>


        <div className="nav-links">

          <button
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Fresh Produce
          </button>

          <button
            onClick={() =>
              document
                .getElementById("transparency")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Price Transparency
          </button>

          <button
            onClick={() =>
              document
                .getElementById("how")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            How It Works
          </button>

        </div>


        <button
          className="cart"
          onClick={() =>
            setShowCart(true)
          }
        >
          🛒

          {cartCount > 0 && (
            <span>
              {cartCount}
            </span>
          )}

        </button>

      </nav>


      {/* =====================================================
         HERO
      ===================================================== */}

      <section className="hero">

        <div>

          <p className="eyebrow">
            FROM LOCAL FARMS TO YOUR TABLE
          </p>

          <h1>
            Fresh food.
            <br />
            <i>Fairly priced.</i>
          </h1>

          <p className="hero-description">
            Buy fresh produce directly from verified
            farmers and FPOs. Better prices for farmers,
            better value for you.
          </p>


          <div className="hero-actions">

            <button
              className="primary"
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Explore Fresh Produce →
            </button>

            <span className="hero-note">
              🌱 Supporting local farmers
            </span>

          </div>


          <div className="hero-stats">

            <div>
              <strong>
                500+
              </strong>

              <span>
                Verified Farmers
              </span>
            </div>

            <div>
              <strong>
                2,500+
              </strong>

              <span>
                Fresh Orders
              </span>
            </div>

            <div>
              <strong>
                100%
              </strong>

              <span>
                Price Transparent
              </span>
            </div>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="hero-visual">

          <div className="hero-image-card">

            <img
              src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=90"
              alt="Fresh farm vegetables"
            />

          </div>


          <div className="hero-floating-card">

            <span>
              🌾
            </span>

            <div>

              <strong>
                Direct from farms
              </strong>

              <small>
                No unnecessary middlemen
              </small>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
         CATEGORIES
      ===================================================== */}

      <section className="category-section">

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              DISCOVER FRESHNESS
            </p>

            <h2>
              Shop by <i>category.</i>
            </h2>

          </div>


          {/* SEARCH */}

          <div className="search-box">

            🔍

            <input
              type="text"
              placeholder="Search fresh produce..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </div>


        <div className="categories">

          {categories.map((category) => (

            <button
              key={category.name}
              className={`category ${
                selectedCategory === category.name
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setSelectedCategory(category.name)
              }
            >

              <span>
                {category.icon}
              </span>

              {category.name}

            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
         PRODUCTS
      ===================================================== */}

      <section
        className="products-section"
        id="products"
      >

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              TODAY'S HARVEST
            </p>

            <h2>
              Fresh from the <i>farm.</i>
            </h2>

          </div>

          <span className="product-count">
            {filteredProducts.length}
            {" "}fresh products available
          </span>

        </div>


        <div className="product-grid">

          {filteredProducts.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              {/* IMAGE */}

              <div
                className="product-card-image"
                onClick={() =>
                  setSelectedProduct(product)
                }
              >

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span className="product-tag">
                  🌱 FARM FRESH
                </span>

              </div>


              {/* CONTENT */}

              <div className="product-card-content">

                <div className="product-card-top">

                  <div>

                    <h3>
                      {product.name}
                    </h3>

                    <p>
                      {product.farmer}
                    </p>

                  </div>

                  <span className="card-rating">
                    ⭐ {product.rating}
                  </span>

                </div>


                <div className="product-location">
                  📍 {product.location}
                  {" "}• {product.distance}
                </div>


                <div className="product-card-bottom">

                  <div>

                    <strong>
                      ₹{product.price}
                    </strong>

                    <small>
                      /{product.unit}
                    </small>

                    <del>
                      ₹{product.oldPrice}
                    </del>

                  </div>


                  <button
                    className="add-button"
                    onClick={() =>
                      addToCart(product)
                    }
                  >
                    + Add
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>


        {filteredProducts.length === 0 && (

          <div className="empty-cart">

            <div className="empty-cart-icon">
              🔍
            </div>

            <h2>
              No produce found
            </h2>

            <p>
              Try another search or category.
            </p>

          </div>

        )}

      </section>


      {/* =====================================================
         PRICE TRANSPARENCY
      ===================================================== */}

      <PriceTransparency />


      {/* =====================================================
         HOW IT WORKS
      ===================================================== */}

      <section
        className="how-section"
        id="how"
      >

        <div className="section-heading">

          <div>

            <p className="eyebrow">
              SIMPLE. DIRECT. FAIR.
            </p>

            <h2>
              How <i>Farm2Fresh</i> works.
            </h2>

          </div>

        </div>


        <div className="how-grid">

          <div className="how-card">

            <span>
              01
            </span>

            <div>
              🔍
            </div>

            <h3>
              Discover
            </h3>

            <p>
              Explore fresh fruits and vegetables
              available directly from verified
              local farmers.
            </p>

          </div>


          <div className="how-card">

            <span>
              02
            </span>

            <div>
              👨‍🌾
            </div>

            <h3>
              Know Your Farmer
            </h3>

            <p>
              See the farmer, location and
              transparent pricing behind every
              product.
            </p>

          </div>


          <div className="how-card">

            <span>
              03
            </span>

            <div>
              🛒
            </div>

            <h3>
              Buy Direct
            </h3>

            <p>
              Add fresh produce to your basket
              without unnecessary intermediaries.
            </p>

          </div>


          <div className="how-card">

            <span>
              04
            </span>

            <div>
              🚚
            </div>

            <h3>
              Fresh Delivery
            </h3>

            <p>
              Our logistics network connects farms
              to consumers efficiently.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
         AI SECTION
      ===================================================== */}

      <section className="ai-banner">

        <div className="ai-banner-icon">
          🤖
        </div>

        <div>

          <p className="eyebrow">
            POWERED BY AI
          </p>

          <h2>
            Smarter demand.
            <br />
            <i>Less waste.</i>
          </h2>

        </div>

        <p className="hero-note">
          AI-powered demand forecasting helps
          farmers and logistics partners prepare
          the right quantity and route produce
          efficiently.
        </p>

      </section>


      {/* =====================================================
         FOOTER
      ===================================================== */}

      <footer className="footer">

        <div>

          <div className="logo">

            <div className="logo-icon">
              🌿
            </div>

            <div>

              <strong>
                Farm2Fresh
              </strong>

              <small>
                FARM • FAIR • FRESH
              </small>

            </div>

          </div>

          <p>
            Connecting farms directly to your table.
          </p>

        </div>


        <div className="footer-links">

          <span>
            Fair Prices
          </span>

          <span>
            Local Farmers
          </span>

          <span>
            Fresh Produce
          </span>

          <span>
            Transparent Supply Chain
          </span>

        </div>

      </footer>

    </div>

  );
}

export default App;