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

const photo = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480"><rect width="100%" height="100%" fill="#080525"/><text x="50%" y="50%" font-family="sans-serif" font-size="18" fill="white" fill-opacity="0.5" text-anchor="middle" dominant-baseline="middle">foto</text></svg>`
)}`;

export const WithMedia = () => (
  <Hero
    eyebrow="Marca · Comunicação · Crescimento"
    heading={
      <>
        Marcas fortes não pedem atenção. <em>Elas são percebidas.</em>
      </>
    }
    lead="Identidades que emocionam e posicionam."
    media={<img src={photo} alt="" />}
  />
);
