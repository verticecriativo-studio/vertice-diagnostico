import * as React from 'react';

export interface CardProps {
  /** Small badge pinned to the top-left corner, e.g. "01 / DIAGNÓSTICO". Omit for no badge. */
  index?: string;
  children: React.ReactNode;
  className?: string;
}

/** The white bordered container that hosts one step of the survey, with an optional index badge. */
export function Card({ index, children, className }: CardProps) {
  const classes = ['vds-card', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {index ? <span className="vds-card-index">{index}</span> : null}
      {children}
    </div>
  );
}
