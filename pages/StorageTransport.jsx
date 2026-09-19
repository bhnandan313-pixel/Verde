import { Link } from 'react-router-dom';

const conditions = [
  {
    icon: 'ac_unit',
    title: 'Cold Chain Requirements',
    temp: '2 – 6°C',
    details: [
      { label: 'Transport Duration', value: '< 48 hours optimal' },
      { label: 'Temperature Excursion', value: '± 2°C tolerance' },
      { label: 'Monitoring', value: 'IoT logger recommended' },
    ],
    color: 'bg-secondary-fixed',
    textColor: 'text-on-secondary-fixed',
  },
  {
    icon: 'warehouse',
    title: 'Warehouse Storage',
    temp: '4 – 8°C',
    details: [
      { label: 'Humidity Control', value: '65 – 75% RH' },
      { label: 'Stacking Load', value: '< 12 kg per layer' },
      { label: 'Light Exposure', value: 'UV-filtered minimum' },
    ],
    color: 'bg-tertiary-fixed/30',
    textColor: 'text-on-tertiary-container',
  },
  {
    icon: 'local_shipping',
    title: 'Transit Conditions',
    temp: 'Controlled',
    details: [
      { label: 'Vibration Rating', value: 'ASTM D4169 Level II' },
      { label: 'Drop Height', value: '76 cm (30 in)' },
      { label: 'Compression', value: '22 N/cm² max' },
    ],
    color: 'bg-surface-container',
    textColor: 'text-on-surface',
  },
];

const guidelines = [
  { icon: 'thermostat', title: 'Temperature Mapping', desc: 'Conduct quarterly temperature distribution studies across storage facilities to identify hot spots and cold zones per FDA 21 CFR Part 211.' },
  { icon: 'water_drop', title: 'Humidity Management', desc: 'Maintain HVAC dehumidification to prevent condensation on package surfaces which accelerates microbial growth and label delamination.' },
  { icon: 'speed', title: 'Shelf Life Monitoring', desc: 'Implement FIFO (First In, First Out) rotation protocol with TTI (Time-Temperature Indicators) on outer cartons for real-time freshness tracking.' },
  { icon: 'shield', title: 'Packaging Integrity', desc: 'Visual inspection at receiving and before dispatch for seal integrity, puncture damage, and bloating indicators using sampling plan per AQL 1.0.' },
];

export default function StorageTransport() {
  return (
    <div className="flex flex-col w-full">
      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-space-md mb-space-lg">
        <div className="flex items-center gap-space-sm font-label-regular text-label-regular">
          <Link to="/recommendation" className="text-secondary hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Back to Recommendation</span>
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-bold">Storage &amp; Transport Conditions</span>
        </div>
      </div>

      {/* Hero */}
      <div className="mb-space-xl max-w-4xl">
        <div className="flex items-center gap-space-sm mb-space-xs">
          <span className="px-space-sm py-0.5 rounded bg-primary-container text-on-primary-container font-label-micro text-label-micro uppercase tracking-wider font-bold">Logistics Intelligence</span>
        </div>
        <h1 className="font-display-hero text-display-hero text-primary tracking-tight font-bold mb-space-sm">Storage &amp; Transport Conditions</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Optimal handling, storage, and transport parameters for LDPE pouch packaging in chilled dairy distribution.</p>
      </div>

      {/* Condition Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg mb-space-xl">
        {conditions.map((cond) => (
          <div key={cond.title} className="bg-surface-container-lowest rounded-[18px] p-space-lg shadow-sm hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-space-md">
              <div className={`w-12 h-12 rounded-xl ${cond.color} flex items-center justify-center ${cond.textColor} flex-shrink-0`}>
                <span className="material-symbols-outlined text-[24px]">{cond.icon}</span>
              </div>
              <span className="font-metric-display text-metric-display text-on-tertiary-container font-bold">{cond.temp}</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary font-bold mb-space-md">{cond.title}</h3>
            <div className="space-y-space-sm">
              {cond.details.map((detail) => (
                <div key={detail.label} className="flex justify-between items-center py-space-xs border-b border-surface-container-high last:border-0">
                  <span className="font-label-micro text-label-micro uppercase tracking-wider text-outline">{detail.label}</span>
                  <span className="font-label-regular text-label-regular font-bold text-primary">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Guidelines */}
      <div className="bg-surface-container-lowest rounded-[20px] p-space-lg shadow-sm mb-space-xl">
        <div className="flex items-center gap-space-sm mb-space-lg">
          <div className="w-1.5 h-5 bg-secondary rounded-full"></div>
          <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Handling Guidelines</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {guidelines.map((g) => (
            <div key={g.title} className="flex items-start gap-space-md p-space-md rounded-xl bg-surface-container-low">
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed flex-shrink-0">
                <span className="material-symbols-outlined text-[22px]">{g.icon}</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary font-bold mb-space-xs">{g.title}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Banner */}
      <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex items-center gap-space-md">
        <div className="w-12 h-12 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-container flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-[28px]">verified</span>
        </div>
        <div>
          <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider font-semibold">Compliance Standard</span>
          <p className="font-headline-sm text-headline-sm text-primary-container font-bold">All storage and transport conditions validated per FSSAI Part V Schedule 4 and EU Regulation 37/2005</p>
        </div>
      </div>
    </div>
  );
}
