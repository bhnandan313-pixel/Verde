import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const products = [
  {
    id: 'milk-liquid',
    name: 'Milk (liquid)',
    desc: 'High moisture, microbial risk',
    badge: 'Aw: 0.99',
    tags: ['UHT / Pasteurised', 'Light-Shielding'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M8 2h8v2H8z" /><path d="M9 4v3l-3 4.5V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8.5L15 7V4" /><line x1="6" x2="18" y1="14" y2="14" /><path d="M10 10h4" />
      </svg>
    ),
  },
  {
    id: 'paneer',
    name: 'Paneer',
    desc: 'High moisture + high microbial risk',
    badge: 'Aw: 0.96',
    tags: ['Vacuum Skin (VSP)', 'MAP (CO2 rich)'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="m21 7-9-4-9 4 9 4 9-4Z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" /><circle cx="8" cy="14" fill="currentColor" r="1" /><circle cx="16" cy="15" fill="currentColor" r="1" />
      </svg>
    ),
  },
  {
    id: 'curd-yogurt',
    name: 'Curd / Yogurt',
    desc: 'Live culture, gas-producing',
    badge: 'pH: 4.0 - 4.5',
    tags: ['Pressure Relief / Foil', 'Acid Resistance'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 8h16" /><path d="M5 8l1.5 12a2 2 0 0 0 2 1.8h7a2 2 0 0 0 2-1.8L19 8" /><path d="M7 8V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3" /><path d="M10 13c1.5 1 2.5 1 4 0" />
      </svg>
    ),
  },
  {
    id: 'cheese',
    name: 'Cheese',
    desc: 'Fat oxidation risk',
    badge: 'OTR Critical',
    tags: ['EVOH Barrier', 'Ripening Control'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 11h16l-8-7-8 7Z" /><path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><circle cx="8" cy="16" fill="currentColor" r="1.5" /><circle cx="15" cy="14" fill="currentColor" r="1" />
      </svg>
    ),
  },
  {
    id: 'butter-ghee',
    name: 'Butter / Ghee',
    desc: 'Very high fat content',
    badge: 'Fat: >80%',
    tags: ['Greaseproof Parchment', 'Metalized UV Foil'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M2 18h20" /><path d="M5 18v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" /><path d="M10 8h4" /><path d="M12 8V6" />
      </svg>
    ),
  },
  {
    id: 'milk-powder',
    name: 'Milk Powder',
    desc: 'Moisture-sensitive, low microbial risk',
    badge: 'WVTR Critical',
    tags: ['Caking Protection', 'Hermetic Sealing'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect height="13" rx="2" width="12" x="6" y="8" /><path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" /><line x1="9" x2="15" y1="13" y2="13" /><line x1="9" x2="13" y1="16" y2="16" />
      </svg>
    ),
  },
];

