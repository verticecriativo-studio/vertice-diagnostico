import * as React from 'react';

export interface EyebrowBadgeProps {
  /** Color treatment: `light` for dark backgrounds (hero), `ink` for light backgrounds (cards). */
  tone?: 'light' | 'ink';
  children: React.ReactNode;
  className?: string;
}

/** Small uppercase label with a leading triangle mark, used to tag a hero or section with a short context line. */
export function EyebrowBadge({ tone = 'light', children, className }: EyebrowBadgeProps) {
  const classes = ['vds-eyebrow', className].filter(Boolean).join(' ');
  return (
    <p className={classes} data-tone={tone === 'ink' ? 'ink' : undefined}>
      {children}
    </p>
  );
}
