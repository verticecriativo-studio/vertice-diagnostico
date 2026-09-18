import * as React from 'react';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Visible label rendered above the input. Also used to derive `id`/`htmlFor` when `id` is omitted. */
  label?: React.ReactNode;
  /** `dark` matches the contact step's dark card background. */
  tone?: 'light' | 'dark';
}

/** A labeled single-line text input, matching the survey's field styling in both light and dark (contact card) contexts. */
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { label, tone = 'light', id, className, ...rest },
  ref
) {
  const inputId = id ?? (typeof label === 'string' ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return (
    <div className="vds-field" data-tone={tone === 'dark' ? 'dark' : undefined}>
      {label ? (
        <label className="vds-field-label" htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input
        ref={ref}
        id={inputId}
        type="text"
        className={['vds-text-input', className].filter(Boolean).join(' ')}
        {...rest}
      />
    </div>
  );
});
