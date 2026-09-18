import * as React from 'react';
import { EyebrowBadge } from './EyebrowBadge';

export interface HeroProps {
  /** Short context line shown above the heading, e.g. "Diagnóstico rápido · 2 minutos". */
  eyebrow?: React.ReactNode;
  /** The main heading. Wrap the emphasized fragment in an `<em>` to get the accent color. */
  heading: React.ReactNode;
  /** Supporting italic paragraph under the heading. */
  lead?: React.ReactNode;
  /** `HeroStat` items rendered in the meta row. */
  stats?: React.ReactNode;
  className?: string;
}

/** The rust-gradient hero section: eyebrow badge, headline, lead paragraph, and a row of quick stats. */
export function Hero({ eyebrow, heading, lead, stats, className }: HeroProps) {
  const classes = ['vds-hero', className].filter(Boolean).join(' ');
  return (
    <header className={classes}>
      {eyebrow ? <EyebrowBadge className="vds-hero-eyebrow">{eyebrow}</EyebrowBadge> : null}
      <h1 className="vds-hero-heading">{heading}</h1>
      {lead ? <p className="vds-hero-lead">{lead}</p> : null}
      {stats ? <ul className="vds-hero-meta">{stats}</ul> : null}
    </header>
  );
}