export default function DairyProductSelection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    setSelectedProduct(product.id);
    // Navigate to recommendation after selection
    setTimeout(() => navigate('/recommendation'), 300);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Navigation & Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-space-md mb-space-lg">
        <div className="flex items-center gap-space-sm font-label-regular text-label-regular">
          <Link to="/" className="text-secondary hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Back to Categories</span>
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-on-surface-variant">Categories</span>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-bold">Dairy Products</span>
        </div>
        <div className="flex items-center gap-space-sm bg-surface-container px-space-md py-1 rounded-full text-on-surface-variant font-label-micro text-label-micro">
          <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
          <span className="uppercase tracking-widest">ISO 15106 / ASTM F1249 Engine Active</span>
        </div>
      </div>

      {/* Hero Module */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-secondary-fixed/30 via-surface-container to-surface-container-high p-space-xl shadow-sm mb-space-xl">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="32" id="grid-pattern" patternUnits="userSpaceOnUse" width="32">
                <path className="text-secondary" d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect fill="url(#grid-pattern)" height="100%" width="100%" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="flex items-center gap-space-sm mb-space-xs">
            <span className="px-space-sm py-0.5 rounded bg-primary-container text-on-primary-container font-label-micro text-label-micro uppercase tracking-wider font-bold">Substrate Intelligence Suite</span>
            <span className="text-outline text-label-micro font-label-micro">SPEC: SEC-CAT-04B</span>
          </div>
          <h1 className="font-display-hero text-display-hero text-primary tracking-tight font-bold mb-space-sm">Dairy Products</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-space-lg">
            Select your specific dairy formulation to calculate oxygen transmission rate (OTR), water vapor transmission rate (WVTR), and multilayer barrier specifications tailored to shelf-life kinetics.
          </p>
          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div className="bg-surface-container-lowest/90 backdrop-blur rounded-xl p-space-md shadow-sm flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed flex-shrink-0">
                <span className="material-symbols-outlined text-[22px]">shield</span>
              </div>
              <div>
                <span className="font-headline-sm text-headline-sm text-primary font-bold block mb-0.5">Preserve Freshness</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">Prevents lipid oxidation, rancidity, and uncalibrated moisture migration.</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest/90 backdrop-blur rounded-xl p-space-md shadow-sm flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface flex-shrink-0">
                <span className="material-symbols-outlined text-[22px]">chips</span>
              </div>
              <div>
                <span className="font-headline-sm text-headline-sm text-primary font-bold block mb-0.5">Ensure Safety</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">Mitigates psychrotrophic microbial bloom &amp; anaerobic headspace spoilage.</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest/90 backdrop-blur rounded-xl p-space-md shadow-sm flex items-start gap-space-sm">
              <div className="w-10 h-10 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary-container flex-shrink-0">
                <span className="material-symbols-outlined text-[22px]">compost</span>
              </div>
              <div>
                <span className="font-headline-sm text-headline-sm text-primary font-bold block mb-0.5">Sustainable Choices</span>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-snug">Calculates mono-material PE/PP recyclability &amp; downgauged barrier film tiers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex flex-col mb-space-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-space-md gap-2">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Select Dairy Formulation</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Choose a benchmark formulation matrix to pre-populate thermodynamic limits and barrier baselines.</p>
          </div>
          <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider">6 standard formulations calibrated</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="product-selection-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className={`product-card group relative bg-surface-container-lowest rounded-[18px] p-space-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
                selectedProduct === product.id ? 'bg-secondary-fixed/20' : ''
              }`}
              onClick={() => handleProductClick(product)}
            >
              <div>
                <div className="flex items-start justify-between mb-space-md">
                  <div className="w-14 h-14 rounded-xl bg-secondary-fixed/50 group-hover:bg-secondary-fixed flex items-center justify-center text-secondary transition-colors">
                    {product.icon}
                  </div>
                  <span className="px-space-sm py-1 bg-surface-container rounded font-label-micro text-label-micro text-on-surface-variant uppercase font-semibold">{product.badge}</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary font-bold mb-1">{product.name}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{product.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-space-lg">
                  {product.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-surface-container font-label-micro text-label-micro text-on-surface">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-space-sm">
                <span className="font-label-regular text-label-regular font-bold text-secondary group-hover:text-primary flex items-center gap-1">
                  Select Product <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">arrow_forward</span>
                </span>
                <span className={`material-symbols-outlined text-[20px] ${selectedProduct === product.id ? 'text-secondary' : 'text-outline-variant group-hover:text-secondary'}`}>check_circle</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Parameter CTA */}
      <Link to="/dairy/custom" className="group relative block w-full rounded-2xl bg-surface-container-low hover:bg-surface-container transition-all duration-200 p-space-lg shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-surface-container-highest group-hover:bg-primary-container group-hover:text-on-primary transition-colors flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined text-[24px]">tune</span>
            </div>
            <div>
              <div className="flex items-center gap-space-sm mb-0.5">
                <span className="font-headline-sm text-headline-sm text-primary font-bold">Don't see your product? Enter custom parameters</span>
                <span className="px-space-xs py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-label-micro text-label-micro font-bold uppercase">Screen 2.5</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">Configure moisture levels, fat percentage, pH dynamics, target temperature cycling, and custom shelf-life constraints.</p>
            </div>
          </div>
          <div className="flex items-center gap-space-xs text-secondary group-hover:text-primary font-headline-sm text-headline-sm font-semibold whitespace-nowrap self-end md:self-center">
            <span>Launch Configurator</span>
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">east</span>
          </div>
        </div>
      </Link>

      {/* Advisory Note */}
      <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-lowest flex items-start gap-space-sm shadow-sm">
        <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">verified_user</span>
        <div className="text-on-surface-variant font-body-sm text-body-sm">
          <strong className="font-semibold text-primary">Pre-calibrated Barrier Profiles:</strong> Selection instantly loads thermodynamic moisture sorption isotherms (GAB model) and lipid photo-oxidation constants into your active calculation session.
        </div>
      </div>
    </div>
  );
}
