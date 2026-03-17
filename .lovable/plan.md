

# Correção de Responsividade do Site Inteiro

## Problemas Identificados

### 1. Galeria — Tabs com 6 colunas no mobile
`Gallery.tsx` linha 71: `grid-cols-6` faz os filtros ficarem ilegíveis no celular.

### 2. Calculadora Step 3 — Padding e margens excessivas
- `pr-24` no container de texto dos serviços causa overflow no mobile
- `ml-12` nos painéis de opções (bar type, horas) empurra conteúdo para fora da tela

### 3. Tela de Resultado — Valores transbordando
- `text-5xl md:text-6xl` para faixa de preço transborda em telas pequenas

### 4. Carrossel de Depoimentos — Setas cortadas
- `CarouselPrevious`/`CarouselNext` ficam cortadas fora do container no mobile

### 5. CTABanner — WhatsApp ainda usa window.open
- Não foi corrigido na última atualização — popup bloqueado no mobile

### 6. Calculadora — min-height excessiva
- `min-h-[500px]` desperdiça espaço em telas menores

### 7. ProgressBar — Labels apertadas no mobile
- Os 4 steps ficam comprimidos em telas de 320-375px

## Correções Planejadas

| Arquivo | Mudança |
|---------|---------|
| `src/components/sections/Gallery.tsx` | Tabs: `grid-cols-3 sm:grid-cols-6` |
| `src/components/calculator/Step3Services.tsx` | `pr-24` → `pr-2 sm:pr-24`; `ml-12` → `ml-2 sm:ml-12`; badges empilhar verticalmente no mobile |
| `src/components/calculator/ResultScreen.tsx` | Preço: `text-3xl sm:text-5xl md:text-6xl`; layout compacto |
| `src/components/sections/Testimonials.tsx` | Esconder setas no mobile, adicionar padding lateral |
| `src/components/sections/CTABanner.tsx` | Substituir `window.open` por anchor click (mesmo padrão do whatsapp.ts) |
| `src/components/sections/Calculator.tsx` | `min-h-[500px]` → `min-h-[400px] sm:min-h-[500px]` |
| `src/components/calculator/ProgressBar.tsx` | Labels menores: `text-[10px] sm:text-xs`; circles menores no mobile |
| `src/components/sections/Hero.tsx` | Título: `text-3xl sm:text-5xl md:text-7xl`; glow orbs menores no mobile |

