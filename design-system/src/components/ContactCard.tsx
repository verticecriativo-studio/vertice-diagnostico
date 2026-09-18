import * as React from 'react';

export interface ContactCardProps {
  children: React.ReactNode;
  className?: string;
}

/** Dark full-bleed card used for the survey's final "leave your contact" step — wraps a `QuestionLabel`, heading, `PerkList`, `TextField`s and a `NavRow`. */
export function ContactCard({ children, className }: ContactCardProps) {
  const classes = ['vds-contact-card', className].filter(Boolean).join(' ');
  return <div className={classes}>{children}</div>;
}
