import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` is the pill call-to-action, `ghost` is the underlined text action. */
  variant?: 'primary' | 'ghost';
  /** Accent used on `primary` buttons in dark contexts, e.g. the contact step. */
  tone?: 'forest' | 'rust';
  children: React.ReactNode;
}

/** Vértice's pill call-to-action and ghost text button, used to drive the survey's step navigation. */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', tone, className, children, ...rest },
  ref
) {
  const classes = ['vds-btn', variant === 'primary' ? 'vds-btn-primary' : 'vds-btn-ghost', className]
    .filter(Boolean)
    .join(' ');
  return (
    <button ref={ref} type="button" className={classes} data-tone={tone} {...rest}>
      {children}
    </button>
  );
});
