import * as React from 'react';

export interface StoryCoverProps {
  /** URL da foto de fundo. */
  image: string;
  /** Título grande, ancorado na parte inferior. */
  heading: React.ReactNode;
  /** Bloco de texto pequeno no topo. */
  note?: React.ReactNode;
  /** Rótulo curto no canto inferior esquerdo, ex: "QUINTA" / "FEIRA". */
  tag?: React.ReactNode;
  className?: string;
}

/** Capa de story do Instagram: foto de fundo em tela cheia, com um título grande ancorado embaixo. Use dentro de um `SocialFrame` com `ratio="9:16"`. */
export function StoryCover({ image, heading, note, tag, className }: StoryCoverProps) {
  const classes = ['vds-story-cover', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      <img className="vds-story-cover-bg" src={image} alt="" />
      <div className="vds-story-cover-scrim" />
      {note ? <div className="vds-story-cover-note">{note}</div> : null}
      <p className="vds-story-cover-heading">{heading}</p>
      {tag ? <div className="vds-story-cover-tag">{tag}</div> : null}
    </div>
  );
}
