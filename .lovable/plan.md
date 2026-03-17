

# Modernizar Calculadora de Eventos

## Diagnóstico

### Preços
Os preços em `src/config/pricing.ts` estão atualizados conforme aprovado anteriormente (Bar Essencial 100p=R$2.700, 200p=R$4.800; Exclusive 100p=R$3.300, 200p=R$5.800; Experiências de 1-4h; Gourmet sob consulta). Nenhuma alteração necessária.

### Problemas visuais atuais
1. **Emojis em todo lugar** — `🎉💰⚠️📋👥📅🎯🍹📸🍫💍👑🎂🎈💐👼🍼🎀🐾🎊💼🎓💕🫖` usados como ícones de categorias, tipos de evento, e na tela de resultado. Aspecto infantil/amador.
2. **ProgressBar simples** — apenas barra e texto "Passo X de Y".
3. **Resultado** — layout funcional mas com excesso de emojis.

## Plano de Modernização

### 1. Substituir emojis por ícones Lucide nos tipos de evento
**Arquivo:** `src/config/eventTypes.ts`
- Trocar o campo `emoji: string` por `icon: LucideIcon` usando ícones apropriados:
  - Casamento → `Heart`, 15 Anos → `Crown`, Aniversário Adulto → `Cake`, Infantil → `PartyPopper`, Bodas → `Flower2`, Batizado → `Church`, Chá de Bebê → `Baby`, Chá Revelação → `Gift`, Pet → `PawPrint`, Confraternização → `Users`, Corporativo → `Briefcase`, Formatura → `GraduationCap`, Noivado → `HeartHandshake`, Chá de Panela → `CookingPot`, Outros → `Sparkles`

### 2. Atualizar Step1EventType
**Arquivo:** `src/components/calculator/Step1EventType.tsx`
- Renderizar `<Icon>` Lucide ao invés de `<span>{emoji}</span>`
- Ícone com cor `text-primary`, tamanho `w-8 h-8`

### 3. Substituir emojis nas categorias de serviço
**Arquivo:** `src/config/services.ts`
- Trocar `serviceCategories[].icon` (string emoji) por Lucide icons:
  - Bar → `Wine`, Experiências → `Camera`, Gourmet → `ChefHat`

### 4. Atualizar Step3Services
**Arquivo:** `src/components/calculator/Step3Services.tsx`
- Renderizar ícone Lucide no header da categoria ao invés de emoji

### 5. Modernizar ProgressBar com ícones de etapa
**Arquivo:** `src/components/calculator/ProgressBar.tsx`
- Adicionar 4 ícones circulares (Sparkles, Users, ListChecks, CalendarDays) representando cada etapa
- Etapas completadas ficam com fundo primary, atual com borda primary, futuras com borda muted

### 6. Modernizar ResultScreen (remover todos os emojis)
**Arquivo:** `src/components/calculator/ResultScreen.tsx`
- Substituir `🎉` → `Sparkles`, `💰` → `DollarSign`, `⚠️` → `AlertTriangle`, `📋` → `ClipboardList`, `👥` → `Users`, `📅` → `CalendarDays`, `🎯` → `Target`
- Usar ícones Lucide inline com tamanho consistente

### Arquivos modificados
- `src/config/eventTypes.ts` — campo icon com Lucide
- `src/config/services.ts` — categoryIcon com Lucide
- `src/components/calculator/Step1EventType.tsx`
- `src/components/calculator/Step3Services.tsx`
- `src/components/calculator/ProgressBar.tsx`
- `src/components/calculator/ResultScreen.tsx`
- `src/components/calculator/Step2Guests.tsx` — remover emoji `💡`
- `src/components/calculator/Step4Date.tsx` — remover emoji `💡`

