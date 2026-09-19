import * as React from 'react';
import { SplitFeature } from 'vertice-design-system';

const placeholder = (label: string, bg = '#D8604E') =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="480"><rect width="100%" height="100%" fill="${bg}"/><text x="50%" y="50%" font-family="sans-serif" font-size="22" fill="white" fill-opacity="0.75" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`
  )}`;

export const ImageLeft = () => (
  <SplitFeature
    media={<img src={placeholder('foto: café + notebook', '#143869')} alt="" />}
    heading="Um lugar para todos"
  >
    <p>
      Acreditamos que toda marca merece ter seu próprio espaço — para existir com autenticidade,
      comunicar com clareza e se destacar com identidade.
    </p>
    <p>Na Vértice Criativo, transformamos ideias em presença de marca — com estratégia, beleza e propósito.</p>
  </SplitFeature>
);

export const ImageRight = () => (
  <SplitFeature
    reverse
    media={<img src={placeholder('foto: mesa de trabalho', '#D8604E')} alt="" />}
    heading="Diagnóstico de mídias sociais"
  >
    <p>Mapeamos o que já funciona no seu Instagram e o que está travando o crescimento — antes de propor qualquer mudança.</p>
  </SplitFeature>
);
