import React from 'react';
import { APP_STORE_URL } from './AppStoreBadge';

interface NavbarProps {
  onNavigate: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#24242D] bg-[#0D0D11]/90 backdrop-blur-md">
      <div className="max-w-[1140px] mx-auto px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('top');
          }}
          className="font-display text-xl font-extrabold tracking-tight text-[#F5F5F8] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C6CF0] rounded-sm"
        >
          FitTier
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#9A9AA8]"
        >
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('how-it-works');
            }}
            className="hover:text-[#F5F5F8] transition-colors whitespace-nowrap shrink-0"
          >
            How it works
          </a>
          <a
            href="#tier-scale"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('tier-scale');
            }}
            className="hover:text-[#F5F5F8] transition-colors whitespace-nowrap shrink-0"
          >
            Tier scale
          </a>
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('features');
            }}
            className="hover:text-[#F5F5F8] transition-colors whitespace-nowrap shrink-0"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('pricing');
            }}
            className="hover:text-[#F5F5F8] transition-colors whitespace-nowrap shrink-0"
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('faq');
            }}
            className="hover:text-[#F5F5F8] transition-colors whitespace-nowrap shrink-0"
          >
            FAQ
          </a>
        </nav>

        {/* Zone 3: 1 primary CTA */}
        <div className="flex items-center shrink-0">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold rounded-xl bg-[#7C6CF0] hover:bg-[#6c5ce7] text-white transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C6CF0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D11]"
          >
            Get FitTier
          </a>
        </div>
      </div>
    </header>
  );
};
