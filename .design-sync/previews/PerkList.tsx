import * as React from 'react';
import { PerkList } from 'vertice-design-system';

export const Default = () => (
  <div style={{ background: '#080525', padding: 24, borderRadius: 18 }}>
    <PerkList
      perks={[
        { text: 'Acesso antecipado à solução, antes do lançamento oficial' },
        {
          text: 'Chance de ser selecionado(a) para ajudar a validar o modelo — com condições especiais por participar',
        },
      ]}
    />
  </div>
);
