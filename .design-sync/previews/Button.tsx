import * as React from 'react';
import { Button } from 'vertice-design-system';

export const Primary = () => <Button variant="primary">Continuar</Button>;

export const Ghost = () => <Button variant="ghost">Voltar</Button>;

export const RustTone = () => (
  <div style={{ background: '#080525', padding: 24, borderRadius: 18 }}>
    <Button variant="primary" tone="rust">
      Enviar respostas
    </Button>
  </div>
);

export const Disabled = () => (
  <Button variant="primary" disabled>
    Continuar
  </Button>
);
