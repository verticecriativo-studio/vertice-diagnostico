import * as React from 'react';
import { TagPill } from 'vertice-design-system';

export const Light = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <TagPill>Essência</TagPill>
    <TagPill>Percepção</TagPill>
  </div>
);

export const Dark = () => (
  <div style={{ background: '#080525', padding: 24, borderRadius: 18, display: 'flex', gap: 8 }}>
    <TagPill tone="dark">Etapas do projeto</TagPill>
  </div>
);
