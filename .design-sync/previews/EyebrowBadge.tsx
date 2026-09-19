import * as React from 'react';
import { EyebrowBadge } from 'vertice-design-system';

export const OnDark = () => (
  <div style={{ background: '#D8604E', padding: 24, borderRadius: 18 }}>
    <EyebrowBadge>Diagnóstico rápido · 2 minutos</EyebrowBadge>
  </div>
);

export const OnLight = () => <EyebrowBadge tone="ink">Situação atual</EyebrowBadge>;
