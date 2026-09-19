import * as React from 'react';

export interface ContactInfoItem {
  label: React.ReactNode;
  value: React.ReactNode;
}

export interface ContactInfoGridProps {
  items: ContactInfoItem[];
  className?: string;
}

/** Grade de colunas com informações de contato (ex: "Entre em contato", "Horários", "Nossas redes"), em fundo azul-marinho. */
export function ContactInfoGrid({ items, className }: ContactInfoGridProps) {
  const classes = ['vds-contact-grid', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {items.map((item, i) => (
        <div key={i}>
          <p className="vds-contact-grid-item-label">{item.label}</p>
          <div className="vds-contact-grid-item-value">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
