import * as React from 'react';

export interface FooterProps {
  /** Marca pequena exibida antes do nome da marca, ex: um `<img>` ou `<svg>` do logotipo. */
  brandMark?: React.ReactNode;
  brandName: React.ReactNode;
  meta?: React.ReactNode;
}

/** Rodapé escuro da página com o lockup da marca à esquerda e texto informativo em caixa alta à direita. */
export function Footer({ brandMark, brandName, meta }: FooterProps) {
  return (
    <footer className="vds-footer">
      <div className="vds-footer-row">
        <div className="vds-footer-brand">
          {brandMark}
          <span>{brandName}</span>
        </div>
        {meta ? <span className="vds-footer-meta">{meta}</span> : null}
      </div>
    </footer>
  );
}
