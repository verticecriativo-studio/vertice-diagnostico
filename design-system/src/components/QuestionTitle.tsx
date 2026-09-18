import * as React from 'react';

export interface QuestionTitleProps {
  children: React.ReactNode;
  className?: string;
}

/** The bold headline for a survey question, sized and balanced for a single card. */
export function QuestionTitle({ children, className }: QuestionTitleProps) {
  const classes = ['vds-q-title', className].filter(Boolean).join(' ');
  return <p className={classes}>{children}</p>;
}
