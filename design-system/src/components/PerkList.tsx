import * as React from 'react';

export interface Perk {
  /** Short marker rendered inside the round icon, e.g. "✓". */
  icon?: React.ReactNode;
  text: React.ReactNode;
}

export interface PerkListProps {
  perks: Perk[];
}

/** Highlighted checklist of benefits shown on the contact step (rust-tinted panel with round check icons). */
export function PerkList({ perks }: PerkListProps) {
  return (
    <ul className="vds-perks">
      {perks.map((perk, i) => (
        <li key={i} className="vds-perk">
          <span className="vds-perk-icon">{perk.icon ?? '✓'}</span>
          <span>{perk.text}</span>
        </li>
      ))}
    </ul>
  );
}
