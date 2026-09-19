import * as React from 'react';
import { Footer, LogoMark } from 'vertice-design-system';

export const Default = () => (
  <Footer
    brandMark={<LogoMark tone="dark" />}
    brandName="VÉRTICE CRIATIVO"
    meta="Diagnóstico de marketing · pesquisa independente · 2026"
  />
);
