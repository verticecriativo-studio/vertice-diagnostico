import * as React from 'react';
import { Highlight } from 'vertice-design-system';

export const Default = () => (
  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 24, fontWeight: 700, maxWidth: 320, margin: 0 }}>
    Faturar não garante <Highlight>autoridade</Highlight>
  </p>
);

export const OnRustBackground = () => (
  <div style={{ background: '#D8604E', padding: 24, borderRadius: 18 }}>
    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 24, fontWeight: 700, color: '#fff', margin: 0 }}>
      Você já fatura, mas será que <Highlight tone="ink">aparece</Highlight>?
    </p>
  </div>
);
