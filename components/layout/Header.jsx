const LOGO_URL = '/verde-logo.jpg';
const AVATAR_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuABQmiuQ8bnDBXUm-AWSlL6VGuCUtw18Otq3t8fC6aDhnaRrD_gwRT12P0D6hx0ZeB48KeXB7V93TU-Xa9V0yertsK5ki5WqdfZA5LvasjznD5DBJJVnEkpu4T1bFbhUhKoMAZ5-37JNhIxY8Pj-n__-ueiZ7Svj8sqzQyElj8OjYb-qD5LH6NV-6_XptDpaZ0yWDtXjS7L96Obb_rr2sXwlwpe0MQo7X6GcEysrmE6m0wvPOsrjvo';

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
      <div className="flex items-center gap-space-sm text-on-surface-variant">
        <img alt="SmartPack AI Logo" className="h-9 w-auto object-contain" src={LOGO_URL} />
        <span className="font-label-regular text-label-regular uppercase tracking-wider text-outline">Workspace</span>
        <span className="text-outline font-label-micro text-label-micro">/</span>
        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Spec Intelligence Engine</span>
      </div>
      <div className="flex items-center gap-space-md">
        <a className="flex items-center gap-space-xs font-label-regular text-label-regular text-on-surface-variant hover:text-on-surface transition-colors py-space-xs px-space-sm rounded-lg hover:bg-surface-container" href="#">
          <span className="material-symbols-outlined text-[18px]">menu_book</span>
          <span>Docs &amp; Standards</span>
        </a>
        <button aria-label="Notifications" className="p-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-full transition-colors relative flex items-center justify-center" type="button">
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-secondary rounded-full"></span>
        </button>
        <div className="flex items-center gap-space-sm pl-space-sm">
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src={AVATAR_URL} />
        </div>
      </div>
    </header>
  );
}
