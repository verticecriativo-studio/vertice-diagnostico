import * as React from 'react';
import { ServiceGrid } from 'vertice-design-system';

const placeholder = (label: string, bg: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300"><rect width="100%" height="100%" fill="${bg}"/><text x="50%" y="50%" font-family="sans-serif" font-size="15" fill="white" fill-opacity="0.75" text-anchor="middle" dominant-baseline="middle">${label}</text></svg>`
  )}`;

export const BrandingEDesign = () => (
  <ServiceGrid
    category="Branding e design"
    items={[
      { media: <img src={placeholder('paleta de cores', '#D8604E')} alt="" />, caption: 'Identidade visual e da marca' },
      { media: <img src={placeholder('embalagem', '#143869')} alt="" />, caption: 'Embalagens' },
      { media: <img src={placeholder('site', '#BA4537')} alt="" />, caption: 'Web design' },
    ]}
  />
);

export const SocialMedia = () => (
  <ServiceGrid
    category="Social media"
    items={[
      { media: <img src={placeholder('celular', '#080525')} alt="" />, caption: 'Diagnóstico de mídias sociais' },
      { media: <img src={placeholder('planejamento', '#D8604E')} alt="" />, caption: 'Gestão e execução de conteúdo' },
      { media: <img src={placeholder('câmera', '#143869')} alt="" />, caption: 'Criação de conteúdo e design digital' },
    ]}
  />
);
