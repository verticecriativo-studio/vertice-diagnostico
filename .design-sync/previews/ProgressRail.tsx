import * as React from 'react';
import { ProgressRail } from 'vertice-design-system';

export const Start = () => <ProgressRail total={8} current={1} label="Pergunta 1" percentLabel="0%" />;

export const Middle = () => <ProgressRail total={8} current={4} label="Pergunta 4" percentLabel="38%" />;

export const NearEnd = () => <ProgressRail total={8} current={8} label="Pergunta 8" percentLabel="88%" />;
