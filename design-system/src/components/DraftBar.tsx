import * as React from 'react';

export interface DraftBarProps {
  /** Texto curto do selo, ex: "RASCUNHO". */
  tag: React.ReactNode;
  children: React.ReactNode;
}

/** Faixa fixa no topo sinalizando um modo de pré-visualização/não produção da página. */
export function DraftBar({ tag, children }: DraftBarProps) {
  return (
    <div className="vds-draftbar">
      <span className="vds-draftbar-tag">{tag}</span>
      <span className="vds-draftbar-msg">{children}</span>
    </div>
  );
}
