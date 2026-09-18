import * as React from 'react';
import { RadioOption } from './RadioOption';

export interface RadioGroupOption {
  value: string;
  label: React.ReactNode;
}

export interface RadioGroupProps {
  /** Shared `name` for the underlying radio inputs. */
  name: string;
  options: RadioGroupOption[];
  value?: string;
  onChange?: (value: string) => void;
}

/** A vertical stack of `RadioOption`s sharing one selection, the survey's standard single-choice question layout. */
export function RadioGroup({ name, options, value, onChange }: RadioGroupProps) {
  return (
    <div className="vds-options" data-name={name}>
      {options.map((opt) => (
        <RadioOption key={opt.value} name={name} value={opt.value} checked={value === opt.value} onChange={onChange}>
          {opt.label}
        </RadioOption>
      ))}
    </div>
  );
}
