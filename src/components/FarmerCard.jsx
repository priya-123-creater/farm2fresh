function FarmerCard({
  name,
  location,
  distance,
  rating,
  crops
}) {
  return (
    <div className="farmer-card">

      {/* FARMER AVATAR */}
      <div className="farmer-avatar">
        👨‍🌾
      </div>

      {/* FARMER DETAILS */}
      <div className="farmer-info">

        <div className="farmer-name">
          <h3>{name}</h3>

          <span>
            ✓ Verified
          </span>
        </div>

        <p>
          📍 {location} • {distance}
        </p>

        <div className="farmer-rating">
          ⭐ {rating}
        </div>

        <small>
          {crops}
        </small>

      </div>

      {/* VIEW FARM BUTTON */}
      <button className="farmer-arrow">
        →
      </button>

    </div>
  );
}

export default FarmerCard;