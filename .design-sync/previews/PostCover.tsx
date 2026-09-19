import * as React from 'react';
import { SocialFrame, PostCover, Highlight } from 'vertice-design-system';

const photo = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="625"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a3552"/><stop offset="1" stop-color="#171334"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="50%" y="50%" font-family="sans-serif" font-size="20" fill="white" fill-opacity="0.5" text-anchor="middle" dominant-baseline="middle">foto do cliente</text></svg>`
)}`;

export const Default = () => (
  <div style={{ width: 220 }}>
    <SocialFrame ratio="4:5">
      <PostCover
        image={photo}
        handle="@verticecriativo.design"
        heading={
          <>
            Você já fatura, mas será que <Highlight>APARECE</Highlight>?
          </>
        }
        cta="Arrasta →"
      />
    </SocialFrame>
  </div>
);
