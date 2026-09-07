function Navbar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <span className="logo-icon">🌾</span>

        <div>
          <strong>Farm2Fresh</strong>
          <small>DIRECT FROM FARM</small>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="nav-links">
        <a className="active">Home</a>
        <a>Fresh Produce</a>
        <a>Farmers</a>
        <a>My Orders</a>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-actions">

        <button className="location-btn">
          📍 Chennai
        </button>

        <button className="cart-btn">
          🛒
          <span>2</span>
        </button>

        <button className="profile-btn">
          👤
        </button>

      </div>

    </nav>
  );
}

export default Navbar;