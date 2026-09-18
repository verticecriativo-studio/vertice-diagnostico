import * as React from 'react';
import {
  ContactCard,
  QuestionLabel,
  PerkList,
  TextField,
  CheckboxRow,
  NavRow,
  Button,
} from 'vertice-design-system';

export const Default = () => (
  <ContactCard>
    <QuestionLabel>Última etapa</QuestionLabel>
    <h2>Quer ajudar a moldar essa solução?</h2>
    <p>
      Estamos entrevistando algumas empresas antes de lançar, para garantir que o serviço resolve o
      problema certo.
    </p>
    <PerkList
      perks={[
        { text: 'Acesso antecipado à solução, antes do lançamento oficial' },
        {
          text: 'Chance de ser selecionado(a) para ajudar a validar o modelo — com condições especiais por participar',
        },
      ]}
    />
    <TextField tone="dark" label="Nome" placeholder="Seu nome" />
    <TextField tone="dark" label="WhatsApp ou e-mail" placeholder="(xx) xxxxx-xxxx ou seuemail@exemplo.com" />
    <CheckboxRow tone="dark">Prefiro só deixar meu contato agora, sem compromisso de call.</CheckboxRow>
    <NavRow
      back={<Button variant="ghost">Voltar</Button>}
      next={
        <Button variant="primary" tone="rust">
          Enviar respostas
        </Button>
      }
    />
  </ContactCard>
);
