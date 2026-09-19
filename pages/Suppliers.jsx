import { Link } from 'react-router-dom';

const suppliers = [
  {
    name: 'FlexiPack Industries Pvt. Ltd.',
    location: 'Pune, Maharashtra',
    distance: '12 km',
    specialization: 'LDPE / LLDPE Flexible Pouches',
    certifications: ['ISO 9001:2015', 'BRC Packaging', 'FSSAI Compliant'],
    capacity: '50,000 pouches/day',
    leadTime: '5-7 business days',
    rating: 4,
    verified: true,
  },
  {
    name: 'BarrierTech Laminates',
    location: 'Ahmedabad, Gujarat',
    distance: '380 km',
    specialization: 'Multi-layer Barrier Laminates',
    certifications: ['ISO 22000', 'FDA Registered', 'NABL Accredited'],
    capacity: '120,000 units/day',
    leadTime: '10-14 business days',
    rating: 5,
    verified: true,
  },
  {
    name: 'EcoPack Solutions',
    location: 'Bengaluru, Karnataka',
    distance: '840 km',
    specialization: 'Sustainable Mono-material PE Films',
    certifications: ['ISO 14001', 'SEDEX', 'Cradle to Cradle Silver'],
    capacity: '75,000 units/day',
    leadTime: '7-10 business days',
    rating: 4,
    verified: true,
  },
  {
    name: 'National Dairy Packaging Corp.',
    location: 'Delhi NCR',
    distance: '1,400 km',
    specialization: 'UHT & Aseptic Dairy Containers',
    certifications: ['ISO 9001', 'FSSC 22000', 'GMP Certified'],
    capacity: '200,000 units/day',
    leadTime: '14-21 business days',
    rating: 3,
    verified: false,
  },
];

export default function Suppliers() {
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
          <span className="text-primary font-bold">Nearby Packaging Manufacturers</span>
        </div>
      </div>

      {/* Hero */}
      <div className="mb-space-xl max-w-4xl">
        <div className="flex items-center gap-space-sm mb-space-xs">
          <span className="px-space-sm py-0.5 rounded bg-primary-container text-on-primary-container font-label-micro text-label-micro uppercase tracking-wider font-bold">Supplier Discovery</span>
          <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider">For: LDPE Pouch Specification</span>
        </div>
        <h1 className="font-display-hero text-display-hero text-primary tracking-tight font-bold mb-space-sm">Nearby Packaging Manufacturers</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Verified suppliers with capacity to manufacture your recommended LDPE pouch specification. Sorted by proximity and certification relevance.</p>
      </div>

      {/* Filters Bar */}
      <div className="flex items-center gap-space-md mb-space-lg p-space-md bg-surface-container-lowest rounded-xl shadow-sm">
        <div className="flex items-center gap-space-sm flex-1">
          <span className="material-symbols-outlined text-[20px] text-outline">filter_list</span>
          <span className="font-label-regular text-label-regular text-on-surface font-semibold">Filters:</span>
          <span className="px-space-sm py-space-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-micro text-label-micro font-bold">LDPE Compatible</span>
          <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-micro text-label-micro">Verified Only</span>
          <span className="px-space-sm py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-micro text-label-micro">Proximity Sort</span>
        </div>
        <span className="font-label-micro text-label-micro text-outline uppercase tracking-wider">{suppliers.length} results</span>
      </div>

      {/* Supplier Cards */}
      <div className="flex flex-col gap-space-lg mb-space-xl">
        {suppliers.map((supplier, index) => (
          <div key={supplier.name} className="bg-surface-container-lowest rounded-[18px] p-space-lg shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-space-lg">
              <div className="flex-1">
                <div className="flex items-start gap-space-md mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary flex-shrink-0">
                    <span className="material-symbols-outlined text-[24px]">factory</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-space-sm mb-space-xs">
                      <h3 className="font-headline-md text-headline-md text-primary font-bold">{supplier.name}</h3>
                      {supplier.verified && (
                        <span className="inline-flex items-center gap-1 px-space-sm py-0.5 rounded-full bg-tertiary-fixed/30 text-on-tertiary-container font-label-micro text-label-micro font-bold">
                          <span className="material-symbols-outlined text-[14px]">verified</span>
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                        {supplier.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">directions</span>
                        {supplier.distance}
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
                      <span className="font-semibold text-primary">Specialization:</span> {supplier.specialization}
                    </p>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-1.5 mb-space-md">
                  {supplier.certifications.map((cert) => (
                    <span key={cert} className="px-2 py-0.5 rounded bg-surface-container font-label-micro text-label-micro text-on-surface">{cert}</span>
                  ))}
                </div>
              </div>

              {/* Right Column - Specs & Actions */}
              <div className="flex flex-col gap-space-md lg:min-w-[240px]">
                <div className="grid grid-cols-2 gap-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-low">
                    <span className="font-label-micro text-label-micro uppercase tracking-wider text-outline block">Capacity</span>
                    <span className="font-label-regular text-label-regular text-primary font-bold block mt-0.5">{supplier.capacity}</span>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low">
                    <span className="font-label-micro text-label-micro uppercase tracking-wider text-outline block">Lead Time</span>
                    <span className="font-label-regular text-label-regular text-primary font-bold block mt-0.5">{supplier.leadTime}</span>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                  <span className="font-label-micro text-label-micro uppercase tracking-wider text-outline">Rating</span>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={`material-symbols-outlined text-[18px] ${i < supplier.rating ? 'text-on-tertiary-container' : 'text-outline-variant'}`} style={i < supplier.rating ? { fontVariationSettings: "'FILL' 1" } : {}}>star</span>
                    ))}
                  </div>
                </div>
                <button className="w-full inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-regular text-label-regular font-bold transition-all shadow-sm" type="button">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>Request Quote</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="p-space-md rounded-xl bg-surface-container-lowest flex items-start gap-space-sm shadow-sm">
        <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">info</span>
        <div className="text-on-surface-variant font-body-sm text-body-sm">
          <strong className="font-semibold text-primary">Supplier Verification:</strong> All listed manufacturers undergo annual packaging compliance audits including barrier performance testing, food-contact material migration analysis, and production facility GMP assessments.
        </div>
      </div>
    </div>
  );
}
