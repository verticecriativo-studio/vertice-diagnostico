import * as React from 'react';

export interface PostCoverProps {
  /** URL da foto de fundo. */
  image: string;
  /** Texto pequeno no canto superior, ex: "@verticecriativo.design". */
  handle?: React.ReactNode;
  /** Frase de impacto — combine com `Highlight` para destacar uma palavra/trecho. */
  heading: React.ReactNode;
  /** Texto do selo de call-to-action, ex: "Arrasta →". Omita para não exibir. */
  cta?: React.ReactNode;
  className?: string;
}

/** Capa de post/carrossel de Instagram: foto de fundo com degradê, identificação e frase de impacto sobreposta. Use dentro de um `SocialFrame`. */
export function PostCover({ image, handle, heading, cta, className }: PostCoverProps) {
  const classes = ['vds-post-cover', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      <img className="vds-post-cover-bg" src={image} alt="" />
      <div className="vds-post-cover-scrim" />
      {handle ? <span className="vds-post-cover-handle">{handle}</span> : null}
      <div className="vds-post-cover-body">
        <p className="vds-post-cover-heading">{heading}</p>
      </div>
      {cta ? <span className="vds-post-cover-cta">{cta}</span> : null}
    </div>
  );
}
