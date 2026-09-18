import * as React from 'react';

export interface ProgressRailProps {
  /** Total number of steps in the flow. */
  total: number;
  /** 1-based index of the current step. */
  current: number;
  /** Text shown at the left of the label row, e.g. "Pergunta 3". */
  label?: React.ReactNode;
  /** Text shown at the right of the label row, e.g. "38%". */
  percentLabel?: React.ReactNode;
  className?: string;
}

/** Segmented progress indicator for a multi-step form: a label row plus a rail of ticks (done / active / upcoming). */
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
