function WholesalePage({ onBack }) {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Customer details
  const [customer, setCustomer] = useState({
    name: "",
    business: "",
    phone: "",
    address: "",
  });

  const categories = [
    "All",
    "Vegetables",
    "Fruits",
    "Leafy Greens",
  ];

  // -----------------------------------------
  // FILTER PRODUCTS
  // -----------------------------------------

  const filtered = wholesaleProducts.filter((product) => {
    const categoryMatch =
      category === "All" || product.category === category;

    const searchMatch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  // -----------------------------------------
  // ADD PRODUCT
  // -----------------------------------------

  function addWholesale(product) {
    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      increase(product.id);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: product.minOrder,
        },
      ]);
    }
  }

  // -----------------------------------------
  // INCREASE
  // -----------------------------------------

  function increase(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + item.minOrder,
            }
          : item
      )
    );
  }

  // -----------------------------------------
  // DECREASE
  // -----------------------------------------

  function decrease(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (item.id !== id) return item;

          const newQuantity =
            item.quantity - item.minOrder;

          return {
            ...item,
            quantity: newQuantity,
          };
        })
        .filter(
          (item) =>
            item.quantity >= item.minOrder
        )
    );
  }

  // -----------------------------------------
  // REMOVE
  // -----------------------------------------

  function removeItem(id) {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== id
      )
    );
  }

  // -----------------------------------------
  // TOTAL
  // -----------------------------------------

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const totalUnits = cart.reduce(
    (sum, item) =>
      sum + item.quantity,
    0
  );

  // -----------------------------------------
  // CUSTOMER INPUT
  // -----------------------------------------

  function handleCustomerChange(e) {
    const { name, value } = e.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));
  }

  // -----------------------------------------
  // CHECKOUT
  // -----------------------------------------

  function placeOrder() {
    if (!customer.name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!customer.business.trim()) {
      alert("Please enter your business name.");
      return;
    }

    if (!customer.phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    if (!/^[0-9]{10}$/.test(customer.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!customer.address.trim()) {
      alert("Please enter your delivery address.");
      return;
    }

    if (cart.length === 0) {
      alert("Please add products to your wholesale cart.");
      return;
    }

    setOrderPlaced(true);
  }

  // -----------------------------------------
  // ORDER SUCCESS PAGE
  // -----------------------------------------

  if (orderPlaced) {
    return (
      <div className="wholesale-success">

        <div className="success-card">

          <div className="success-icon">
            🎉
          </div>

          <p className="eyebrow">
            WHOLESALE ORDER CONFIRMED
          </p>

          <h1>
            Bulk order <i>confirmed.</i>
          </h1>

          <p>
            Thank you, {customer.name}! Your
            wholesale order has been successfully
            received.
          </p>

          {/* CUSTOMER DETAILS */}

          <div className="customer-confirmation">

            <h3>
              👤 Customer Details
            </h3>

            <div className="confirmation-row">
              <span>Name</span>
              <strong>
                {customer.name}
              </strong>
            </div>

            <div className="confirmation-row">
              <span>Business</span>
              <strong>
                {customer.business}
              </strong>
            </div>

            <div className="confirmation-row">
              <span>Phone</span>
              <strong>
                {customer.phone}
              </strong>
            </div>

            <div className="confirmation-row">
              <span>Delivery Address</span>
              <strong>
                {customer.address}
              </strong>
            </div>

          </div>

          {/* ORDER DETAILS */}

          <div className="success-details">

            <div>
              <strong>
                {totalUnits}
              </strong>

              <span>
                Total Units
              </span>
            </div>

            <div>
              <strong>
                ₹{total}
              </strong>

              <span>
                Order Value
              </span>
            </div>

          </div>

          {/* ORDER ITEMS */}

          <div className="confirmed-items">

            <h3>
              📦 Ordered Products
            </h3>

            {cart.map((item) => (
              <div
                className="confirmed-item"
                key={item.id}
              >

                <span>
                  {item.emoji} {item.name}
                </span>

                <strong>
                  {item.quantity} {item.unit}
                </strong>

              </div>
            ))}

          </div>

          <button
            className="primary"
            onClick={() => {
              setOrderPlaced(false);
              setCart([]);

              setCustomer({
                name: "",
                business: "",
                phone: "",
                address: "",
              });
            }}
          >
            Continue Wholesale Shopping →
          </button>

          <button
            className="text-button"
            onClick={onBack}
          >
            ← Back to Consumer Page
          </button>

        </div>

      </div>
    );
  }

  // -----------------------------------------
  // WHOLESALE PAGE
  // -----------------------------------------

  return (
    <div className="wholesale-page">

      {/* NAVBAR */}

      <nav className="navbar wholesale-nav">

        <div
          className="logo"
          onClick={onBack}
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

        <div className="wholesale-label">
          <span>📦</span>
          WHOLESALE
        </div>

        <button
          className="back-home"
          onClick={onBack}
        >
          ← Consumer Store
        </button>

      </nav>

      {/* HERO */}

      <section className="wholesale-hero">

        <div className="wholesale-hero-content">

          <p className="eyebrow">
            FOR RETAILERS • HOTELS • RESTAURANTS
          </p>

          <h1>
            Buy fresh.
            <br />
            <i>Buy in bulk.</i>
          </h1>

          <p>
            Get farm-direct wholesale produce
            at lower prices, starting from
            <strong> 10 kg</strong>.
          </p>

          <div className="wholesale-points">

            <span>
              ✓ Minimum 10 kg
            </span>

            <span>
              ✓ Farmer-direct
            </span>

            <span>
              ✓ Low wholesale pricing
            </span>

          </div>

        </div>

        <div className="wholesale-hero-card">

          <div className="bulk-icon">
            📦
          </div>

          <strong>
            Wholesale Advantage
          </strong>

          <span>
            Lower rates • Fresh supply •
            Transparent pricing
          </span>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="wholesale-products-section">

        <div className="wholesale-heading">

          <div>

            <p className="eyebrow">
              FARM-DIRECT BULK PRICES
            </p>

            <h2>
              Wholesale <i>fresh produce.</i>
            </h2>

          </div>

          <div className="wholesale-search">

            🔍

            <input
              type="text"
              placeholder="Search wholesale products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

        </div>

        {/* CATEGORIES */}

        <div className="wholesale-categories">

          {categories.map((item) => (

            <button
              key={item}
              className={
                category === item
                  ? "active"
                  : ""
              }
              onClick={() =>
                setCategory(item)
              }
            >
              {item}
            </button>

          ))}

        </div>

        {/* MAIN LAYOUT */}

        <div className="wholesale-layout">

          {/* PRODUCT GRID */}

          <div className="wholesale-grid">

            {filtered.map((product) => (

              <div
                className="wholesale-card"
                key={product.id}
              >

                <div className="wholesale-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span>
                    WHOLESALE
                  </span>

                </div>

                <div className="wholesale-card-content">

                  <div className="wholesale-card-title">

                    <div>

                      <h3>
                        {product.emoji}{" "}
                        {product.name}
                      </h3>

                      <p>
                        🌱 {product.farmer}
                      </p>

                    </div>

                  </div>

                  <div className="wholesale-location">

                    📍 {product.location}

                  </div>

                  {/* PRICE */}

                  <div className="wholesale-price-row">

                    <div>

                      <strong>
                        ₹{product.price}
                      </strong>

                      <span>
                        /{product.unit}
                      </span>

                      <del>
                        ₹{product.marketPrice}
                      </del>

                    </div>

                    <span className="save-small">

                      Save ₹
                      {product.marketPrice -
                        product.price}

                    </span>

                  </div>

                  {/* MINIMUM ORDER */}

                  <div className="minimum-order">

                    📦 Minimum order:

                    <strong>
                      {" "}
                      {product.minOrder}{" "}
                      {product.unit}
                    </strong>

                  </div>

                  <button
                    className="wholesale-add"
                    onClick={() =>
                      addWholesale(product)
                    }
                  >
                    + Add Wholesale
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* CART */}

          <aside className="wholesale-cart">

            <div className="wholesale-cart-top">

              <div>

                <p className="eyebrow">
                  BULK BASKET
                </p>

                <h2>
                  Wholesale Cart
                </h2>

              </div>

              <span className="cart-number">
                {totalUnits}
              </span>

            </div>

            {/* EMPTY CART */}

            {cart.length === 0 ? (

              <div className="wholesale-empty">

                <div>
                  📦
                </div>

                <h3>
                  Your bulk basket is empty
                </h3>

                <p>
                  Add products to create
                  your wholesale order.
                </p>

              </div>

            ) : (

              <>

                {/* CART ITEMS */}

                <div className="wholesale-cart-items">

                  {cart.map((item) => (

                    <div
                      className="wholesale-cart-item"
                      key={item.id}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="w-cart-info">

                        <strong>
                          {item.name}
                        </strong>

                        <span>
                          ₹{item.price}/
                          {item.unit}
                        </span>

                        {/* QUANTITY */}

                        <div className="quantity-control">

                          <button
                            onClick={() =>
                              decrease(item.id)
                            }
                          >
                            −
                          </button>

                          <b>
                            {item.quantity}
                          </b>

                          <button
                            onClick={() =>
                              increase(item.id)
                            }
                          >
                            +
                          </button>

                        </div>

                        <small>
                          Min: {item.minOrder}{" "}
                          {item.unit}
                        </small>

                      </div>

                      <div>

                        <strong>
                          ₹
                          {item.price *
                            item.quantity}
                        </strong>

                        <button
                          className="remove"
                          onClick={() =>
                            removeItem(item.id)
                          }
                        >
                          ×
                        </button>

                      </div>

                    </div>

                  ))}

                </div>

                {/* TOTAL */}

                <div className="wholesale-total">

                  <span>
                    Wholesale Total
                  </span>

                  <strong>
                    ₹{total}
                  </strong>

                </div>

                {/* CUSTOMER DETAILS */}

                <div className="wholesale-checkout-box">

                  <p className="eyebrow">
                    DELIVERY DETAILS
                  </p>

                  <h3>
                    Customer Information
                  </h3>

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={customer.name}
                    onChange={
                      handleCustomerChange
                    }
                  />

                  <input
                    type="text"
                    name="business"
                    placeholder="Business / Shop Name"
                    value={customer.business}
                    onChange={
                      handleCustomerChange
                    }
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit Phone Number"
                    maxLength="10"
                    value={customer.phone}
                    onChange={
                      handleCustomerChange
                    }
                  />

                  <textarea
                    name="address"
                    placeholder="Delivery Address"
                    rows="3"
                    value={customer.address}
                    onChange={
                      handleCustomerChange
                    }
                  />

                </div>

                {/* CHECKOUT */}

                <button
                  className="wholesale-checkout"
                  onClick={placeOrder}
                >
                  Place Wholesale Order →
                </button>

                <p className="secure">
                  🔒 Transparent farmer-direct
                  pricing
                </p>

              </>

            )}

          </aside>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="wholesale-benefits">

        <div>

          <span>🌱</span>

          <h3>
            Direct From Farmers
          </h3>

          <p>
            Source directly from verified
            farming communities.
          </p>

        </div>

        <div>

          <span>💰</span>

          <h3>
            Lower Bulk Prices
          </h3>

          <p>
            Wholesale rates designed
            for regular bulk buyers.
          </p>

        </div>

        <div>

          <span>📦</span>

          <h3>
            Bulk Orders
          </h3>

          <p>
            Minimum quantities such as
            10 kg or 100 kg depending
            on the product.
          </p>

        </div>

        <div>

          <span>🚚</span>

          <h3>
            Fresh Delivery
          </h3>

          <p>
            Efficient logistics from
            farm to business.
          </p>

        </div>

      </section>

      {/* FOOTER */}

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
            Wholesale made simple.
            Freshness made direct.
          </p>

        </div>

        <div className="footer-links">

          <span>
            Wholesale
          </span>

          <span>
            Fair Prices
          </span>

          <span>
            Verified Farmers
          </span>

          <span>
            Fresh Supply
          </span>

        </div>

      </footer>

    </div>
  );
}