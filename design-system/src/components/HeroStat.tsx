import * as React from 'react';

export interface HeroStatProps {
  /** O valor em destaque, ex: "8" ou "~2 min". */
  value: React.ReactNode;
  /** O rótulo discreto abaixo do valor, ex: "perguntas". */
  label: React.ReactNode;
}

/** Uma célula de estatística dentro da linha de estatísticas do `Hero` (um valor em destaque sobre um rótulo discreto). */
export function HeroStat({ value, label }: HeroStatProps) {
  return (
    <li className="vds-hero-stat">
      <b>{value}</b>
      {label}
    </li>
  );
}
