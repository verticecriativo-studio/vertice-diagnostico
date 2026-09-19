import * as React from 'react';
import { TextField } from 'vertice-design-system';

export const Light = () => (
  <TextField label="Contexto" placeholder="Ex: clínica odontológica, 8 funcionários, uma unidade" />
);

export const Dark = () => (
  <div style={{ background: '#080525', padding: 24, borderRadius: 18 }}>
    <TextField tone="dark" label="Nome" placeholder="Seu nome" />
  </div>
);

export const Filled = () => (
  <div style={{ background: '#080525', padding: 24, borderRadius: 18 }}>
    <TextField tone="dark" label="WhatsApp ou e-mail" defaultValue="maria@exemplo.com" />
  </div>
);
