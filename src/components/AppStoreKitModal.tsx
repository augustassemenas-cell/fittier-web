import React, { useState } from 'react';
import { Download, ExternalLink, X } from 'lucide-react';
import appstoreTier from '../assets/images/appstore_1_tier.png';
import appstoreHome from '../assets/images/appstore_2_home.png';
import appstoreFood from '../assets/images/appstore_3_food.png';
import appstoreWorkout from '../assets/images/appstore_4_workout.png';
import appstoreCheckin from '../assets/images/appstore_5_checkin.png';

interface AppStoreKitModalProps {
  open: boolean;
  onClose: () => void;
}

const APP_STORE_ASSETS = [
  {
    id: '1-tier',
    title: '01 · Tier (95/100 S)',
    filename: 'FitTier-01-Tier.png',
    src: appstoreTier,
  },
  {
    id: '2-home',
    title: '02 · Streaks & Coach',
    filename: 'FitTier-02-Home.png',
    src: appstoreHome,
  },
  {
    id: '3-food',
    title: '03 · Food & Supplements',
    filename: 'FitTier-03-Food.png',
    src: appstoreFood,
  },
  {
    id: '4-workout',
    title: '04 · Workout Tracking',
    filename: 'FitTier-04-Workout.png',
    src: appstoreWorkout,
  },
  {
    id: '5-checkin',
    title: '05 · Sleep & Mood Check-in',
    filename: 'FitTier-05-Checkin.png',
    src: appstoreCheckin,
  },
];

async function triggerBlobDownload(url: string, filename: string) {
  const res = await fetch(url);
  const blob = await res.blob();
  const objectUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = objectUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(objectUrl), 1500);
}

export const AppStoreKitModal: React.FC<AppStoreKitModalProps> = ({ open, onClose }) => {
  const [downloadingAll, setDownloadingAll] = useState(false);

  if (!open) return null;

  const handleDownloadAll = async () => {
    if (downloadingAll) return;
    setDownloadingAll(true);
    try {
      for (const asset of APP_STORE_ASSETS) {
        await triggerBlobDownload(asset.src, asset.filename);
        await new Promise((r) => setTimeout(r, 220));
      }
    } finally {
      setDownloadingAll(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="appstore-kit-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#18181E] border border-[#2A2A36] p-6 md:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#262630]">
          <div>
            <div className="text-xs font-mono font-semibold text-[#7C6CF0]">
              App Store Connect Ready · 1290 × 2796 px (6.7&quot; / 6.9&quot; Display)
            </div>
            <h3 id="appstore-kit-title" className="mt-1 font-display text-xl md:text-2xl font-bold text-[#F5F5F8]">
              FitTier App Store Screenshots
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#9A9AA8]">
              Download full-resolution PNGs below and upload directly to App Store Connect.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleDownloadAll}
              disabled={downloadingAll}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7C6CF0] hover:bg-[#6c5ce7] disabled:opacity-60 text-white text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{downloadingAll ? 'Downloading...' : 'Download all 5 PNGs'}</span>
            </button>

            <button
              type="button"
              aria-label="Close App Store Kit"
              onClick={onClose}
              className="p-2 rounded-xl bg-[#0D0D11] border border-[#262630] text-[#9A9AA8] hover:text-[#F5F5F8] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {APP_STORE_ASSETS.map((asset) => (
            <div
              key={asset.id}
              className="rounded-xl bg-[#0D0D11] border border-[#262630] p-3 flex flex-col justify-between gap-3"
            >
              <div>
                <div className="rounded-lg overflow-hidden border border-[#24242D]">
                  <img
                    src={asset.src}
                    alt={asset.title}
                    className="w-full h-auto block"
                  />
                </div>
                <div className="mt-2.5 text-xs font-semibold text-[#F5F5F8]">
                  {asset.title}
                </div>
                <div className="text-[11px] font-mono text-[#9A9AA8]">1290 × 2796 PNG</div>
              </div>

              <div className="space-y-1.5">
                <button
                  type="button"
                  onClick={() => triggerBlobDownload(asset.src, asset.filename)}
                  className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-[#18181E] border border-[#2C2C38] hover:border-[#7C6CF0] text-xs font-semibold text-[#F5F5F8] transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#7C6CF0]" aria-hidden="true" />
                  <span>Download PNG</span>
                </button>
                <a
                  href={asset.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1 px-2 py-1 text-[11px] text-[#9A9AA8] hover:text-[#F5F5F8] transition-colors"
                >
                  <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  <span>Open full image</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
