

# Correções + Melhorias da Calculadora + Remoção Stats

## 1. Remover seção Stats
**Arquivo:** `src/pages/Index.tsx`
- Remover import e `<Stats />` do layout

## 2. Corrigir scroll (bug)
**Arquivo:** `src/components/sections/Calculator.tsx`
- Substituir `window.scrollTo({ top: 0 })` por `document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth' })` nas 3 funções: `handleNext` (L48), `handleBack` (L55), `handleReset` (L68)

## 3. Corrigir marcadores do slider de convidados (bug)
**Arquivo:** `src/components/calculator/Step2Guests.tsx`
- Usar posicionamento absoluto proporcional ao slider (min=20, max=500)
- Marcadores simplificados: 50, 100, 200, 300, 400 com `left: ((marker-20)/480)*100%`

## 4. Animações de transição entre etapas
**Arquivo:** `src/components/sections/Calculator.tsx`
- Adicionar key={currentStep} no container do step com classe `animate-fade-in` para animar entrada de cada etapa
- Alternativa: usar CSS transition com opacity/transform

## 5. Preços visíveis na seleção de serviços (Step 3)
**Arquivo:** `src/components/calculator/Step3Services.tsx`
- Receber `guests` como nova prop
- Mostrar preço estimado ao lado de cada serviço selecionado usando `getPriceForService()`
- Serviços "sob consulta" mostram badge "Sob consulta"
- Exibir subtotal no rodapé da etapa

**Arquivo:** `src/components/sections/Calculator.tsx`
- Passar `guests={calculatorData.guests}` para Step3Services

## 6. Validação visual no botão Continuar
**Arquivo:** `src/components/sections/Calculator.tsx`
- Adicionar tooltip no botão "Continuar" quando desabilitado, explicando o que falta (ex: "Selecione pelo menos 1 serviço")
- Usar `TooltipProvider/Tooltip` do shadcn

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `src/pages/Index.tsx` | Remover Stats |
| `src/components/sections/Calculator.tsx` | Fix scroll, animações, tooltip, passar guests ao Step3 |
| `src/components/calculator/Step2Guests.tsx` | Fix marcadores slider |
| `src/components/calculator/Step3Services.tsx` | Mostrar preços em tempo real |

