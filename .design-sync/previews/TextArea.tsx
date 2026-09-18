import * as React from 'react';
import { TextArea } from 'vertice-design-system';

export const Empty = () => (
  <TextArea placeholder="Conte se já tentou e não deu certo, ou se nunca chegou a tentar. Pode deixar em branco e seguir." />
);

export const Filled = () => (
  <TextArea defaultValue="Já contratei um freelancer há um ano, mas faltava direção estratégica e acabamos não renovando." />
);
