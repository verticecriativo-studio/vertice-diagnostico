import * as React from 'react';
import { QuestionLabel } from 'vertice-design-system';

export const Default = () => <QuestionLabel>Situação atual</QuestionLabel>;

export const WithTag = () => <QuestionLabel tag="(opcional)">Tentativas anteriores</QuestionLabel>;
