import { ReactNode } from "react";
import { PumpCategory } from "@/lib/types";

interface PumpImageProps {
  category: PumpCategory;
  className?: string;
}

export default function PumpImage({ category, className = "h-24 w-24" }: PumpImageProps) {
  const icons: Record<PumpCategory, ReactNode> = {
    submersible: (
      <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
        <rect x="45" y="10" width="30" height="70" rx="4" fill="currentColor" opacity="0.15" />
        <rect x="48" y="15" width="24" height="60" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="60" cy="85" r="18" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="60" cy="85" r="8" fill="currentColor" opacity="0.3" />
        <path d="M60 103 L60 115" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M52 110 L68 110" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M54 8 L66 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    centrifugal: (
      <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
        <rect x="15" y="45" width="55" height="30" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="42" cy="60" r="14" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="42" cy="60" r="5" fill="currentColor" opacity="0.3" />
        <rect x="70" y="35" width="35" height="50" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="87" cy="60" r="12" stroke="currentColor" strokeWidth="2" />
        <path d="M10 52 L15 52 M10 60 L15 60 M10 68 L15 68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M70 52 L105 52 M70 68 L105 68" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    booster: (
      <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden="true">
        <rect x="48" y="10" width="24" height="70" rx="3" stroke="currentColor" strokeWidth="2.5" />
        <rect x="52" y="15" width="16" height="12" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="52" y="32" width="16" height="12" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="52" y="49" width="16" height="12" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="52" y="66" width="16" height="10" rx="2" fill="currentColor" opacity="0.2" />
        <rect x="30" y="82" width="60" height="22" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="60" cy="93" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M20 93 L30 93 M90 93 L100 93" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  };

  return <>{icons[category]}</>;
}
