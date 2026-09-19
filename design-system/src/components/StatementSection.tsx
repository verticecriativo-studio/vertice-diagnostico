import * as React from 'react';

export interface StatementSectionProps {
  /** `TagPill`s exibidos acima do título. */
  tagsTop?: React.ReactNode;
  /** O título grande e centralizado — combine com `Highlight` para destacar uma palavra. */
  heading: React.ReactNode;
  /** Texto de apoio abaixo do título. */
  subtitle?: React.ReactNode;
  /** `TagPill`s exibidos abaixo do título. */
  tagsBottom?: React.ReactNode;
  /** `light` (fundo claro) ou `dark` (fundo azul-marinho). */
  tone?: 'light' | 'dark';
  className?: string;
}

/** Bloco de afirmação/pergunta em destaque, centralizado — usado como seção de página ou como slide de carrossel/apresentação. */
export function StatementSection({
  tagsTop,
  heading,
  subtitle,
  tagsBottom,
  tone = 'light',
  className,
}: StatementSectionProps) {
  const classes = ['vds-statement', className].filter(Boolean).join(' ');
  return (
    <div className={classes} data-tone={tone}>
      {tagsTop ? <div className="vds-tag-pill-row">{tagsTop}</div> : null}
      <p className="vds-statement-heading">{heading}</p>
      {subtitle ? <p className="vds-statement-subtitle">{subtitle}</p> : null}
      {tagsBottom ? <div className="vds-tag-pill-row">{tagsBottom}</div> : null}
    </div>
  );
}
