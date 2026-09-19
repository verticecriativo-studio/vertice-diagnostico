import * as React from 'react';

export interface ErrorMessageProps {
  children: React.ReactNode;
  /** `dark` combina com o fundo escuro do cartão da etapa de contato. */
  tone?: 'light' | 'dark';
}

/** Mensagem de validação exibida abaixo de uma pergunta quando a etapa ainda não pode avançar. */
export function ErrorMessage({ children, tone = 'light' }: ErrorMessageProps) {
  return (
    <p className="vds-error-msg" data-tone={tone === 'dark' ? 'dark' : undefined} role="alert">
      {children}
    </p>
  );
}
