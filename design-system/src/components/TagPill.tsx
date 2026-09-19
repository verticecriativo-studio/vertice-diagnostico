import * as React from 'react';

export interface TagPillProps {
  children: React.ReactNode;
  /** `dark` usa o contorno claro (coral pálido), para fundos escuros. */
  tone?: 'light' | 'dark';
  className?: string;
}

/** Selo pequeno com contorno em pílula, usado para marcar temas acima de um título de destaque (ex: "ESSÊNCIA", "PERCEPÇÃO"). */
export function TagPill({ children, tone = 'light', className }: TagPillProps) {
  const classes = ['vds-tag-pill', className].filter(Boolean).join(' ');
  return (
    <span className={classes} data-tone={tone === 'dark' ? 'dark' : undefined}>
      {children}
    </span>
  );
}
