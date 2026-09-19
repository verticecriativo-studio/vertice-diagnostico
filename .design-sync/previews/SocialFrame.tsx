import * as React from 'react';
import { SocialFrame, StatementSection } from 'vertice-design-system';

export const Square = () => (
  <div style={{ width: 260 }}>
    <SocialFrame ratio="1:1">
      <StatementSection tone="dark" heading="Marcas fortes não pedem atenção. Elas são percebidas." />
    </SocialFrame>
  </div>
);

export const Story = () => (
  <div style={{ width: 200 }}>
    <SocialFrame ratio="9:16">
      <StatementSection tone="light" heading="Comunicação confusa. Logo bonita, marca fraca." />
    </SocialFrame>
  </div>
);
