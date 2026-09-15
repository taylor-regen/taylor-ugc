export function PenCircle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 56"
      fill="none"
      aria-hidden
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M18 28c2-14 28-22 62-22s70 6 74 22c4 16-18 24-70 24S14 42 18 28Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        opacity="0.9"
      />
      <path
        d="M24 34c8 8 36 12 58 10"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.45"
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
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M52 48c4 8 10 12 16 14M68 62c-8 0-14-2-18-6"
        stroke="currentColor"
        strokeWidth="2.4"
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
        strokeWidth="1.8"
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
        strokeWidth="1.8"
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
        d="M2 7c18-3 36 2 54 1s36-4 52 1"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M10 9c20-1 40 1 58 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
