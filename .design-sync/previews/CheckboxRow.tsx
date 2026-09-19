import * as React from 'react';
import { CheckboxRow } from 'vertice-design-system';

export const Dark = () => (
  <div style={{ background: '#080525', padding: 24, borderRadius: 18 }}>
    <CheckboxRow tone="dark">Prefiro só deixar meu contato agora, sem compromisso de call.</CheckboxRow>
  </div>
);

export const Light = () => (
  <CheckboxRow tone="light" defaultChecked>
    Aceito receber novidades por e-mail.
  </CheckboxRow>
);
