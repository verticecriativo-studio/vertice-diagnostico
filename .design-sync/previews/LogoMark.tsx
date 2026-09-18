import * as React from 'react';
import { LogoMark } from 'vertice-design-system';

export const Light = () => <LogoMark tone="light" size={48} />;

export const Dark = () => (
  <div style={{ background: '#080525', padding: 24, borderRadius: 18 }}>
    <LogoMark tone="dark" size={48} />
  </div>
);
