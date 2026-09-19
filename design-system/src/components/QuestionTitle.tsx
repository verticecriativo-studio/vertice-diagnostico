import * as React from 'react';

export interface QuestionTitleProps {
  children: React.ReactNode;
  className?: string;
}

/** O título em destaque de uma pergunta da pesquisa, dimensionado e equilibrado para um único cartão. */
export function QuestionTitle({ children, className }: QuestionTitleProps) {
  const classes = ['vds-q-title', className].filter(Boolean).join(' ');
  return <p className={classes}>{children}</p>;
}
