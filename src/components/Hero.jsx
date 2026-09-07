function Hero() {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-content">

        <div className="status">
          <span></span>
          FARM FRESH • FAIR PRICES • SMART DELIVERY
        </div>

        <h1>
          Fresh from the
          <br />
          <em>farm.</em> Fair for everyone.
        </h1>

        <p>
          Buy directly from verified farmers and FPOs.
          Get fresher produce while helping farmers earn
          better prices.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Shop Fresh Produce →
          </button>

          <button className="secondary-btn">
            Explore Farmers
          </button>
        </div>

        {/* TRUST STATS */}
        <div className="hero-trust">

          <div>
            <strong>2,840+</strong>
            <span>Farmers</span>
          </div>

          <div>
            <strong>46</strong>
            <span>FPOs</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Verified</span>
          </div>

        </div>

      </div>

      {/* RIGHT VISUAL */}
      <div className="hero-visual">

        {/* AI CARD */}
        <div className="floating-card ai-card">

          <span>🤖</span>

          <div>
            <strong>AI Fresh Pick</strong>
            <small>Tomatoes • High demand</small>
          </div>

        </div>

        {/* FARM ILLUSTRATION */}
        <div className="farm-circle">

          <div className="sun"></div>

          <div className="mountain mountain-one"></div>

          <div className="mountain mountain-two"></div>

          <div className="field"></div>

          <div className="tree tree-one">
            🌳
          </div>

          <div className="tree tree-two">
            🌳
          </div>

        </div>

        {/* PRICE CARD */}
        <div className="floating-card price-card">

          <span>₹</span>

          <div>
            <strong>Fair Price</strong>
            <small>Better for farmers</small>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;