# Farm2Fresh — Wholesale Marketplace Addition

## New files
- `src/Wholesale.jsx` — complete wholesale buyer marketplace.
- `src/wholesale.css` — wholesale marketplace styling.
- `src/WholesaleEntry.jsx` — optional standalone entry component.
- `src/App.jsx.backup` and `src/index.css.backup` — backups of your original files.

## Wholesale features
- Direct farmer/FPO sourcing
- Minimum order: 1 kg
- Low demo wholesale prices
- Farmer + location + stock details
- Search
- Bulk cart with quantity controls
- Order summary
- AI demand insight demo
- Logistics flow demo
- Responsive design

## IMPORTANT: Connect it to your existing consumer App
Do not replace your existing App.jsx.

1. Add:
   `import Wholesale from "./Wholesale";`
2. Inside your existing App component, add state:
   `const [showWholesale, setShowWholesale] = useState(false);`
3. Before the normal App return, add:
   `if (showWholesale) return <Wholesale onBackToConsumer={() => setShowWholesale(false)} />;`
4. Add a button/link anywhere in your consumer page:
   `<button onClick={() => setShowWholesale(true)}>🏪 Wholesale Marketplace</button>`

Then run:
`npm install`
`npm run dev`

For production:
`npm run build`

The uploaded project was kept intact; the original App.jsx and index.css are backed up.
