import * as React from 'react';

export interface DoneScreenProps {
  heading: React.ReactNode;
  children?: React.ReactNode;
  /** Marca exibida no selo redondo, ex: "✓". */
  mark?: React.ReactNode;
}

/** Tela de confirmação centralizada exibida após o envio da pesquisa: marca redonda, título e uma mensagem curta. */
export function DoneScreen({ heading, children, mark = '✓' }: DoneScreenProps) {
  return (
    <div className="vds-done-screen">
      <div className="vds-done-mark">{mark}</div>
      <h2>{heading}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
