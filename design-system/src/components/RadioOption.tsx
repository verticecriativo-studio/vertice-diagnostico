import * as React from 'react';

export interface RadioOptionProps {
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  children: React.ReactNode;
}

/** Uma opção de rádio com estilo personalizado (input nativo oculto + indicador visível), feita para ser usada dentro de `RadioGroup`. */
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
