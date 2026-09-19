import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Estilo visual. `primary` é o botão principal em formato pílula, `ghost` é a ação em texto sublinhado. */
  variant?: 'primary' | 'ghost';
  /** Cor de destaque usada em botões `primary` em contextos escuros, ex: a etapa de contato. */
  tone?: 'forest' | 'rust';
  children: React.ReactNode;
}

/** Botão principal (pílula) e botão de texto da Vértice, usados para navegar entre as etapas da pesquisa. */
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
