import * as React from 'react';

export interface EyebrowBadgeProps {
  /** Tratamento de cor: `light` para fundos escuros (hero), `ink` para fundos claros (cartões). */
  tone?: 'light' | 'ink';
  children: React.ReactNode;
  className?: string;
}

/** Rótulo pequeno em caixa alta com um marcador triangular, usado para identificar um hero ou seção com uma linha curta de contexto. */
export function EyebrowBadge({ tone = 'light', children, className }: EyebrowBadgeProps) {
  const classes = ['vds-eyebrow', className].filter(Boolean).join(' ');
  return (
    <p className={classes} data-tone={tone === 'ink' ? 'ink' : undefined}>
      {children}
    </p>
  );
}
