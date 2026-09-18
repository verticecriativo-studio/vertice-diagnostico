import * as React from 'react';

export interface NavRowProps {
  /** Rendered on the left — typically a ghost "Voltar" `Button`, or omitted on the first step. */
  back?: React.ReactNode;
  /** Rendered on the right — typically a primary "Continuar"/"Enviar" `Button`. */
  next: React.ReactNode;
}

/** Footer row for a `Card` step: back action on the left, primary action on the right. */
export function NavRow({ back, next }: NavRowProps) {
  return (
    <div className="vds-nav-row">
      <span>{back}</span>
      {next}
    </div>
  );
}
