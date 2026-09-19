import * as React from 'react';
import { ErrorMessage } from 'vertice-design-system';

export const Light = () => <ErrorMessage>Escolha uma opção para continuar.</ErrorMessage>;

export const Dark = () => (
  <div style={{ background: '#080525', padding: 24, borderRadius: 18 }}>
    <ErrorMessage tone="dark">
      Preencha nome e contato, ou marque a opção acima para enviar sem compromisso de call.
    </ErrorMessage>
  </div>
);
