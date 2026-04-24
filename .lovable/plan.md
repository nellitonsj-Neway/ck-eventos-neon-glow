
# Recriar a calculadora de forma simplificada, sem perder funções

## Direção recomendada

Em vez de continuar corrigindo bugs pontuais da calculadora atual, a melhor solução é **reconstruir a camada de interface da calculadora** e **reaproveitar toda a lógica útil que já existe**:

- manter `eventTypes`, `services`, `pricing` e integração com WhatsApp
- substituir o fluxo atual por uma versão **mais simples, estável e previsível**
- revisar todas as combinações principais para evitar novos defeitos no site publicado

Isso reduz o risco de continuar com uma base frágil e resolve o problema de “alguns eventos não avançam” e “alguns não calculam”.

## O que será preservado

- todos os tipos de evento
- seleção de convidados
- todos os serviços atuais
- opção de cardápio do bar
- opção de horas nas experiências
- itens “sob consulta”
- faixa estimada de orçamento
- envio do resumo pelo WhatsApp

## O que será reconstruído

### 1. Simplificar o fluxo da calculadora
Substituir o wizard atual por uma calculadora mais direta, em 1 fluxo visual:

```text
Evento + convidados
→ Serviços + opções
→ Data
→ Resultado + WhatsApp
```

Sem depender de um botão “Continuar” frágil entre várias etapas.

### 2. Corrigir os bugs estruturais do fluxo atual
Os principais pontos a eliminar na implementação:

- remover a dependência do botão com tooltip/wrapper para navegação
- remover seleção ambígua nos cards de serviços
- impedir estados inválidos ou parciais no cálculo
- tratar corretamente cenários com serviços “sob consulta”
- garantir que o resultado nunca mostre `R$ 0,00` como se fosse cálculo válido quando na prática for apenas consulta comercial

### 3. Melhorar a validação
Trocar validações escondidas por validações visíveis e previsíveis:

- tipo de evento obrigatório
- pelo menos 1 serviço obrigatório
- data válida obrigatória
- convidados com faixa controlada
- feedback inline quando faltar alguma informação

### 4. Tornar o cálculo robusto
Ajustar a lógica para suportar 3 estados claros:

- **estimativa completa**: todos os itens têm preço
- **estimativa mista**: parte calculada + parte sob consulta
- **somente sob consulta**: sem valor numérico enganoso

## Arquivos a alterar

| Arquivo | Mudança |
|---|---|
| `src/components/sections/Calculator.tsx` | Recriar a calculadora como fluxo simplificado e estável |
| `src/components/calculator/Step1EventType.tsx` | Reaproveitar/adaptar UI do evento |
| `src/components/calculator/Step2Guests.tsx` | Reaproveitar/adaptar controle de convidados |
| `src/components/calculator/Step3Services.tsx` | Refatorar seleção de serviços para evitar cliques ambíguos |
| `src/components/calculator/Step4Date.tsx` | Ajustar seleção/validação de data |
| `src/components/calculator/ResultScreen.tsx` | Refazer saída para suportar estimativa completa, mista e sob consulta |
| `src/utils/calculator.ts` | Fortalecer cálculo e retorno de status |
| `src/lib/whatsapp.ts` | Garantir mensagem coerente para todos os cenários |

## Bugs já visíveis no código que serão tratados

### Fluxo atual
- o botão de avanço está acoplado a tooltip/wrapper desnecessário
- isso pode causar comportamento inconsistente em produção

### Seleção de serviços
- o card inteiro é clicável e contém checkbox interno
- isso aumenta risco de toggle duplicado, seleção inconsistente e estado difícil de prever

### Resultado
- serviços “sob consulta” entram como `null`, mas o total vira `0`
- isso pode gerar resultado enganoso para o usuário

### Data
- a regra de bloqueio usa comparação direta com `new Date()`
- isso pode causar inconsistência em horários/timezone e bloquear datas válidas no mesmo dia

## Entrega esperada

### Interface nova
- layout mais simples
- menos etapas frágeis
- validações claras
- resultado confiável
- melhor comportamento em desktop e celular

### Funcionalidade nova da saída
- mostrar:
  - faixa calculada quando houver preço
  - aviso claro quando houver itens sob consulta
  - “sob consulta” quando não houver base numérica suficiente

## Revisão completa de funcionalidades

Será feita uma checagem funcional dos cenários principais:

### Eventos
- todos os tipos de evento devem abrir e calcular normalmente

### Serviços
- bar com cardápio essencial/exclusive
- experiências com 1h, 2h, 3h, 4h
- gourmet como sob consulta
- combinações mistas entre categorias

### Resultado
- cálculo com 1 serviço
- cálculo com múltiplos serviços
- cálculo com apenas itens sob consulta
- cálculo misto
- resumo correto no WhatsApp

### Responsividade
- mobile estreito
- mobile padrão
- tablet
- desktop

## Detalhes técnicos

- preservar a configuração existente em `src/config/*`
- concentrar o estado em uma estrutura única e determinística
- eliminar interações com clique duplicado
- substituir estados implícitos por validação explícita
- usar renderização condicional simples para feedback e resultado
- manter a calculadora 100% client-side, sem backend novo

## Ordem de implementação

1. Reestruturar a experiência da calculadora em fluxo simplificado
2. Refatorar a seleção de serviços e opções
3. Reforçar `calculateBudget` com estados de cálculo válidos
4. Atualizar a tela de resultado
5. Ajustar a mensagem do WhatsApp
6. Validar cenários principais em mobile e desktop
7. Publicar novamente e conferir o comportamento no site publicado
