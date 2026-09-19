import * as React from 'react';
import { FounderBio } from 'vertice-design-system';

const placeholder = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="360"><rect width="100%" height="100%" fill="#080525"/><text x="50%" y="50%" font-family="sans-serif" font-size="18" fill="white" fill-opacity="0.75" text-anchor="middle" dominant-baseline="middle">foto</text></svg>`
)}`;

export const Default = () => (
  <FounderBio
    photo={<img src={placeholder} alt="" />}
    eyebrow="Prazer!"
    heading="Sou Anellyze Schmalz, fundadora da Vértice Criativo."
  >
    Tenho experiência com branding e design, e sigo em constante evolução. Acredito que toda marca
    nasce com um propósito — e que o meu é ajudar a revelá-lo com estratégia, identidade e intenção.
  </FounderBio>
);
