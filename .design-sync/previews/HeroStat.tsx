import * as React from 'react';
import { HeroStat } from 'vertice-design-system';

export const Row = () => (
  <div style={{ background: '#D8604E', padding: 24, borderRadius: 18 }}>
    <ul className="vds-hero-meta" style={{ margin: 0 }}>
      <HeroStat value="8" label="perguntas" />
      <HeroStat value="~2 min" label="tempo médio" />
      <HeroStat value="0" label="spam depois" />
    </ul>
  </div>
);
