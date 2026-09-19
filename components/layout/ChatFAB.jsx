import { useState } from 'react';

export default function ChatFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="chatbot-container">
      {/* Chat Dialog */}
      <div className={`${isOpen ? '' : 'hidden'} mb-4 w-96 bg-surface-container-lowest rounded-xl shadow-[0_20px_25px_-5px_rgba(15,42,74,0.12),0_10px_10px_-5px_rgba(15,42,74,0.06)] overflow-hidden transition-all duration-200`}>
        <div className="bg-primary-container px-space-md py-space-md flex items-center justify-between text-on-primary">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary-fixed text-[22px]">language</span>
            <div>
              <h4 className="font-headline-sm text-headline-sm font-semibold text-on-primary">SmartPack Assistant</h4>
              <p className="font-label-micro text-label-micro text-on-primary-container">Supports multiple regional languages</p>
            </div>
          </div>
          <button className="p-space-xs text-on-primary-container hover:text-on-primary transition-colors rounded-lg" onClick={() => setIsOpen(false)} type="button">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <div className="p-space-lg flex flex-col items-center justify-center min-h-[200px] text-center bg-surface-container-low">
          <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-space-sm">
            <span className="material-symbols-outlined text-[22px]">translate</span>
          </div>
          <span className="px-space-sm py-space-xs bg-surface-container-highest text-on-surface-variant font-label-micro text-label-micro rounded-full font-bold uppercase tracking-wider mb-space-xs">Coming Soon</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[240px]">Multi-lingual substrate advisory engine is currently in packaging calibration preview.</p>
        </div>
        <div className="p-space-md bg-surface-container-lowest">
          <div className="relative flex items-center">
            <input className="w-full h-10 px-space-md font-body-sm text-body-sm bg-surface-container-low text-outline rounded-lg cursor-not-allowed" disabled placeholder="Type your query in any language..." type="text" />
            <button className="absolute right-2 p-space-xs text-outline cursor-not-allowed" disabled type="button">
              <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </div>
        </div>
      </div>

      {/* FAB Button */}
      <div className="relative flex items-center gap-space-sm">
        <div className={`pointer-events-none ${showTooltip ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 absolute right-16 px-space-sm py-space-xs bg-primary text-on-primary font-label-micro text-label-micro rounded-lg whitespace-nowrap shadow-md`}>
          Need help? Ask in your language.
        </div>
        <button
          aria-label="Open AI assistant"
          className="w-14 h-14 rounded-full bg-primary-container text-on-primary shadow-lg flex items-center justify-center hover:bg-primary transition-all duration-200 transform hover:scale-105 active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          type="button"
        >
          <span className="material-symbols-outlined text-[28px]">chat</span>
        </button>
      </div>
    </aside>
  );
}

