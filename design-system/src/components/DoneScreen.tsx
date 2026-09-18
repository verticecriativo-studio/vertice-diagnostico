import * as React from 'react';

export interface DoneScreenProps {
  heading: React.ReactNode;
  children?: React.ReactNode;
  /** Mark rendered in the round badge, e.g. "✓". */
  mark?: React.ReactNode;
}

/** Centered confirmation state shown after the survey is submitted: round mark, heading, and a short message. */
export function DoneScreen({ heading, children, mark = '✓' }: DoneScreenProps) {
  return (
    <div className="vds-done-screen">
      <div className="vds-done-mark">{mark}</div>
      <h2>{heading}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
