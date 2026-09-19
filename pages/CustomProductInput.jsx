import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BRANCHES = {
  paneer: {
    title: 'Vacuum Barrier Coextruded Pouch (Paneer-Grade)',
    classification: 'Tier 1 • High Moisture Substrate',
    otr: '< 1.0',
    otrUnit: 'cm³/m²·d',
    wvtr: '< 2.5',
    wvtrUnit: 'g/m²·d',
    suitability: '97.2',
    stack: '20µm PA (Nylon) Coex / 70µm High-Seal Toughness LLDPE with high puncture resistance against curd edges.',
    previewName: 'Vacuum Barrier Film',
    previewDesc: 'Optimized for acidic & high-water activity formulations.',
    advisory: false,
    ruleId: 'rule-paneer',
  },
  butter: {
    title: 'Alu-Foil Barrier Laminate (Butter & High-Fat)',
    classification: 'Tier 2 • Lipid Barrier Specification',
    otr: '< 0.05',
    otrUnit: 'cm³/m²·d',
    wvtr: '< 0.1',
    wvtrUnit: 'g/m²·d',
    suitability: '99.1',
    stack: '40g Pergament Greaseproof Paper / 9µm Aluminum Foil / 15g PE Extrusion coating to prevent rancidity.',
    previewName: 'O₂ Lipid Barrier Foil',
    previewDesc: 'Selected for high-fat auto-oxidation neutralization.',
    advisory: false,
    ruleId: 'rule-butter',
  },
  powder: {
    title: 'Hermetic Desiccant Foil Pouch (Powder-Grade)',
    classification: 'Tier 3 • Hygroscopic Protection',
    otr: '< 0.1',
    otrUnit: 'cm³/m²·d',
    wvtr: '< 0.05',
    wvtrUnit: 'g/m²·d',
    suitability: '98.8',
    stack: '12µm Metallized PET / 9µm Aluminum Foil / 60µm Anti-static LDPE for moisture-free particulate storage.',
    previewName: 'Desiccant Foil Laminate',
    previewDesc: 'Eliminates moisture caking across prolonged warehousing.',
    advisory: false,
    ruleId: 'rule-powder',
  },
  advisory: {
    title: 'Aseptic Multi-Layer Retort Structure (Advisory)',
    classification: 'Advisory State • Thermal Mitigation Required',
    otr: '< 0.3',
    otrUnit: 'cm³/m²·d',
    wvtr: '< 0.8',
    wvtrUnit: 'g/m²·d',
    suitability: '94.1',
    stack: '12µm PET / 9µm Alu Foil / 15µm Nylon / 80µm Retort-Grade CPP with thermoform-fill-seal geometry.',
    previewName: 'Aseptic Retort Laminate',
    previewDesc: 'Advisory: Microbial risk detected. Consider thermal mitigation.',
    advisory: true,
    ruleId: 'rule-advisory',
  },
  default: {
    title: 'Multi-Layer Coextruded High-Barrier Film',
    classification: 'Tier-A Compliance',
    otr: '< 0.5',
    otrUnit: 'cm³/m²·d',
    wvtr: '< 1.2',
    wvtrUnit: 'g/m²·d',
    suitability: '98.4',
    stack: 'Outer 12µm Biaxially-oriented PET / Adh / 15µm EVOH / Adh / 60µm Linear Low-Density Polyethylene (LLDPE) sealant web with peelable anti-fog additive.',
    previewName: 'Ready for Computation',
    previewDesc: 'Configure the matrix parameters above and initialize substrate calculation.',
    advisory: false,
    ruleId: null,
  },
};

