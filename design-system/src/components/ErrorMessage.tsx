import * as React from 'react';

export interface ErrorMessageProps {
  children: React.ReactNode;
  /** `dark` matches the contact step's dark card background. */
  tone?: 'light' | 'dark';
}

/** Inline validation message shown under a question when the step can't advance yet. */
export function ErrorMessage({ children, tone = 'light' }: ErrorMessageProps) {
  return (
    <p className="vds-error-msg" data-tone={tone === 'dark' ? 'dark' : undefined} role="alert">
      {children}
    </p>
  );
}
