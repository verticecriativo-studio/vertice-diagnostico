import * as React from 'react';

export interface FounderBioProps {
  /** Foto redonda (ex: um `<img>`). */
  photo: React.ReactNode;
  /** Rótulo pequeno acima do nome, ex: "Prazer! Sou...". */
  eyebrow?: React.ReactNode;
  heading: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

/** Seção de apresentação da pessoa por trás da marca: foto redonda + rótulo + nome + texto, em fundo terracota. */
export function FounderBio({ photo, eyebrow, heading, children, className }: FounderBioProps) {
  const classes = ['vds-founder-bio', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      <div className="vds-founder-bio-media">{photo}</div>
      <div className="vds-founder-bio-body">
        {eyebrow ? <p className="vds-q-label">{eyebrow}</p> : null}
        <h3>{heading}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
