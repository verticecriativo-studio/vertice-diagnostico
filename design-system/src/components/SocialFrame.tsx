import * as React from 'react';

export interface SocialFrameProps {
  /** Proporção do quadro: `1:1` (post), `4:5` (post/carrossel), `9:16` (story ou slide de apresentação). */
  ratio?: '1:1' | '4:5' | '9:16';
  children: React.ReactNode;
  className?: string;
}

/** Moldura de proporção fixa que recorta seu conteúdo no formato de um post, carrossel ou story — o "canvas" para os templates de rede social. */
export function SocialFrame({ ratio = '4:5', children, className }: SocialFrameProps) {
  const classes = ['vds-social-frame', className].filter(Boolean).join(' ');
  return (
    <div className={classes} data-ratio={ratio}>
      {children}
    </div>
  );
}
