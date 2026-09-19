import * as React from 'react';
import { StatementSection, TagPill, Highlight } from 'vertice-design-system';

export const Light = () => (
  <StatementSection
    tone="light"
    tagsTop={
      <>
        <TagPill>Essência</TagPill>
        <TagPill>Percepção</TagPill>
      </>
    }
    heading={
      <>
        Antes de ser ouvida, sua marca precisa ser <Highlight>percebida</Highlight>.
      </>
    }
    tagsBottom={
      <>
        <TagPill>Clareza</TagPill>
        <TagPill>Autenticidade</TagPill>
      </>
    }
  />
);

export const Dark = () => (
  <StatementSection
    tone="dark"
    heading="Quem tá cuidando do seu marketing, de verdade?"
    subtitle="Hoje é fácil produzir conteúdo — a ferramenta ficou acessível para qualquer um. O que continua raro é a direção: alguém acompanhando sua marca de perto, todos os dias."
  />
);
