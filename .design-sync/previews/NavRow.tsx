import * as React from 'react';
import { NavRow, Button } from 'vertice-design-system';

export const BackAndNext = () => (
  <NavRow back={<Button variant="ghost">Voltar</Button>} next={<Button variant="primary">Continuar</Button>} />
);

export const NextOnly = () => <NavRow next={<Button variant="primary">Continuar</Button>} />;
