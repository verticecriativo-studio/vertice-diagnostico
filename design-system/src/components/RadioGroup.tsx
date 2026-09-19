import * as React from 'react';
import { RadioOption } from './RadioOption';

export interface RadioGroupOption {
  value: string;
  label: React.ReactNode;
}

export interface RadioGroupProps {
  /** `name` compartilhado pelos campos de rádio internos. */
  name: string;
  options: RadioGroupOption[];
  value?: string;
  onChange?: (value: string) => void;
}

/** Uma pilha vertical de `RadioOption`s compartilhando uma única seleção — o layout padrão de pergunta de escolha única da pesquisa. */
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
