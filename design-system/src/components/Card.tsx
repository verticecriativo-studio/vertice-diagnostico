import * as React from 'react';

export interface CardProps {
  /** Selo pequeno fixado no canto superior esquerdo, ex: "01 / DIAGNÓSTICO". Omita para não exibir selo. */
  index?: string;
  children: React.ReactNode;
  className?: string;
}

/** Contêiner branco com borda que hospeda uma etapa da pesquisa, com selo de índice opcional. */
export function Card({ index, children, className }: CardProps) {
  const classes = ['vds-card', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {index ? <span className="vds-card-index">{index}</span> : null}
      {children}
    </div>
  );
}
