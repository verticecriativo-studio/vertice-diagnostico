import * as React from 'react';
import { ProcessSteps } from 'vertice-design-system';

export const Default = () => (
  <ProcessSteps
    steps={[
      { title: '1. Estratégia', description: 'Imersão + pesquisa + planejamento', active: true },
      { title: '2. Identidade', description: 'Conceito visual + verbal' },
      { title: '3. Aplicação', description: 'Entrega, ajustes e implementação' },
    ]}
  />
);
