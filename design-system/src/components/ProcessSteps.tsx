import * as React from 'react';

export interface ProcessStep {
  /** Rótulo do passo, ex: "1. ESTRATÉGIA". */
  title: React.ReactNode;
  description: React.ReactNode;
  /** Destaca este passo com a borda terracota. */
  active?: boolean;
}

export interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
}

/** Lista vertical de etapas numeradas, usada para explicar um processo ou cronograma (ex: Estratégia → Identidade → Aplicação). */
export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  const classes = ['vds-process-steps', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {steps.map((step, i) => (
        <div key={i} className="vds-process-step" data-active={step.active ? 'true' : undefined}>
          <p className="vds-process-step-title">{step.title}</p>
          <p className="vds-process-step-desc">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
