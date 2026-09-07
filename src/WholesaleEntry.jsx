import React from "react";
import Wholesale from "./Wholesale";

export default function WholesaleEntry() {
  const [showWholesale, setShowWholesale] = React.useState(false);

  if (showWholesale) {
    return <Wholesale onBackToConsumer={() => setShowWholesale(false)} />;
  }

  return (
    <div style={{padding:"40px", textAlign:"center"}}>
      <h2>Farm2Fresh Wholesale Marketplace</h2>
      <p>Bulk buying from verified farmers & FPOs, starting from 1 kg.</p>
      <button
        onClick={() => setShowWholesale(true)}
        style={{padding:"13px 20px", border:0, borderRadius:12, background:"#176d48", color:"#fff", fontWeight:800, cursor:"pointer"}}
      >
        Explore Wholesale →
      </button>
    </div>
  );
}
