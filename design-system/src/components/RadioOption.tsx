import * as React from 'react';

export interface RadioOptionProps {
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

/** A single custom-styled radio choice (hidden native input + visible dot), meant to be composed inside `RadioGroup`. */
export function RadioOption({ name, value, checked, onChange, children }: RadioOptionProps) {
  return (
    <label className="vds-opt" data-selected={checked ? 'true' : undefined}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
      />
      <span className="vds-opt-dot" />
      {children}
    </label>
  );
}
