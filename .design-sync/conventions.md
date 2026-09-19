# Sistema de Design Vértice — convenções de construção

Este é o sistema de design da Vértice Criativo: nasceu na pesquisa "Diagnóstico de Marketing" (um fluxo editorial, uma pergunta por tela — hero → trilha de progresso → cartões de pergunta → cartão de contato escuro → tela de confirmação) e cresceu para incluir templates de página de marketing, posts de Instagram e slides de apresentação, baseados no material de marca real da equipe (Canva). Todo componente abaixo é React de verdade, já compilado — construa com eles, nunca recrie a marcação à mão.

## Configuração

Não é preciso nenhum provider ou wrapper de tema — não existe `ThemeProvider`/contexto. Basta importar a folha de estilos uma vez, na raiz da aplicação:

```jsx
import 'vertice-design-system/styles.css';
```

Essa única importação já traz as duas fontes da marca (`@font-face`), os tokens de cor/raio e o CSS de todos os componentes. Não há mais nada a configurar.

## Idioma visual: classes utilitárias com prefixo + tokens em variáveis CSS

Os componentes se estilizam internamente (`vds-btn`, `vds-card`, `vds-opt`, …) — você quase nunca deve escrever essas classes à mão, apenas compor os componentes exportados e passar suas props de variante/tom. Para a SUA própria estrutura de layout (wrappers de página, espaçamento entre seções), use os tokens em vez de hex/px fixos:

| Token | Valor | Uso |
|---|---|---|
| `--vds-paper` | `#FEFEFE` | Fundo de página |
| `--vds-ink` | `#080525` | Texto principal |
| `--vds-ink-soft` | `#5A5570` | Texto secundário/discreto |
| `--vds-forest` / `--vds-forest-deep` | `#143869` / `#080525` | Superfícies escuras (cartão de contato, rodapé, divisores) |
| `--vds-rust` / `--vds-rust-deep` | `#D8604E` / `#BA4537` | Cor de destaque principal (gradiente do hero, estados selecionados, CTA) |
| `--vds-line` | `#E2DEE8` | Bordas |
| `--vds-radius` | `18px` | Raio de cantos de cartões/campos |
| `--vds-font-display` | `'Plus Jakarta Sans', sans-serif` | Títulos, rótulos, texto de botões |
| `--vds-font-body` | `'Quicksand', sans-serif` | Corpo de texto, campos, parágrafos |

Sistema tipográfico com duas famílias: **Plus Jakarta Sans** (peso 500–800) para rótulos em caixa alta e títulos; **Quicksand** (peso 400–700) para corpo de texto, perguntas e campos de formulário. Nunca substitua por uma terceira família.

## Componentes (35, agrupados por função)

- **Marca**: `Logo` (símbolo + nome, arte real), `LogoMark` (símbolo sozinho, para espaços compactos como um rodapé).
- **Estrutura da pesquisa**: `Hero` (+ filhos `HeroStat`; aceita `media` opcional para heros de página de marketing), `Card` (contêiner numerado de pergunta), `ContactCard` (contêiner escuro da etapa final), `Footer`, `DraftBar`.
- **Conteúdo de pergunta**: `QuestionLabel`, `QuestionTitle`, `ErrorMessage`.
- **Campos**: `RadioGroup` (compõe `RadioOption`), `TextField`, `TextArea`, `CheckboxRow`.
- **Ações/navegação**: `Button` (`variant="primary"|"ghost"`, `tone="forest"|"rust"`), `NavRow` (layout voltar/avançar).
- **Progresso e confiança**: `ProgressRail`, `PerkList`, `DoneScreen`, `EyebrowBadge`.
- **Primitivas de texto**: `TagPill` (selo em pílula), `Highlight` (trecho de texto em destaque dentro de um título).
- **Seções de página/marketing**: `StatementSection` (afirmação centralizada), `SplitFeature` (imagem + texto lado a lado), `ServiceGrid` (grade de área de atuação), `FounderBio` (apresentação da fundadora), `CTASection` (chamada para ação), `ContactInfoGrid` (colunas de contato), `SectionDivider` (divisor de seção escuro).
- **Processo**: `ProcessSteps` (lista numerada de etapas).
- **Templates de rede social**: `SocialFrame` (moldura de proporção fixa — `1:1`, `4:5`, `9:16`), `PostCover` (capa de post/carrossel), `StoryCover` (capa de story).

**Componentes de superfície escura carregam o próprio fundo** (`Hero`, `ContactCard`, `Footer`, `DraftBar`, `FounderBio`, `SectionDivider`) — encaixe-os direto numa página clara. Componentes que renderizam texto claro sobre escuro SEM fundo próprio (`PerkList`, `ContactInfoGrid`, e `TextField`/`ErrorMessage`/`CheckboxRow`/`CTASection` com `tone="dark"`) precisam ser compostos dentro de uma dessas superfícies escuras — nunca direto sobre `--vds-paper`.

