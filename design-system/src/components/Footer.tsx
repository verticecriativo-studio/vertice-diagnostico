import * as React from 'react';

export interface FooterProps {
  /** Small brand mark rendered before the brand name, e.g. a logo `<img>` or `<svg>`. */
  brandMark?: React.ReactNode;
  brandName: React.ReactNode;
  meta?: React.ReactNode;
}

/** Dark page footer with a brand lockup on the left and uppercase meta text on the right. */
export function Footer({ brandMark, brandName, meta }: FooterProps) {
  return (
    <footer className="vds-footer">
      <div className="vds-footer-row">
        <div className="vds-footer-brand">
          {brandMark}
          <span>{brandName}</span>
        </div>
        {meta ? <span className="vds-footer-meta">{meta}</span> : null}
      </div>
    </footer>
  );
}
