import * as React from 'react';
import { Footer } from 'vertice-design-system';

const Mark = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
    <circle cx="14" cy="14" r="13" fill="#D8604E" />
    <path d="M8 19 L14 7 L20 19 Z" fill="#FEFEFE" />
  </svg>
);

export const Default = () => (
  <Footer
    brandMark={<Mark />}
    brandName="VÉRTICE CRIATIVO"
    meta="Diagnóstico de marketing · pesquisa independente · 2026"
  />
);
