import * as React from 'react';
import { CTASection, Button } from 'vertice-design-system';

export const Light = () => (
  <CTASection
    heading="Além da arte — estratégia aplicada à marca"
    action={<Button variant="primary">Ver portfólio completo</Button>}
  >
    Cada projeto é desenvolvido com base em posicionamento, clareza e percepção de valor. Não se trata
    apenas de estética — mas de construir marcas que se destacam e comunicam com intenção.
  </CTASection>
);

export const Dark = () => (
  <CTASection
    tone="dark"
    heading="Quer ajudar a moldar essa solução?"
    action={
      <Button variant="primary" tone="rust">
        Garantir minha vaga
      </Button>
    }
  >
    Estamos entrevistando algumas empresas antes de lançar, para garantir que o serviço resolve o problema certo.
  </CTASection>
);
