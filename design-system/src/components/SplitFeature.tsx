import * as React from 'react';

export interface SplitFeatureProps {
  /** Imagem ou mídia exibida de um dos lados. */
  media: React.ReactNode;
  heading?: React.ReactNode;
  children: React.ReactNode;
  /** Quando `true`, a mídia fica à direita (o padrão é à esquerda). */
  reverse?: boolean;
  className?: string;
}

/** Seção com imagem de um lado e texto do outro, usada para explicar um serviço ou diferencial (ex: "Um lugar para todos"). */
export function SplitFeature({ media, heading, children, reverse = false, className }: SplitFeatureProps) {
  const classes = ['vds-split-feature', className].filter(Boolean).join(' ');
  return (
    <div className={classes} data-reverse={reverse ? 'true' : undefined}>
      <div className="vds-split-feature-media">{media}</div>
      <div className="vds-split-feature-body">
        {heading ? <h3>{heading}</h3> : null}
        {children}
      </div>
    </div>
  );
}
