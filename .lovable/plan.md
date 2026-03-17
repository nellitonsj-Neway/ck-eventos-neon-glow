

# Correções de botões e bugs no mobile

## Problemas identificados

### 1. ResultScreen — Botão WhatsApp transborda no mobile
O botão "Solicitar Orçamento Detalhado no WhatsApp" (linha 159) tem `text-lg` e texto longo que não cabe em telas estreitas, como visível no screenshot.

**Correção:** Reduzir tamanho do texto no mobile (`text-sm sm:text-lg`), permitir quebra de linha (`whitespace-normal text-center`), e reduzir altura fixa (`h-auto py-4` em vez de `h-16`).

### 2. ResultScreen — Valor do orçamento pode transbordar
Linha 72: `text-2xl sm:text-4xl md:text-6xl` está ok, mas `formatCurrency(min) - formatCurrency(max)` pode ser largo demais em telas pequenas.

**Correção:** Adicionar `break-words` e reduzir para `text-xl` no menor breakpoint.

### 3. CTABanner — Texto sobreposto pelo botão flutuante do WhatsApp
O título "Pronto para calcular seu orçamento?" é cortado pelo botão flutuante do WhatsApp no canto inferior direito.

**Correção:** Adicionar `px-4` e garantir que o texto quebre adequadamente no mobile com `text-2xl sm:text-3xl md:text-4xl`.

### 4. Step1EventType — Badge "POPULAR" com `absolute` pode sobrepor texto
Linha 38: `absolute top-2 right-2` pode sobrepor o título do evento em telas pequenas.

**Correção:** Mover o badge para dentro do fluxo, ao lado do título, usando flex-wrap.

### 5. Footer — Endereço ainda mostra "Belo Horizonte, MG"
Linha 105: precisa ser atualizado para o endereço completo de Santa Luzia.

### 6. Gallery — Tabs com 6 colunas em mobile
Linha 71: `grid-cols-3 sm:grid-cols-6` com 6 tabs pode ficar apertado em telas de 320px.

**Correção:** Usar `grid-cols-2 sm:grid-cols-3 md:grid-cols-6` para melhor distribuição.

## Arquivos a alterar

| Arquivo | Mudança |
|---------|---------|
| `src/components/calculator/ResultScreen.tsx` | Botão WhatsApp responsivo, valor do orçamento com quebra de linha |
| `src/components/sections/CTABanner.tsx` | Título com tamanho responsivo menor no mobile |
| `src/components/calculator/Step1EventType.tsx` | Badge "POPULAR" de absolute para inline |
| `src/components/sections/Footer.tsx` | Atualizar endereço para Santa Luzia |
| `src/components/sections/Gallery.tsx` | Tabs grid responsivo `grid-cols-2` no mobile |

