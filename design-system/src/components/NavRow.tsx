import * as React from 'react';

export interface NavRowProps {
  /** Exibido à esquerda — normalmente um `Button` fantasma (ghost) "Voltar", ou omitido na primeira etapa. */
  back?: React.ReactNode;
  /** Exibido à direita — normalmente um `Button` principal "Continuar"/"Enviar". */
  next: React.ReactNode;
}

/** Linha inferior de uma etapa do `Card`: ação de voltar à esquerda, ação principal à direita. */
export function NavRow({ back, next }: NavRowProps) {
  return (
    <div className="vds-nav-row">
      <span>{back}</span>
      {next}
    </div>
  );
}
