import * as React from 'react';
import { EyebrowBadge } from './EyebrowBadge';

export interface HeroProps {
  /** Linha curta de contexto exibida acima do título, ex: "Diagnóstico rápido · 2 minutos". */
  eyebrow?: React.ReactNode;
  /** O título principal. Envolva o trecho de destaque em um `<em>` para obter a cor de destaque. */
  heading: React.ReactNode;
  /** Parágrafo de apoio em itálico abaixo do título. */
  lead?: React.ReactNode;
  /** Itens `HeroStat` exibidos na linha de estatísticas. */
  stats?: React.ReactNode;
  /** Imagem opcional (ex: um `<img>`) exibida ao lado do texto — usada em heros de página de marketing, não na pesquisa. */
  media?: React.ReactNode;
  className?: string;
}

/** A seção hero com gradiente terracota: selo eyebrow, título, parágrafo de apoio, estatísticas e uma imagem opcional ao lado. */
export function Hero({ eyebrow, heading, lead, stats, media, className }: HeroProps) {
  const classes = ['vds-hero', className].filter(Boolean).join(' ');
  const body = (
    <div className={media ? 'vds-hero-body' : undefined}>
      {eyebrow ? <EyebrowBadge className="vds-hero-eyebrow">{eyebrow}</EyebrowBadge> : null}
      <h1 className="vds-hero-heading">{heading}</h1>
      {lead ? <p className="vds-hero-lead">{lead}</p> : null}
      {stats ? <ul className="vds-hero-meta">{stats}</ul> : null}
    </div>
  );
  return (
    <header className={classes} data-layout={media ? 'split' : undefined}>
      {body}
      {media ? <div className="vds-hero-media">{media}</div> : null}
    </header>
  );
}
