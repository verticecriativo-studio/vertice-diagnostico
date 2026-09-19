import * as React from 'react';

export interface HighlightProps {
  children: React.ReactNode;
  /** `ink` usa o azul-marinho da marca em vez do terracota — para textos sobre fundo terracota. */
  tone?: 'rust' | 'ink';
}

/** Trecho de texto em destaque (cor + peso), para usar dentro de títulos, ex: "Faturar não garante <Highlight>autoridade</Highlight>". */
export function Highlight({ children, tone = 'rust' }: HighlightProps) {
  return (
    <span className="vds-highlight" data-tone={tone === 'ink' ? 'ink' : undefined}>
      {children}
    </span>
  );
}
