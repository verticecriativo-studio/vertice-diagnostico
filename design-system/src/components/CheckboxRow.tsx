import * as React from 'react';

export interface CheckboxRowProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children: React.ReactNode;
  /** `light` matches a white/card background instead of the default dark contact-card styling. */
  tone?: 'dark' | 'light';
}

/** A checkbox with its label text as one clickable row, used for opt-in style choices like "sem compromisso de call". */
export const CheckboxRow = React.forwardRef<HTMLInputElement, CheckboxRowProps>(function CheckboxRow(
  { children, tone = 'dark', className, ...rest },
  ref
) {
  return (
    <label className={['vds-check-row', className].filter(Boolean).join(' ')} data-tone={tone}>
      <input ref={ref} type="checkbox" {...rest} />
      <span>{children}</span>
    </label>
  );
});
