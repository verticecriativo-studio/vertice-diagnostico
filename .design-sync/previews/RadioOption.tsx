import * as React from 'react';
import { RadioOption } from 'vertice-design-system';

export const Choices = () => (
  <div className="vds-options">
    <RadioOption name="q1-demo" value="a" checked={false}>
      Ninguém — fica em segundo plano
    </RadioOption>
    <RadioOption name="q1-demo" value="b" checked={true}>
      Eu mesmo(a), entre outras funções
    </RadioOption>
    <RadioOption name="q1-demo" value="c" checked={false}>
      Agência ou freelancer terceirizado
    </RadioOption>
  </div>
);
