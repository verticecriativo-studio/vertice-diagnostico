import * as React from 'react';
import { LogoStacked } from 'vertice-design-system';

export const WithTagline = () => <LogoStacked tone="light" height={140} />;

export const NoTagline = () => (
  <div style={{ background: '#D8604E', padding: 24, borderRadius: 18 }}>
    <LogoStacked tone="dark" tagline={false} height={120} />
  </div>
);
