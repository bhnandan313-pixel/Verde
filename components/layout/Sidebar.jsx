import { NavLink } from 'react-router-dom';

const LOGO_URL = '/verde-logo.jpg';
const AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuABQmiuQ8bnDBXUm-AWSlL6VGuCUtw18Otq3t8fC6aDhnaRrD_gwRT12P0D6hx0ZeB48KeXB7V93TU-Xa9V0yertsK5ki5WqdfZA5LvasjznD5DBJJVnEkpu4T1bFbhUhKoMAZ5-37JNhIxY8Pj-n__-ueiZ7Svj8sqzQyElj8OjYb-qD5LH6NV-6_XptDpaZ0yWDtXjS7L96Obb_rr2sXwlwpe0MQo7X6GcEysrmE6m0wvPOsrjvo';

const navItems = [
  { to: '/', icon: 'grid_view', label: 'Dashboard / Categories' },
  { to: '/recommendation', icon: 'auto_awesome', label: 'Recent Recommendations' },
  { to: '/suppliers', icon: 'inventory_2', label: 'Suppliers' },
  { to: '/settings', icon: 'tune', label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-primary-container z-50 flex flex-col justify-between select-none shadow-[0_1px_8px_rgba(0,0,0,0.08)]">
      <div className="flex flex-col">
        {/* Logo Header */}
        <div className="h-16 px-space-md flex items-center gap-space-sm bg-primary">
          <img alt="SmartPack AI Logo" className="h-8 w-auto object-contain" src={LOGO_URL} />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-on-primary font-bold leading-tight">Verde</span>
            <span className="font-label-micro text-label-micro text-on-primary-container uppercase tracking-wider">Intelligence Suite</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-space-xs p-space-md mt-space-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-space-sm px-space-md py-space-sm rounded-lg font-body-md text-body-md transition-all duration-150 ${
                  isActive
                    ? 'bg-secondary text-on-primary font-semibold shadow-sm'
                    : 'text-on-primary-container hover:bg-primary hover:text-on-primary'
                }`
              }
            >
              <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* User Profile */}
      <div className="p-space-md bg-primary/40 m-space-sm rounded-xl">
        <div className="flex items-center gap-space-sm">
          <div className="relative flex-shrink-0">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={AVATAR_URL} />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-tertiary-fixed-dim ring-2 ring-primary-container"></span>
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="font-label-regular text-label-regular font-bold text-on-primary truncate">Dr. Anya Sharma</span>
            <span className="font-label-micro text-label-micro text-on-primary-container truncate">Packaging QA Lead</span>
          </div>
          <span className="material-symbols-outlined text-on-primary-container text-[18px]">verified</span>
        </div>
      </div>
    </aside>
  );
}