export default function CustomProductInput() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    productName: '',
    moisture: 'medium',
    fat: 'medium',
    ph: 'mild',
    shelfLife: 'medium',
    humidity: 65,
    transportConditions: 'regional',
    storageType: 'long-term',
    storageTemp: 'chilled',
  });
  const [result, setResult] = useState(null);

  const handleChange = (name, value) => {
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const evaluateRecommendation = (e) => {
    e.preventDefault();
    const { moisture, fat, ph, shelfLife, storageType, storageTemp } = formState;

    let branch = 'default';
    if (moisture === 'high' && ph === 'acidic') branch = 'paneer';
    else if (fat === 'high') branch = 'butter';
    else if (moisture === 'low' && storageType === 'long-term') branch = 'powder';
    else if (storageTemp === 'ambient' && shelfLife === 'long') branch = 'advisory';

    setResult(BRANCHES[branch]);

    // Navigate to the appropriate recommendation page
    if (branch === 'advisory') {
      navigate('/recommendation/advisory');
    } else {
      navigate('/recommendation');
    }
  };

  const activeBranch = result?.ruleId;

  return (
    <div className="flex flex-col w-full">
      {/* Navigation & Breadcrumb */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-micro text-label-micro uppercase tracking-wider">
            <span>Categories</span>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <span>Dairy Products</span>
            <span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
            <span className="text-secondary font-bold">Custom Formulation</span>
          </div>
          <div className="flex items-center gap-space-sm mt-space-xs">
            <Link to="/dairy" className="inline-flex items-center gap-space-xs text-on-surface-variant hover:text-primary transition-colors font-label-regular text-label-regular group">
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-0.5">arrow_back</span>
              <span>Back to Dairy Products</span>
            </Link>
          </div>
        </div>
        <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs bg-surface-container rounded-full self-start md:self-auto shadow-sm">
          <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim"></span>
          <span className="font-label-micro text-label-micro uppercase text-on-surface-variant tracking-wider">Engine Mode: Substrate Simulation v3.4</span>
        </div>
      </div>

      {/* Hero Title */}
      <div className="mb-space-xl max-w-4xl">
        <div className="flex items-center gap-space-sm mb-space-xs">
          <span className="px-space-sm py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-micro text-label-micro font-bold tracking-widest uppercase">Spec Engine Calibrator</span>
          <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider">ID: CALIB-DAIRY-CUSTOM</span>
        </div>
        <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight font-bold">Custom Dairy Product — Enter Details</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">Specify thermodynamic and biochemical attributes to compute an algorithmic barrier recommendation.</p>
      </div>

      {/* Main Form */}
      <form className="w-full" onSubmit={evaluateRecommendation}>
        <div className="bg-surface-container-lowest rounded-[20px] shadow-[0_1px_3px_0_rgba(15,42,74,0.04),0_1px_2px_-1px_rgba(15,42,74,0.02)] p-space-lg md:p-space-xl mb-space-xl relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-gradient-to-br from-secondary-fixed/40 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl relative z-10">
            {/* LEFT: Biochemical */}
            <div className="flex flex-col gap-space-lg">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-space-sm">
                  <div className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[18px]">biotech</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Biochemical Composition</h2>
                </div>
                <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider">Sector 01</span>
              </div>

              {/* Product Name */}
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <label className="font-label-regular text-label-regular text-on-surface font-semibold" htmlFor="product-name">Product Name</label>
                  <span className="font-label-micro text-label-micro text-outline">Optional Reference</span>
                </div>
                <input className="w-full h-11 px-space-md font-body-md text-body-md text-primary bg-surface-container-low rounded-lg transition-all focus:outline-none focus:bg-surface-container-lowest shadow-inner" id="product-name" placeholder="e.g. Artisanal Ricotta, Cultured Buttermilk" type="text" value={formState.productName} onChange={(e) => handleChange('productName', e.target.value)} />
                <p className="font-label-micro text-label-micro text-on-surface-variant">Display-only identifier for custom reports and spec comparison sheets.</p>
              </div>

              {/* Moisture */}
              <SegmentedRadio label="Moisture Content %" tooltip="Affects water activity (aw) and hydrolytic degradation rate" name="moisture" value={formState.moisture} onChange={(v) => handleChange('moisture', v)} options={[{ value: 'low', label: 'Low (< 20%)' }, { value: 'medium', label: 'Medium (20 - 60%)' }, { value: 'high', label: 'High (> 60%)' }]} />

              {/* Fat */}
              <SegmentedRadio label="Oil / Fat Content %" tooltip="High fat formulations demand rigorous oxygen and lipid transmission resistance" name="fat" value={formState.fat} onChange={(v) => handleChange('fat', v)} options={[{ value: 'low', label: 'Low (< 5%)' }, { value: 'medium', label: 'Medium (5 - 20%)' }, { value: 'high', label: 'High (> 20%)' }]} />

              {/* pH */}
              <SegmentedRadio label="pH Level & Acidity Profile" tooltip="Dictates microbial vulnerability and delamination risks under acidic whey separation" name="ph" value={formState.ph} onChange={(v) => handleChange('ph', v)} options={[{ value: 'acidic', label: 'Acidic (< 4.6)' }, { value: 'mild', label: 'Mild (4.6 - 6.5)' }, { value: 'neutral', label: 'Neutral (> 6.5)' }]} />

              {/* Context Panel */}
              <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-md mt-space-xs">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-[20px]">science</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-regular text-label-regular font-bold text-on-surface">Dairy Matrix Sensitivity</span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Lactic cultures and protein fractions are susceptible to photo-oxidation and oxidative rancidity. Higher moisture ratios escalate Water Vapor Transmission (WVTR) criticality.</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Logistics */}
            <div className="flex flex-col gap-space-lg">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-space-sm">
                  <div className="w-7 h-7 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[18px]">thermostat</span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Logistics &amp; Atmosphere</h2>
                </div>
                <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider">Sector 02</span>
              </div>

              {/* Shelf Life */}
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-regular text-label-regular text-on-surface font-semibold" htmlFor="shelf-life">Desired Shelf Life Target</label>
                <div className="relative">
                  <select className="w-full h-11 px-space-md pr-10 font-body-md text-body-md text-primary bg-surface-container-low rounded-lg transition-all appearance-none cursor-pointer focus:outline-none focus:bg-surface-container-lowest shadow-inner" id="shelf-life" value={formState.shelfLife} onChange={(e) => handleChange('shelfLife', e.target.value)}>
                    <option value="short">Short (&lt; 7 days)</option>
                    <option value="medium">Medium (1 - 4 weeks)</option>
                    <option value="long">Long (&gt; 1 month)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">expand_more</span>
                </div>
              </div>

              {/* Humidity Slider */}
              <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <label className="font-label-regular text-label-regular text-on-surface font-semibold" htmlFor="humidity-slider">Relative Humidity % (Storage Environment)</label>
                    <span className="font-label-micro text-label-micro text-outline">Ambient chamber saturation</span>
                  </div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="font-metric-display text-metric-display text-on-tertiary-container tabular-nums font-bold">{formState.humidity}</span>
                    <span className="font-label-regular text-label-regular font-bold text-on-tertiary-container">%</span>
                  </div>
                </div>
                <div className="py-space-xs">
                  <input className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer" id="humidity-slider" max="100" min="0" type="range" value={formState.humidity} onChange={(e) => handleChange('humidity', parseInt(e.target.value))} />
                </div>
                <div className="flex justify-between text-outline font-label-micro text-label-micro">
                  <span>0% Arid</span>
                  <span>50% Controlled</span>
                  <span>100% Saturated</span>
                </div>
              </div>

              {/* Transport */}
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-regular text-label-regular text-on-surface font-semibold" htmlFor="transport-conditions">Transportation Conditions</label>
                <div className="relative">
                  <select className="w-full h-11 px-space-md pr-10 font-body-md text-body-md text-primary bg-surface-container-low rounded-lg transition-all appearance-none cursor-pointer focus:outline-none focus:bg-surface-container-lowest shadow-inner" id="transport-conditions" value={formState.transportConditions} onChange={(e) => handleChange('transportConditions', e.target.value)}>
                    <option value="local">Local Distribution</option>
                    <option value="regional">Regional Distribution</option>
                    <option value="cold-chain">Long-haul Cold Chain</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[20px]">expand_more</span>
                </div>
              </div>

              {/* Storage Type Cards */}
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-regular text-label-regular text-on-surface font-semibold">Storage Type &amp; Facility Protocol</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                  {[
                    { value: 'temporary', icon: 'inventory', label: 'Temporary', desc: 'Fast turnover spec' },
                    { value: 'long-term', icon: 'warehouse', label: 'Long-Term', desc: 'Extended warehousing' },
                    { value: 'transportation', icon: 'local_shipping', label: 'Transit', desc: 'Vibration & flex crack' },
                  ].map((opt) => (
                    <label key={opt.value} className="cursor-pointer group relative">
                      <input className="sr-only peer" name="storageType" type="radio" value={opt.value} checked={formState.storageType === opt.value} onChange={() => handleChange('storageType', opt.value)} />
                      <div className="p-space-md rounded-xl bg-surface-container-low group-hover:bg-surface-container transition-all flex flex-col justify-between h-full peer-checked:bg-secondary/10 peer-checked:shadow-sm">
                        <div className="flex items-center justify-between mb-space-sm">
                          <span className={`material-symbols-outlined text-[22px] ${formState.storageType === opt.value ? 'text-secondary' : 'text-on-surface-variant'}`}>{opt.icon}</span>
                          <span className={`w-3.5 h-3.5 rounded-full inline-block ${formState.storageType === opt.value ? 'bg-secondary' : 'bg-surface-container'}`}></span>
                        </div>
                        <div>
                          <span className="font-label-regular text-label-regular font-bold text-on-surface block">{opt.label}</span>
                          <span className="font-label-micro text-label-micro text-on-surface-variant block mt-0.5">{opt.desc}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Storage Temperature */}
              <SegmentedRadio label="Storage Temperature Regimen" name="storageTemp" value={formState.storageTemp} onChange={(v) => handleChange('storageTemp', v)} options={[{ value: 'ambient', label: 'Ambient (20 - 30°C)' }, { value: 'chilled', label: 'Chilled (2 - 6°C)' }, { value: 'frozen', label: 'Frozen (< -18°C)' }]} />
            </div>
          </div>

          {/* Form Footer */}
          <div className="mt-space-xl p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[20px] text-outline flex-shrink-0">info</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Recommendation logic uses simplified rule-based matching for custom inputs based on codified ASTM F1249 &amp; ISO 15105-2 standards.</span>
            </div>
            <div className="flex items-center gap-space-xs font-label-micro text-label-micro text-outline self-start sm:self-auto uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>Validated Heuristics</span>
            </div>
          </div>
        </div>

        {/* Inference Matrix & Action Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
          <div className="lg:col-span-8 bg-surface-container-lowest p-space-lg rounded-[20px] shadow-[0_1px_3px_0_rgba(15,42,74,0.04)]">
            <div className="flex items-center justify-between mb-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-[20px] text-secondary">account_tree</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">Inference Matrix &amp; Rule Pathways</h3>
              </div>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface-variant font-label-micro text-label-micro uppercase font-semibold">Evaluator Node</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm font-label-regular text-label-regular">
              {[
                { id: 'rule-paneer', title: 'Path A: Vacuum Barrier Film', tier: 'Tier 1', desc: 'Moisture High + pH Acidic → Multi-layer coextruded PA/PE vacuum barrier.' },
                { id: 'rule-butter', title: 'Path B: O₂-Barrier Foil Laminate', tier: 'Tier 2', desc: 'Fat High → Metallized or EVOH lipid protective barrier pouch.' },
                { id: 'rule-powder', title: 'Path C: Desiccant Foil Pouch', tier: 'Tier 3', desc: 'Moisture Low + Storage Long-Term → Aluminum foil hermetic envelope.' },
                { id: 'rule-advisory', title: 'State Warning: Shelf Degradation', tier: 'Amber', desc: 'Ambient Temp + Shelf Life Long → High microbial spoilage advisory alert.' },
              ].map((rule) => (
                <div key={rule.id} className={`p-space-sm rounded-lg transition-all ${activeBranch === rule.id ? (rule.id === 'rule-advisory' ? 'bg-[#FFFBEB] font-bold text-[#92400E]' : 'bg-secondary-fixed/50 font-bold') : 'bg-surface-container-low'}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-on-surface">{rule.title}</span>
                    <span className="font-label-micro text-label-micro text-outline">{rule.tier}</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-primary text-on-primary p-space-lg rounded-[20px] shadow-lg">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-micro text-label-micro uppercase tracking-widest text-on-primary-container">Substrate Resolution</span>
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim animate-pulse"></span>
              </div>
              <div className="mt-space-xs">
                <span className="font-headline-sm text-headline-sm font-bold text-white block">{result?.previewName || 'Ready for Computation'}</span>
                <span className="font-body-sm text-body-sm text-secondary-fixed mt-1 block">{result?.previewDesc || 'Configure the matrix parameters above and initialize substrate calculation.'}</span>
              </div>
            </div>
            <div className="pt-space-lg mt-space-md">
              <button className="w-full h-12 bg-surface-container-lowest text-primary hover:bg-secondary-fixed font-headline-sm text-headline-sm font-bold rounded-xl flex items-center justify-center gap-space-sm transition-all shadow-md group" type="submit">
                <span>Get Recommendation</span>
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Result Panel */}
        {result && (
          <div className="transition-all duration-300">
            <div className="p-space-lg md:p-space-xl rounded-[20px] bg-surface-container-lowest shadow-[0_10px_25px_-5px_rgba(15,42,74,0.08)] mb-space-xl">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md pb-space-lg mb-space-lg">
                <div className="flex items-center gap-space-md">
                  <div className="w-14 h-14 rounded-2xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                    <span className="material-symbols-outlined text-[32px]">layers</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-space-xs">
                      <span className="px-space-sm py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-label-micro text-label-micro uppercase font-bold">Algorithmic Match</span>
                      <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider">{result.classification}</span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-0.5">{result.title}</h2>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm">
                  <button className="px-space-md py-space-sm rounded-lg bg-surface-container-low text-primary hover:bg-surface-container transition-colors font-label-regular text-label-regular font-bold flex items-center gap-space-xs" type="button">
                    <span className="material-symbols-outlined text-[18px]">print</span>
                    <span>Export Spec Sheet</span>
                  </button>
                  <button className="px-space-md py-space-sm rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-label-regular text-label-regular font-bold flex items-center gap-space-xs shadow-sm" type="button">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Accept &amp; Save Formula</span>
                  </button>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md mb-space-lg">
                <MetricCard label="Oxygen Transmission (OTR)" value={result.otr} unit={result.otrUnit} sub="Target standard @ 23°C, 0% RH" />
                <MetricCard label="Water Vapor Rate (WVTR)" value={result.wvtr} unit={result.wvtrUnit} sub="Target standard @ 38°C, 90% RH" />
                <div className="p-space-md rounded-xl bg-surface-container-low">
                  <span className="font-label-micro text-label-micro uppercase tracking-wider text-outline block">Calculated Barrier Index</span>
                  <span className="font-metric-display text-metric-display text-secondary font-bold block mt-1">{result.suitability}<span className="font-label-regular text-label-regular text-outline font-normal">/100</span></span>
                  <span className="font-label-micro text-label-micro text-on-surface-variant block mt-1">Empirical stability index</span>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-low">
                  <span className="font-label-micro text-label-micro uppercase tracking-wider text-outline block">Recyclability Rating</span>
                  <div className="flex items-center gap-1 mt-2">
                    {[1, 2, 3, 4].map((i) => (<span key={i} className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>))}
                    <span className="material-symbols-outlined text-outline-variant text-[20px]">star</span>
                  </div>
                  <span className="font-label-micro text-label-micro text-on-surface-variant block mt-1">Mono-PE structure ready</span>
                </div>
              </div>

              {/* Advisory Callout */}
              {result.advisory && (
                <div className="p-space-md rounded-xl bg-[#FFFBEB] text-[#92400E] shadow-sm mb-space-lg">
                  <div className="flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-[#C9822B] text-[22px] flex-shrink-0">warning</span>
                    <div className="flex flex-col">
                      <span className="font-label-regular text-label-regular font-bold uppercase tracking-wider text-[#C9822B]">System Advisory: Kinetic Accelerated Spoilage Risk</span>
                      <p className="font-body-sm text-body-sm text-[#92400E] mt-0.5">Ambient storage paired with prolonged shelf targets (&gt;30 days) exceeds microbial boundary curves without aseptic retorting or secondary thermal sterilization. Consider reducing target shelf duration or integrating active oxygen scavengers.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Substrate Stack */}
              <div className="mt-space-lg p-space-md rounded-xl bg-surface-container-low">
                <h4 className="font-label-regular text-label-regular font-bold text-on-surface uppercase tracking-wider mb-space-xs">Recommended Substrate Stack</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{result.stack}</p>
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

function SegmentedRadio({ label, tooltip, name, value, onChange, options }) {
  return (
    <div className="flex flex-col gap-space-xs">
      <label className="font-label-regular text-label-regular text-on-surface font-semibold flex items-center gap-space-xs">
        <span>{label}</span>
        {tooltip && <span className="material-symbols-outlined text-[15px] text-outline" title={tooltip}>info</span>}
      </label>
      <div className="grid grid-cols-3 gap-space-xs p-1 bg-surface-container rounded-lg">
        {options.map((opt) => (
          <label key={opt.value} className="cursor-pointer">
            <input className="sr-only peer" name={name} type="radio" value={opt.value} checked={value === opt.value} onChange={() => onChange(opt.value)} />
            <div className="px-space-sm py-space-sm text-center rounded-lg font-label-regular text-label-regular text-on-surface-variant transition-all peer-checked:bg-surface-container-lowest peer-checked:text-primary peer-checked:shadow-sm peer-checked:font-bold hover:text-on-surface">
              {opt.label}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

function MetricCard({ label, value, unit, sub }) {
  return (
    <div className="p-space-md rounded-xl bg-surface-container-low">
      <span className="font-label-micro text-label-micro uppercase tracking-wider text-outline block">{label}</span>
      <span className="font-metric-display text-metric-display text-on-tertiary-container font-bold block mt-1">
        {value} <span className="font-label-regular text-label-regular text-outline font-normal">{unit}</span>
      </span>
      <span className="font-label-micro text-label-micro text-on-surface-variant block mt-1">{sub}</span>
    </div>
  );
}
