import { Link, useNavigate } from 'react-router-dom';

const PRODUCT_IMAGE = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0ICOeaM7p_NRv42AdhoJrNvwjEm6g16kcvqtpQ7EfEvXw2iR7xQ98L6vw5agbaHH2jUih5cpS9Ls0TdDZjBd6-IXtx1Vzezq5_3JO7-qD0A_fxkQ5qR4pkz0SDXnoQeJk0Gxkba8mcZjkbCoQ7RchAVFK3Bttfb4WPq3CwyIp9-ajT2DWMSqe-ZjTvRwYLrQ9DKO2Cdl8p0pW36F5pzLVMKFZiJ30Q526aSfw6IjzkUeU8jsUNIA';

function StarRating({ filled, total = 5 }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={`material-symbols-outlined text-[18px] ${i < filled ? 'text-on-tertiary-container' : 'text-outline-variant'}`} style={i < filled ? { fontVariationSettings: "'FILL' 1" } : {}}>star</span>
      ))}
    </div>
  );
}

export default function RecommendationStandard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
        <div className="flex items-center gap-space-xs font-label-regular text-label-regular uppercase tracking-wider text-outline flex-wrap">
          <Link to="/dairy" className="hover:text-primary transition-colors cursor-pointer">Dairy</Link>
          <span className="text-outline-variant">/</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Milk (liquid)</span>
          <span className="text-outline-variant">/</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Temporary &amp; Chilled</span>
          <span className="text-outline-variant">/</span>
          <span className="text-secondary font-bold">Recommendation</span>
        </div>
        <button onClick={() => navigate('/dairy/custom')} className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-regular text-label-regular transition-all shadow-sm self-start md:self-auto" type="button">
          <span className="material-symbols-outlined text-[16px]">edit_note</span>
          <span>Edit Parameters</span>
        </button>
      </div>

      {/* Hero Recommendation Card */}
      <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm mb-space-lg relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
        <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-space-lg relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-container text-on-primary font-label-micro text-label-micro uppercase tracking-wider mb-space-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
              <span>Optimal Substrate Recommendation</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold mb-space-xs">Low-Density Polyethylene (LDPE) Pouch</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Three-side seal multi-layer co-extruded pouch for short-cycle chilled liquid dairy distribution.</p>
          </div>
          <div className="flex items-center gap-space-md self-start xl:self-center">
            <div className="h-20 w-32 rounded-lg bg-surface-container-low p-space-xs overflow-hidden relative group">
              <img className="w-full h-full object-cover rounded" src={PRODUCT_IMAGE} alt="LDPE Pouch product shot" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="flex flex-col font-label-micro text-label-micro text-outline">
              <span className="text-on-surface font-semibold">FORM FACTOR SPEC</span>
              <span>ASTM D882 Validated</span>
              <span>Pouch Geometry: 3-Side Seal</span>
            </div>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mt-space-lg">
          <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-label-micro text-label-micro uppercase tracking-wider text-outline">Barrier Performance</span>
                <StarRating filled={3} />
              </div>
              <div className="font-metric-display text-metric-display text-on-tertiary-container font-bold mb-space-xs">3 / 5</div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Adequate for 1-5 day refrigerated turnover</p>
          </div>
          <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-label-micro text-label-micro uppercase tracking-wider text-outline">Cost Efficiency</span>
                <StarRating filled={5} />
              </div>
              <div className="font-metric-display text-metric-display text-on-tertiary-container font-bold mb-space-xs">5 / 5</div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Lowest unit packaging cost among flexible formats</p>
          </div>
          <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-xs">
                <span className="font-label-micro text-label-micro uppercase tracking-wider text-outline">Sustainability</span>
                <StarRating filled={3} />
              </div>
              <div className="font-metric-display text-metric-display text-on-tertiary-container font-bold mb-space-xs">3 / 5</div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">Mono-material recyclable PE stream where municipal infrastructure exists</p>
          </div>
        </div>
      </div>

      {/* Why This Recommendation + Spec Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-lg">
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-space-xs mb-space-md">
              <div className="w-1.5 h-5 bg-secondary rounded-full"></div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Why This Recommendation</h3>
            </div>
            <div className="space-y-space-md">
              {[
                { icon: 'timer', bold: 'Short turnover duration (1-3 days)', text: 'mitigates cumulative oxygen degradation, eliminating the necessity for costly EVOH or aluminum barrier layers.' },
                { icon: 'ac_unit', bold: 'Chilled storage (2-6°C)', text: 'maintains microbial stability without requiring high-temperature retort or aseptic lamination.' },
                { icon: 'water_drop', bold: 'High moisture content', text: 'requires strong heat-seal hermetic integrity; LDPE provides superior seal-through-contamination characteristics.' },
                { icon: 'local_shipping', bold: 'Optimal lightweighting', text: 'minimizes carbon footprint during refrigerated urban transit routes.' },
              ].map((item) => (
                <div key={item.icon} className="flex items-start gap-space-sm">
                  <div className="p-1 rounded bg-secondary-fixed text-on-secondary-fixed flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface">
                    <span className="font-semibold text-primary">{item.bold}</span> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-space-lg p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-micro text-label-micro">
            <span className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified_user</span>
              Thermal Sealing Protocol: ASTM F88 Standard
            </span>
            <span className="font-semibold text-primary">Grade: Industrial Pack QA</span>
          </div>
        </div>

        {/* Specification Matrix */}
        <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-space-md">
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Specification Matrix</h3>
              <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-micro text-label-micro font-semibold uppercase">Calibrated</span>
            </div>
            <div className="divide-y divide-surface-container-high space-y-space-sm">
              {[
                { label: 'OTR (Oxygen Transmission)', sub: 'At 23°C, 0% RH', value: '85', unit: 'cc/m²/day' },
                { label: 'WVTR (Water Vapor)', sub: 'At 38°C, 90% RH', value: '6.8', unit: 'g/m²/day' },
                { label: 'Nominal Thickness', sub: 'Tolerance: 60-90 μm', value: '75', unit: 'microns' },
              ].map((spec) => (
                <div key={spec.label} className="pt-space-xs pb-space-xs flex justify-between items-start gap-space-sm">
                  <div>
                    <div className="font-label-micro text-label-micro uppercase tracking-wider text-outline">{spec.label}</div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">{spec.sub}</div>
                  </div>
                  <div className="font-headline-sm text-headline-sm text-primary text-right font-bold">
                    {spec.value} <span className="font-label-micro text-label-micro text-outline font-normal">{spec.unit}</span>
                  </div>
                </div>
              ))}
              <div className="pt-space-xs pb-space-xs flex justify-between items-start gap-space-sm">
                <div>
                  <div className="font-label-micro text-label-micro uppercase tracking-wider text-outline">Sealing / MAP</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">Thermal Hermetic Fin</div>
                </div>
                <div className="font-label-regular text-label-regular text-right font-semibold text-secondary max-w-[140px]">No Gas Flushing Req.</div>
              </div>
            </div>
          </div>
          <div className="mt-space-md pt-space-xs">
            <svg className="w-full h-10 text-on-tertiary-container" fill="none" preserveAspectRatio="none" viewBox="0 0 300 40">
              <path d="M0 35 C 50 35, 70 15, 120 20 C 170 25, 200 5, 300 18 L 300 40 L 0 40 Z" fill="currentColor" fillOpacity="0.12" />
              <path d="M0 35 C 50 35, 70 15, 120 20 C 170 25, 200 5, 300 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Secondary & Alternative Substrates */}
      <div className="mb-space-lg">
        <div className="flex items-center justify-between mb-space-sm">
          <h3 className="font-headline-sm text-headline-sm text-primary font-bold">Secondary &amp; Alternative Substrates</h3>
          <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider">Comparative Benchmarks</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-space-xs">
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">High-Density Polyethylene (HDPE) Bottle</h4>
                <span className="font-label-micro text-label-micro text-outline">Rigid Container Platform</span>
              </div>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-micro text-label-micro text-on-surface-variant font-semibold">Option A</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Higher mechanical rigidity and resealability, but <span className="font-semibold text-primary">+42% unit cost</span> and higher freight volume.</p>
            <div className="grid grid-cols-3 gap-space-xs bg-surface-container-low rounded-lg p-space-xs text-center">
              <div><div className="font-label-micro text-label-micro text-outline mb-0.5">Barrier</div><div className="text-on-tertiary-container font-semibold text-body-sm">★★★☆☆</div></div>
              <div><div className="font-label-micro text-label-micro text-outline mb-0.5">Cost</div><div className="text-on-tertiary-container font-semibold text-body-sm">★★★☆☆</div></div>
              <div><div className="font-label-micro text-label-micro text-outline mb-0.5">Sustain.</div><div className="text-on-tertiary-container font-semibold text-body-sm">★★★★☆</div></div>
            </div>
          </div>
          <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-space-xs">
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold">PET / PE Laminate Pouch</h4>
                <span className="font-label-micro text-label-micro text-outline">Multi-Substrate Flexible</span>
              </div>
              <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-micro text-label-micro text-on-surface-variant font-semibold">Option B</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Enhanced puncture resistance and gloss optics; slightly higher barrier but compromises mono-material recyclability.</p>
            <div className="grid grid-cols-3 gap-space-xs bg-surface-container-low rounded-lg p-space-xs text-center">
              <div><div className="font-label-micro text-label-micro text-outline mb-0.5">Barrier</div><div className="text-on-tertiary-container font-semibold text-body-sm">★★★★☆</div></div>
              <div><div className="font-label-micro text-label-micro text-outline mb-0.5">Cost</div><div className="text-on-tertiary-container font-semibold text-body-sm">★★★★☆</div></div>
              <div><div className="font-label-micro text-label-micro text-outline mb-0.5">Sustain.</div><div className="text-on-tertiary-container font-semibold text-body-sm">★★☆☆☆</div></div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-md mb-space-xl border-t border-surface-container">
        <div className="flex items-center gap-space-md w-full sm:w-auto">
          <button className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-headline-sm text-headline-sm font-semibold transition-all shadow-md active:scale-95" type="button">
            <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
            <span>Download Full Specification Report</span>
          </button>
          <button onClick={() => navigate('/suppliers')} className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-secondary font-label-regular text-label-regular font-bold transition-all" type="button">
            <span className="material-symbols-outlined text-[18px]">storefront</span>
            <span>Find Verified Suppliers</span>
          </button>
        </div>
        <Link to="/" className="inline-flex items-center gap-space-xs font-label-regular text-label-regular text-outline hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[16px]">restart_alt</span>
          <span>Start New Recommendation</span>
        </Link>
      </div>
    </div>
  );
}
