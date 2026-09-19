import * as React from 'react';

export interface ServiceGridItem {
  /** Imagem ilustrativa do item (ex: um `<img>`). */
  media: React.ReactNode;
  caption: React.ReactNode;
}

export interface ServiceGridProps {
  heading?: React.ReactNode;
  /** Rótulo da categoria acima da grade, ex: "BRANDING E DESIGN". */
  category?: React.ReactNode;
  items: ServiceGridItem[];
  className?: string;
}

/** Grade de itens com foto + legenda, usada para listar áreas de atuação ou serviços. */
export function ServiceGrid({ heading, category, items, className }: ServiceGridProps) {
  const classes = ['vds-service-grid-wrap', className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {heading ? <p className="vds-service-grid-heading">{heading}</p> : null}
      {category ? <p className="vds-service-grid-category">{category}</p> : null}
      <div className="vds-service-grid">
        {items.map((item, i) => (
          <div key={i} className="vds-service-item">
            <div className="vds-service-item-media">{item.media}</div>
            <p className="vds-service-item-caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
