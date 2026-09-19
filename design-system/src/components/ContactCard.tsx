import * as React from 'react';

export interface ContactCardProps {
  children: React.ReactNode;
  className?: string;
}

/** Cartão escuro de largura total usado na etapa final "deixe seu contato" da pesquisa — envolve um `QuestionLabel`, título, `PerkList`, campos `TextField` e um `NavRow`. */
export function ContactCard({ children, className }: ContactCardProps) {
  const classes = ['vds-contact-card', className].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
}
