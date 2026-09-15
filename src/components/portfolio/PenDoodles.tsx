export function PenCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 56"
      fill="none"
      aria-hidden
      className={className}
      preserveAspectRatio="none"
    >
      {/* Open, imperfect oval — ends don't meet */}
      <path
        d="M28 38c-6-8-2-22 18-28 16-5 48-7 72-2 18 4 28 14 26 26-2 14-20 18-52 18-22 0-42-2-52-8"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.95"
      />
      <path
        d="M34 40c4 3 18 5 34 5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

export function PenArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 80" fill="none" aria-hidden className={className}>
      <path
        d="M12 18c18 4 38 22 52 42"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M52 48c4 8 10 12 16 14M68 62c-8 0-14-2-18-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PenStar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden className={className}>
      <path
        d="M16 4l2.2 8.2L26 16l-7.8 3.8L16 28l-2.2-8.2L6 16l7.8-3.8L16 4Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PenHeart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 30" fill="none" aria-hidden className={className}>
      <path
        d="M16 26C10 21 4 16.5 4 10.5 4 6.5 7 4 10.5 4c2.2 0 4 1.2 5.5 3C17.5 5.2 19.3 4 21.5 4 25 4 28 6.5 28 10.5 28 16.5 22 21 16 26Z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PenUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 12"
      fill="none"
      aria-hidden
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M3 6.5c22-3.5 44 2.5 66 1.5 18-.8 34-3.5 48 1"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <path
        d="M14 8.5c16-1 34 1.2 52 .4"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

export function PenEnvelope({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 28" fill="none" aria-hidden className={className}>
      <path
        d="M4 6.5c1-1.5 4-2.5 14-2.5s13.5 1 14.5 2.8c.8 1.4.8 12.2 0 13.8C31.5 22.5 28 24 18 24S5 22.2 4 20.5c-.9-1.5-.8-12.2 0-14Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 8.5c4 4 8.5 7.2 12.5 7.2s8-3 12.2-7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 20.5c3.5-3 7-5.2 12-5.2s8.2 2 11.5 5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}
