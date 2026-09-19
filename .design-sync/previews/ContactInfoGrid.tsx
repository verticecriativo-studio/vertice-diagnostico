import * as React from 'react';
import { ContactInfoGrid } from 'vertice-design-system';

export const Default = () => (
  <ContactInfoGrid
    items={[
      { label: 'Entre em contato', value: <>(47) 9 8866-5511<br />verticecriativo.studio@gmail.com</> },
      { label: 'Horários', value: 'Segunda a sexta-feira: das 9h às 18h' },
      { label: 'Nossas redes', value: '@verticecriativo.design' },
    ]}
  />
);
