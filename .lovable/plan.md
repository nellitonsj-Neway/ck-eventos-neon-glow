

# Mini Galeria de Fotos no Card "Bar de Drinks" + Remover Duplicata

## Alterações

### 1. Remover foto duplicada
- Excluir `banheirinha_azul2.jpg` de `public/images/bar/`
- Remover referência `bar8` de `src/config/images.ts` e da `Gallery.tsx`

### 2. Expandir o card "Bar de Drinks" em `Services.tsx`
- Quando `service.id === 'bar'`, substituir a imagem única por um **grid de miniaturas** (3 colunas x 4 linhas) mostrando as 12 fotos reais do bar
- Cada miniatura será um `LazyImage` com `aspect-ratio: 1/1` (quadrada), com efeito hover de zoom
- O card do bar ficará maior que os outros cards (ocupando a largura total ou 2 colunas do grid) para acomodar a mini galeria
- Clicar em uma miniatura pode abrir o lightbox existente (se houver) ou simplesmente rolar até a galeria

### 3. Layout proposto
```text
┌──────────────────────────────────────────┐
│  Bar de Drinks                           │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐           │
│  │foto│ │foto│ │foto│ │foto│           │
│  └────┘ └────┘ └────┘ └────┘           │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐           │
│  │foto│ │foto│ │foto│ │foto│           │
│  └────┘ └────┘ └────┘ └────┘           │
│  ┌────┐ ┌────┐ ┌────┐                   │
│  │foto│ │foto│ │foto│                   │
│  └────┘ └────┘ └────┘                   │
│  Descrição + botão "Saiba mais"          │
└──────────────────────────────────────────┘
```

### 4. Arquivos modificados
- `src/components/sections/Services.tsx` — lógica especial para o card bar com grid de fotos
- `src/config/images.ts` — remover `bar8` (duplicata)
- `src/components/sections/Gallery.tsx` — remover entrada duplicada

