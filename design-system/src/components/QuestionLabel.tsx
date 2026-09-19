import * as React from 'react';

export interface QuestionLabelProps {
  children: React.ReactNode;
  /** Marcador discreto no final, ex: "(opcional)". */
  tag?: React.ReactNode;
  className?: string;
}

/** Rótulo pequeno em caixa alta no estilo eyebrow, exibido acima de um `QuestionTitle` dentro de um `Card` (ex: "Situação atual"). */
export function QuestionLabel({ children, tag, className }: QuestionLabelProps) {
  const classes = ['vds-q-label', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {children}
      {tag ? <span className="vds-opt-tag">{tag}</span> : null}
    </div>
  );
}
