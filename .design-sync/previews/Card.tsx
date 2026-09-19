import * as React from 'react';
import { Card, QuestionLabel, QuestionTitle, RadioGroup, NavRow, Button } from 'vertice-design-system';

export const Question = () => (
  <Card index="01 / DIAGNÓSTICO">
    <QuestionLabel>Situação atual</QuestionLabel>
    <QuestionTitle>Hoje, quem cuida do marketing digital da sua empresa?</QuestionTitle>
    <RadioGroup
      name="q1"
      value="Eu mesmo(a)"
      options={[
        { value: 'Ninguém', label: 'Ninguém — fica em segundo plano' },
        { value: 'Eu mesmo(a)', label: 'Eu mesmo(a), entre outras funções' },
        { value: 'Agência ou freelancer', label: 'Agência ou freelancer terceirizado' },
      ]}
    />
    <NavRow next={<Button variant="primary">Continuar</Button>} />
  </Card>
);

export const Plain = () => (
  <Card>
    <p style={{ margin: 0, color: 'var(--vds-ink-soft)' }}>Conteúdo livre sem numeração.</p>
  </Card>
);
