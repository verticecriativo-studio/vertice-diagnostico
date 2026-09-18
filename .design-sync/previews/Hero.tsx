import * as React from 'react';
import { Hero, HeroStat } from 'vertice-design-system';

export const Default = () => (
  <Hero
    eyebrow="Diagnóstico rápido · 2 minutos"
    heading={
      <>
        Marketing para <em>quem fatura bem</em>, mas ainda não tem equipe.
      </>
    }
    lead="Se seu negócio cresceu mais rápido que a estrutura de marketing, esse diagnóstico ajuda a mapear onde estão as suas maiores necessidades — e se faz sentido conversarmos sobre isso."
    stats={
      <>
        <HeroStat value="8" label="perguntas" />
        <HeroStat value="~2 min" label="tempo médio" />
        <HeroStat value="0" label="spam depois" />
      </>
    }
  />
);
