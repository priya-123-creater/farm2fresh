import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import FarmerCard from "../components/FarmerCard";

function ConsumerHome({ openProduct }) {
  const products = [
    {
      name: "Fresh Tomatoes",
      price: 28,
      unit: "kg",
      farmer: "Kumar Farms",
      location: "Kanchipuram",
      emoji: "🍅",
      tag: "Fresh Harvest"
    },
    {
      name: "Organic Carrots",
      price: 45,
      unit: "kg",
      farmer: "Green Valley FPO",
      location: "Chengalpattu",
      emoji: "🥕",
      tag: "Organic"
    },
    {
      name: "Fresh Onions",
      price: 32,
      unit: "kg",
      farmer: "Anbu Farmers",
      location: "Tiruvallur",
      emoji: "🧅",
      tag: "Best Value"
    },
    {
      name: "Farm Potatoes",
      price: 30,
      unit: "kg",
      farmer: "Sri Lakshmi Farms",
      location: "Vellore",
      emoji: "🥔",
      tag: "Fresh"
    }
  ];

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <Categories />

        <section className="products-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">AI RECOMMENDATIONS</span>

              <h2>Fresh picks for you 🤖</h2>

              <p>
                Smart recommendations based on demand,
                freshness and availability.
              </p>
            </div>

            <button className="outline-btn">
              View All →
            </button>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <ProductCard
  key={index}
  product={product}
  openProduct={openProduct}
/>
            ))}
          </div>
        </section>

        <section className="farmers-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                DIRECT FROM FARM
              </span>

              <h2>Farmers near you 🌱</h2>

              <p>
                Know exactly where your food comes from.
              </p>
            </div>
          </div>

          <div className="farmer-grid">

            <FarmerCard
              name="Kumar Farms"
              location="Kanchipuram"
              distance="32 km"
              rating="4.8"
              crops="Tomato • Onion • Greens"
            />

            <FarmerCard
              name="Green Valley FPO"
              location="Chengalpattu"
              distance="18 km"
              rating="4.9"
              crops="Carrot • Beans • Potato"
            />

            <FarmerCard
              name="Anbu Farmers"
              location="Tiruvallur"
              distance="41 km"
              rating="4.7"
              crops="Onion • Potato • Brinjal"
            />

          </div>
        </section>

        <section className="impact-section">

          <div>
            <span className="eyebrow">
              WHY FARM2FRESH?
            </span>

            <h2>
              Every purchase creates impact.
            </h2>

            <p>
              We connect consumers directly with farmers
              and FPOs, helping reduce unnecessary
              intermediaries and supply-chain inefficiencies.
            </p>
          </div>

          <div className="impact-stats">

            <div>
              <strong>2,840+</strong>
              <span>Farmers</span>
            </div>

            <div>
              <strong>46</strong>
              <span>FPOs</span>
            </div>

            <div>
              <strong>18%</strong>
              <span>Route savings</span>
            </div>

          </div>

        </section>
      </main>

      <footer>
        <div>
          <h3>🌾 Farm2Fresh</h3>
          <p>From farm to your table, fairly.</p>
        </div>

        <span>© 2026 Farm2Fresh</span>
      </footer>
    </div>
  );
}

export default ConsumerHome;