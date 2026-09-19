import { useNavigate } from 'react-router-dom';
import { useToast } from '../components/ui/Toast';

const disabledCategories = [
  {
    name: 'Grains & Cereals',
    desc: 'Dry bulk storage, moisture ingress risks, and insect puncture barrier requirements.',
    toast: 'Grains & Cereals module is currently undergoing sorption isotherm validation.',
    spec: 'WVTR Profiling',
    status: 'Calibration In Progress',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 44V26" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M24 26C24 26 21 21 16 22C11 23 12 29 17 29C22 29 24 26 24 26Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
        <path d="M24 20C24 20 27 15 32 16C37 17 36 23 31 23C26 23 24 20 24 20Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
        <path d="M24 14C24 14 21 9 16 10C11 11 12 17 17 17C22 17 24 14 24 14Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
        <path d="M24 8C24 8 26 3 30 4C34 5 33 11 29 11C25 11 24 8 24 8Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Meat & Poultry',
    desc: 'High water activity, vacuum barrier specs, and modified atmosphere packaging (MAP).',
    toast: 'Meat & Poultry MAP engine is in peer-review packaging calibration.',
    spec: 'Gas Flushed Specs',
    status: 'Dataset Beta',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 12C22 8 34 10 38 18C42 26 38 34 32 38C26 42 16 40 12 34C8 28 10 16 16 12Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.5" />
        <path d="M22 22C24 20 28 20 30 22C32 24 32 28 30 30C28 32 24 32 22 30C20 28 20 24 22 22Z" stroke="currentColor" strokeWidth="2" />
        <path d="M12 34L6 40" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    name: 'Fresh Fruits & Vegetables',
    desc: 'Respiration rate equilibrium, micro-perforation, and anti-fog barrier parameters.',
    toast: 'Fresh Produce EMAP module arriving in next quarterly calibration.',
    spec: 'Perforation Index',
    status: 'Pre-flight Model',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 10C18 10 10 16 10 26C10 35 18 42 24 42C30 42 38 35 38 26C38 16 30 10 24 10Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 6V10" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
        <path d="M24 10C28 10 32 6 34 6" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        <path d="M24 18C21 21 21 27 24 30" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'Beverages',
    desc: 'Aseptic barrier laminates, carbonation retention dynamics, and UV degradation shields.',
    toast: 'Beverages aseptic model queue is currently locked for verification.',
    spec: 'Laminate Tensile',
    status: 'Awaiting Rigor Test',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8H30V14L32 18V40C32 41.1046 31.1046 42 30 42H18C16.8954 42 16 41.1046 16 40V18L18 14V8Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.5" />
        <path d="M16 26H32" stroke="currentColor" strokeWidth="2" />
        <path d="M22 8V5H26V8" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        <path d="M24 32V36" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function CategorySelection() {
  const navigate = useNavigate();
  const { showToast } = useToast();

  return (
    <div className="flex flex-col gap-space-xl max-w-7xl mx-auto w-full pb-16">
      {/* Hero Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pt-space-xs">
        <div className="flex flex-col max-w-3xl">
          <div className="flex items-center gap-space-xs mb-space-xs">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-micro text-label-micro text-secondary tracking-widest uppercase">Spec Engine Module v2.4</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-primary-container tracking-tight">Select Food Category</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
            SmartPack AI evaluates shelf-life risks, moisture migration, barrier parameters, and regulatory compliance to recommend optimal food packaging specifications.
          </p>
        </div>
        <div className="flex items-center gap-space-md self-start lg:self-auto bg-surface-container-low px-space-md py-space-sm rounded-xl">
          <div className="flex flex-col">
            <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider">Engine Calibration</span>
            <span className="font-label-regular text-label-regular text-on-surface font-semibold flex items-center gap-space-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-ping"></span>
              FDA 21 CFR / FSSAI 2024
            </span>
          </div>
          <div className="h-6 w-px bg-surface-container-highest"></div>
          <div className="flex flex-col">
            <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider">Active Modules</span>
            <span className="font-label-regular text-label-regular text-primary-container font-semibold">1 Available · 4 Queued</span>
          </div>
        </div>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
        {/* Active Dairy Card */}
        <div className="group relative flex flex-col justify-between bg-surface-container-lowest rounded-[18px] p-space-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-secondary"></div>
          <div>
            <div className="flex items-start justify-between gap-space-sm">
              <div className="w-14 h-14 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary shadow-sm">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 14V38C14 40.2091 15.7909 42 18 42H24C26.2091 42 28 40.2091 28 38V14L25 10H17L14 14Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.5" />
                  <path d="M17 10V6H25V10" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
                  <path d="M14 22H28" stroke="currentColor" strokeDasharray="2 2" strokeWidth="2" />
                  <path d="M26 27L42 22V36C42 38.2091 40.2091 40 38 40H28L26 27Z" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.5" />
                  <circle cx="34" cy="30" fill="currentColor" r="2" />
                  <circle cx="38" cy="33" fill="currentColor" r="1.5" />
                </svg>
              </div>
              <span className="inline-flex items-center gap-1.5 px-space-sm py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-micro text-label-micro uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                Active System Available
              </span>
            </div>
            <div className="mt-space-md">
              <h3 className="font-headline-md text-headline-md text-primary-container font-bold group-hover:text-secondary transition-colors">Dairy Products</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                High moisture, microbial sensitivity, fat oxidation, and cold-chain dependencies.
              </p>
            </div>
            <div className="mt-space-md pt-space-md bg-surface-container-low/70 -mx-space-lg px-space-lg py-space-sm flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-label-micro text-label-micro text-outline uppercase">Target Barrier</span>
                <span className="font-label-regular text-label-regular text-primary-container font-bold">OTR &lt; 0.5 cc/m²/day</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="font-label-micro text-label-micro text-outline uppercase">Substrates</span>
                <span className="font-label-regular text-label-regular text-on-tertiary-container font-bold">18 Evaluated</span>
              </div>
            </div>
          </div>
          <div className="mt-space-lg pt-space-xs">
            <button
              onClick={() => navigate('/dairy')}
              className="w-full inline-flex items-center justify-center gap-space-sm bg-primary-container hover:bg-primary text-on-primary font-headline-sm text-headline-sm px-space-md py-3 rounded-lg shadow-sm hover:shadow transition-all group-hover:bg-secondary"
            >
              <span>Configure Specifications</span>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Disabled Category Cards */}
        {disabledCategories.map((cat) => (
          <div
            key={cat.name}
            className="cursor-pointer group relative flex flex-col justify-between bg-surface-container-low rounded-[18px] p-space-lg shadow-sm hover:bg-surface-container transition-all duration-200"
            onClick={() => showToast(cat.toast)}
          >
            <div>
              <div className="flex items-start justify-between gap-space-sm">
                <div className="w-14 h-14 rounded-xl bg-surface-variant flex items-center justify-center text-outline">
                  {cat.icon}
                </div>
                <span className="inline-flex items-center px-space-sm py-space-xs rounded bg-surface-variant text-on-surface-variant font-label-micro text-label-micro uppercase tracking-wider font-semibold">
                  COMING SOON
                </span>
              </div>
              <div className="mt-space-md">
                <h3 className="font-headline-md text-headline-md text-on-surface/80 font-bold">{cat.name}</h3>
                <p className="font-body-md text-body-md text-outline mt-space-xs leading-relaxed">{cat.desc}</p>
              </div>
            </div>
            <div className="mt-space-lg flex items-center justify-between pt-space-md text-outline">
              <span className="font-label-micro text-label-micro uppercase tracking-wider">{cat.spec}</span>
              <span className="font-body-sm text-body-sm font-semibold flex items-center gap-1 group-hover:text-on-surface transition-colors">
                {cat.status}
                <span className="material-symbols-outlined text-[16px]">lock</span>
              </span>
            </div>
          </div>
        ))}

        {/* Custom Formulation CTA Card */}
        <div className="relative flex flex-col justify-between bg-primary-container text-on-primary rounded-[18px] p-space-lg shadow-lg overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-secondary/30 blur-2xl pointer-events-none"></div>
          <div>
            <span className="inline-flex items-center gap-1.5 px-space-sm py-space-xs rounded-full bg-primary text-secondary-fixed font-label-micro text-label-micro uppercase tracking-wider font-semibold">
              <span className="material-symbols-outlined text-[14px]">tune</span>
              Multi-Matrix Engine
            </span>
            <h4 className="font-headline-md text-headline-md text-on-primary font-bold mt-space-md">Have a custom formulation?</h4>
            <p className="font-body-sm text-body-sm text-on-primary-container mt-space-xs leading-relaxed">
              Enterprise labs can upload gas transmission parameters (WVTR, OTR, puncture index) directly for custom multilayer substrate synthesis.
            </p>
          </div>
          <div className="mt-space-lg pt-space-md flex items-center justify-between">
            <div className="flex items-center gap-space-xs text-on-primary-container font-label-micro text-label-micro">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">verified_user</span>
              ISO 15105 Validated
            </div>
            <button
              className="px-space-md py-space-xs rounded-lg bg-secondary hover:bg-secondary/90 text-on-primary font-label-regular text-label-regular font-semibold transition-colors"
              onClick={() => showToast('Custom formulation telemetry requested. QA lead will review.')}
              type="button"
            >
              Upload CSV/JSON
            </button>
          </div>
        </div>
      </div>

      {/* Regulatory Verification Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg relative z-10">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-container flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[28px]">verified</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider font-semibold">Regulatory Verification</span>
              <p className="font-headline-sm text-headline-sm text-primary-container font-bold">
                Database containing 1,400+ validated packaging barrier specs
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Full harmonization with FDA 21 CFR §177, EU Framework Regulation 1935/2004, and FSSAI Packaging Standards 2024.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-space-md self-end md:self-auto flex-shrink-0">
            <div className="flex flex-col text-right">
              <span className="font-metric-display text-metric-display text-on-tertiary-container font-bold leading-none">99.4%</span>
              <span className="font-label-micro text-label-micro text-outline uppercase mt-1">Barrier Model Confidence</span>
            </div>
            <div className="h-10 w-px bg-surface-container-high hidden sm:block"></div>
            <div className="flex flex-col text-right hidden sm:flex">
              <span className="font-metric-display text-metric-display text-secondary font-bold leading-none">1.4k+</span>
              <span className="font-label-micro text-label-micro text-outline uppercase mt-1">Substrate Pairs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

