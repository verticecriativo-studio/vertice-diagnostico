import * as React from 'react';

export interface HeroStatProps {
  /** The bold headline value, e.g. "8" or "~2 min". */
  value: React.ReactNode;
  /** The muted label under the value, e.g. "perguntas". */
  label: React.ReactNode;
}

/** One stat cell inside `Hero`'s meta row (a bold value over a muted label). */
export function HeroStat({ value, label }: HeroStatProps) {
  return (
    <li className="vds-hero-stat">
      <b>{value}</b>
      {label}
    </li>
  );
}
