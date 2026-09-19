import * as React from 'react';

export interface Perk {
  /** Marcador curto exibido dentro do ícone redondo, ex: "✓". */
  icon?: React.ReactNode;
  text: React.ReactNode;
}

export interface PerkListProps {
  perks: Perk[];
}

/** Lista de benefícios em destaque exibida na etapa de contato (painel com tom terracota e ícones redondos de confirmação). */
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
