function Categories() {
  const categories = [
    {
      icon: "🥦",
      name: "Vegetables",
      count: "120+ products"
    },
    {
      icon: "🍎",
      name: "Fruits",
      count: "85+ products"
    },
    {
      icon: "🌾",
      name: "Grains",
      count: "45+ products"
    },
    {
      icon: "🫘",
      name: "Pulses",
      count: "30+ products"
    },
    {
      icon: "🥛",
      name: "Dairy",
      count: "25+ products"
    },
    {
      icon: "🌿",
      name: "Greens",
      count: "40+ products"
    }
  ];

  return (
    <section className="categories">

      <div className="section-heading compact">

        <div>
          <span className="eyebrow">
            SHOP BY CATEGORY
          </span>

          <h2>
            What are you looking for?
          </h2>
        </div>

      </div>

      <div className="category-grid">

        {categories.map((category) => (
          <button
            className="category-card"
            key={category.name}
          >

            <span className="category-icon">
              {category.icon}
            </span>

            <strong>
              {category.name}
            </strong>

            <small>
              {category.count}
            </small>

            <div className="category-arrow">
              →
            </div>

          </button>
        ))}

      </div>

    </section>
  );
}

export default Categories;