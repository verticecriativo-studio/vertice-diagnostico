import * as React from 'react';
import { RadioGroup } from 'vertice-design-system';

export const FourOptions = () => (
  <RadioGroup
    name="q4-demo"
    value="1h a 3h"
    options={[
      { value: 'Menos de 1h', label: 'Menos de 1h' },
      { value: '1h a 3h', label: '1h a 3h' },
      { value: '3h a 6h', label: '3h a 6h' },
      { value: 'Mais de 6h', label: 'Mais de 6h' },
    ]}
  />
);

export const Unselected = () => (
  <RadioGroup
    name="q5-demo"
    options={[
      { value: 'Até R$500', label: 'Até R$500' },
      { value: 'R$500 a R$1.500', label: 'R$500 a R$1.500' },
      { value: 'Acima de R$3.000', label: 'Acima de R$3.000' },
    ]}
  />
);
