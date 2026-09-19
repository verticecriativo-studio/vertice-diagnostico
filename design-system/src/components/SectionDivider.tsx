import * as React from 'react';

export interface SectionDividerProps {
  /** Selo pequeno acima do título, ex: "ETAPAS DO PROJETO". */
  tag?: React.ReactNode;
  heading: React.ReactNode;
  /** Ícone ou marca decorativa pequena (ex: um `<svg>`). */
  icon?: React.ReactNode;
  className?: string;
}

/** Divisor de seção em azul-marinho com textura pontilhada — usado para separar blocos de página ou como slide de transição. */
export function SectionDivider({ tag, heading, icon, className }: SectionDividerProps) {
  const classes = ['vds-section-divider vds-pattern-dots', className].filter(Boolean).join(' ');
  return (
    <div className={classes} data-tone="dark">
      {tag ? <span className="vds-tag-pill" data-tone="dark">{tag}</span> : null}
      <p className="vds-section-divider-heading">{heading}</p>
      {icon}
    </div>
  );
}
