import * as React from 'react';
import { SocialFrame, StoryCover } from 'vertice-design-system';

const photo = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="711"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8a7f6a"/><stop offset="1" stop-color="#4a4436"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="50%" y="50%" font-family="sans-serif" font-size="18" fill="white" fill-opacity="0.5" text-anchor="middle" dominant-baseline="middle">foto do cliente</text></svg>`
)}`;

export const Default = () => (
  <div style={{ width: 160 }}>
    <SocialFrame ratio="9:16">
      <StoryCover
        image={photo}
        note="Hoje é daqueles dias que a gente não espera acontecer... a gente cria!"
        heading="Bom dia!"
        tag={
          <>
            Quinta
            <br />
            feira
          </>
        }
      />
    </SocialFrame>
  </div>
);
