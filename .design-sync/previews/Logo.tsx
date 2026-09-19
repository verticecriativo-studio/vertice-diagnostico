import * as React from 'react';
import { Logo } from 'vertice-design-system';

export const Light = () => <Logo tone="light" height={48} />;

export const Dark = () => (
  <div style={{ background: '#080525', padding: 24, borderRadius: 18 }}>
    <Logo tone="dark" height={48} />
  </div>
);
