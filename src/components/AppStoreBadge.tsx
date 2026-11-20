import React, { useState } from 'react';
import { motion } from 'motion/react';
import fitTierIconImg from '../assets/images/fittier_icon.png';

export const APP_STORE_URL = 'https://apps.apple.com/us/app/fittier-daily-tier-score/id6799959086';
export const PRIVACY_URL = 'https://fittier.app/privacy.html';
export const TERMS_URL = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';
export const SUPPORT_EMAIL = 'support@fittier.app';

export const AppleLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
  </svg>
);

interface AppStoreBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  className?: string;
}

export const AppStoreBadge: React.FC<AppStoreBadgeProps> = ({
  size = 'md',
  fullWidth = false,
  className = '',
}) => {
  const padding =
    size === 'lg'
      ? 'px-5 py-3 gap-3'
      : size === 'sm'
      ? 'px-3.5 py-2 gap-2.5'
      : 'px-4 py-2.5 gap-2.5';

  const iconSize = size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-5 h-5' : 'w-5 h-5';
  const topLine = size === 'lg' ? 'text-[10px]' : 'text-[9px]';
  const bottomLine = size === 'lg' ? 'text-[17px]' : 'text-[15px]';

  return (
    <motion.a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Download FitTier on the App Store"
      className={`${fullWidth ? 'w-full justify-center' : ''} inline-flex items-center ${padding} rounded-xl bg-black hover:bg-[#111116] text-white border border-white/25 hover:border-white/45 shadow-lg shadow-black/45 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C6CF0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D11] ${className}`}
    >
      <AppleLogo className={`${iconSize} shrink-0 text-white`} />
      <span className="flex flex-col text-left leading-none">
        <span className={`${topLine} font-medium tracking-tight text-white/85`}>
          Download on the
        </span>
        <span className={`${bottomLine} font-display font-semibold tracking-tight text-white mt-0.5`}>
          App Store
        </span>
      </span>
    </motion.a>
  );
};

export const FitTierAppIcon: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const [imgFailed, setImgFailed] = useState(false);

  const box =
    size === 'lg'
      ? 'w-16 h-16 rounded-2xl'
      : size === 'md'
      ? 'w-11 h-11 rounded-xl'
      : 'w-8 h-8 rounded-lg';

  return (
    <motion.div
      whileHover={{ scale: 1.06, rotate: -2 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className={`${box} shrink-0 overflow-hidden shadow-lg shadow-[#7437DE]/25 border border-white/10 flex items-center justify-center`}
      style={
        imgFailed
          ? { background: 'linear-gradient(45deg, #7437DE 0%, #DC4390 100%)' }
          : undefined
      }
    >
      {!imgFailed ? (
        <img
          src={fitTierIconImg}
          alt="FitTier app icon"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <svg viewBox="0 0 28 28" fill="none" className="w-[62%] h-[62%]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="3" y="15" width="5" height="9.5" rx="2" fill="#FFFFFF" />
          <rect x="11.5" y="10.5" width="5" height="14" rx="2" fill="#FFFFFF" />
          <rect x="20" y="5.5" width="5" height="19" rx="2" fill="#FFFFFF" />
          <circle cx="22.5" cy="2.6" r="1.8" fill="#F7CE78" />
        </svg>
      )}
    </motion.div>
  );
};