Uma etapa típica da pesquisa:

```jsx
import { Card, QuestionLabel, QuestionTitle, RadioGroup, NavRow, Button } from 'vertice-design-system';

function Step({ value, onChange }) {
  return (
    <Card index="03 / DIAGNÓSTICO">
      <QuestionLabel>Investimento</QuestionLabel>
      <QuestionTitle>Quanto sua empresa investiria por mês?</QuestionTitle>
      <RadioGroup
        name="q5"
        value={value}
        onChange={onChange}
        options={[
          { value: 'ate-500', label: 'Até R$500' },
          { value: '500-1500', label: 'R$500 a R$1.500' },
        ]}
      />
      <NavRow
        back={<Button variant="ghost">Voltar</Button>}
        next={<Button variant="primary">Continuar</Button>}
      />
    </Card>
  );
}
```

## Templates de página de marketing

Inspirados no material real da Vértice (o one-pager institucional e as apresentações comerciais do Canva). Uma página típica encadeia várias dessas seções:

```jsx
import { Hero, StatementSection, SplitFeature, ServiceGrid, FounderBio, CTASection, ContactInfoGrid, Footer, LogoMark, Highlight } from 'vertice-design-system';

<>
  <Hero eyebrow="Marca · Comunicação · Crescimento" heading={<>Marcas fortes não pedem atenção. <em>Elas são percebidas.</em></>} media={<img src={fotoHero} alt="" />} />
  <StatementSection tone="dark" heading="Quem tá cuidando do seu marketing, de verdade?" subtitle="..." />
  <SplitFeature media={<img src={foto} alt="" />} heading="Um lugar para todos">
    <p>Acreditamos que toda marca merece ter seu próprio espaço.</p>
  </SplitFeature>
  <ServiceGrid category="Branding e design" items={[...]} />
  <FounderBio photo={<img src={foto} alt="" />} eyebrow="Prazer!" heading="Sou Anellyze Schmalz, fundadora da Vértice Criativo.">...</FounderBio>
  <CTASection heading="Além da arte — estratégia aplicada à marca" action={<Button variant="primary">Ver portfólio</Button>}>...</CTASection>
  <ContactInfoGrid items={[...]} />
  <Footer brandMark={<LogoMark tone="dark" />} brandName="VÉRTICE CRIATIVO" meta="..." />
</>
```

## Templates de post e story (Instagram)

`SocialFrame` é o "canvas" — uma moldura de proporção fixa (`1:1` post quadrado, `4:5` post/carrossel, `9:16` story ou slide de apresentação vertical) que recorta seu conteúdo nesse formato. Componha `PostCover` ou `StoryCover` dentro dela, ou qualquer outra seção (ex: `StatementSection` funciona bem como slide de carrossel só-texto).

```jsx
import { SocialFrame, PostCover, Highlight } from 'vertice-design-system';

<SocialFrame ratio="4:5">
  <PostCover
    image={fotoDoCliente}
    handle="@verticecriativo.design"
    heading={<>Você já fatura, mas será que <Highlight>APARECE</Highlight>?</>}
    cta="Arrasta →"
  />
</SocialFrame>
```

Mantenha as frases curtas: `PostCover`/`StoryCover`/`StatementSection` quebram linha automaticamente em vez de cortar o texto, mas um quadro muito estreito com uma frase muito longa sempre vai ficar apertado — pense em título de poucas palavras, como nos posts reais da marca.

## Slides de apresentação

As apresentações comerciais da Vértice (formato retrato, ~9:16) usam os mesmos padrões das seções de página, só emolduradas por um `SocialFrame ratio="9:16"`: `StatementSection` para a capa e para slides de afirmação/pergunta em destaque; `SectionDivider` para separar blocos ("Etapas do projeto"); `ProcessSteps` para cronograma.

## A marca

`Logo`/`LogoMark` renderizam o logotipo real da Vértice Criativo (extraído da pasta de marca da equipe no Canva), nunca um placeholder. Ambos aceitam `tone="light"|"dark"` — use `dark` (nome em branco) sobre o fundo terracota do Hero, `ContactCard`, `Footer`, `DraftBar` ou `SectionDivider`; `light` (nome em azul-marinho) em todo o resto. Nunca recolorir ou redesenhar a marca — sempre renderizá-la através desses componentes.

## Onde está a verdade

Leia `styles.css` (e o `_ds_bundle.css` importado por ele) para o CSS compilado exato antes de escrever qualquer coisa que precise bater pixel a pixel. O `.d.ts` de cada componente é o contrato completo de props — `Button`, `TextField`, `CheckboxRow` e `RadioOption` estendem os atributos do elemento HTML nativo correspondente, então props padrão do DOM (`onClick`, `placeholder`, `disabled`, …) passam direto.
