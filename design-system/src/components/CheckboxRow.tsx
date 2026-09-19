import * as React from 'react';

export interface CheckboxRowProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children: React.ReactNode;
  /** `light` combina com um fundo branco/cartão, em vez do estilo escuro padrão do cartão de contato. */
  tone?: 'dark' | 'light';
}

/** Uma caixa de seleção com o texto do rótulo formando uma linha clicável única, usada para escolhas opcionais como "sem compromisso de call". */
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
