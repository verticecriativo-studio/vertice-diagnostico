import * as React from 'react';

export interface CTASectionProps {
  heading: React.ReactNode;
  children?: React.ReactNode;
  /** Normalmente um `Button`. */
  action: React.ReactNode;
  /** Elemento decorativo opcional (ex: uma ilustração) exibido ao lado do texto. */
  media?: React.ReactNode;
  /** `dark` usa o fundo azul-marinho. */
  tone?: 'light' | 'dark';
  className?: string;
}

/** Bloco de chamada para ação: título, texto de apoio, botão e um elemento decorativo opcional ao lado. */
export function CTASection({ heading, children, action, media, tone = 'light', className }: CTASectionProps) {
  const classes = ['vds-cta-section', className].filter(Boolean).join(' ');
  return (
    <div className={classes} data-tone={tone === 'dark' ? 'dark' : undefined}>
      <div className="vds-cta-section-body">
        <h3>{heading}</h3>
        {children ? <p>{children}</p> : null}
        {action}
      </div>
      {media ? <div className="vds-cta-section-media">{media}</div> : null}
    </div>
  );
}
