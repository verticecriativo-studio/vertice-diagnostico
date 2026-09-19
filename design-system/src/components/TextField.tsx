import * as React from 'react';

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Rótulo visível exibido acima do campo. Também usado para gerar `id`/`htmlFor` quando `id` não é informado. */
  label?: React.ReactNode;
  /** `dark` combina com o fundo escuro do cartão da etapa de contato. */
  tone?: 'light' | 'dark';
}

/** Um campo de texto de uma linha com rótulo, seguindo o estilo dos campos da pesquisa em contextos claros e escuros (cartão de contato). */
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
