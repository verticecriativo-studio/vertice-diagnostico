import * as React from 'react';

export interface ProgressRailProps {
  /** Número total de etapas do fluxo. */
  total: number;
  /** Índice da etapa atual (começando em 1). */
  current: number;
  /** Texto exibido à esquerda da linha de rótulo, ex: "Pergunta 3". */
  label?: React.ReactNode;
  /** Texto exibido à direita da linha de rótulo, ex: "38%". */
  percentLabel?: React.ReactNode;
  className?: string;
}

/** Indicador de progresso segmentado para um formulário de várias etapas: uma linha de rótulo mais uma trilha de marcadores (concluído / atual / pendente). */
export function ProgressRail({ total, current, label, percentLabel, className }: ProgressRailProps) {
  const classes = ['vds-progress', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {(label || percentLabel) && (
        <div className="vds-progress-label">
          <span>{label}</span>
          <span>{percentLabel}</span>
        </div>
      )}
      <ul className="vds-progress-rail">
        {Array.from({ length: total }, (_, i) => {
          const step = i + 1;
          const state = step < current ? 'done' : step === current ? 'active' : undefined;
          return <li key={step} className="vds-tick" data-state={state} aria-hidden="true" />;
        })}
      </ul>
    </div>
  );
}
