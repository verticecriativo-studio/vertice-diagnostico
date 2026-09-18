import * as React from 'react';

export interface QuestionLabelProps {
  children: React.ReactNode;
  /** Trailing muted tag, e.g. "(opcional)". */
  tag?: React.ReactNode;
  className?: string;
}

/** Small uppercase eyebrow-style label placed above a `QuestionTitle` inside a `Card` (e.g. "Situação atual"). */
export function QuestionLabel({ children, tag, className }: QuestionLabelProps) {
  const classes = ['vds-q-label', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {children}
      {tag ? <span className="vds-opt-tag">{tag}</span> : null}
    </div>
  );
}
