

# Plano Atualizado: Fotos de Experiências Interativas + Equipe

Agora com **12 fotos no total** (8 anteriores de experiências + 4 novas incluindo equipe e evento).

## Fotos a integrar

**Experiências Interativas (8 fotos anteriores):**
1. IMG_9584.JPG - Cabine de Fotos (debutante na cortina)
2. IMG-20240315-WA0177.jpg - Plataforma 360 (meninas na plataforma LED)
3. IMG_4836.JPG - Plataforma 360 (rapazes com adereços)
4. IMG_4835.JPG - Plataforma 360 (casal de noivos)
5. B8D7588A...jpg - Setup da Plataforma 360
6. A406888E...jpg - Close dos adereços
7. A406888E_1.jpg - Duplicata (descartar)
8. 73BD669E...JPG - Setup completo com letreiro CK

**Novas fotos (4):**
9. 73BD669E-2.JPG - Setup completo (duplicata da 8, descartar)
10. 322A4943.jpeg - Equipe CK (3 pessoas, uniforme preto, painel "Let's Party")
11. 322A4948.jpeg - Karine individual (painel "Let's Party")
12. Duda15Anos-175.JPEG - Equipe no evento 15 Anos (3 mulheres, decoração elegante)

**Total único: 10 fotos** (2 duplicatas descartadas)

## Alterações

### 1. Salvar imagens
- 7 fotos em `public/images/experiencias/` (cabine, plataforma, setup, adereços)
- 3 fotos em `public/images/team/` (equipe CK, Karine, equipe 15 anos)

### 2. Atualizar `src/config/images.ts`
- Substituir placeholders Unsplash de `services.plataforma360`, `services.cabineFotos`, `services.totem` por fotos reais
- Adicionar 7 entradas `exp1`-`exp7` na seção `gallery`
- Adicionar novas fotos de equipe na seção `team` (equipe_letsparty, karine_letsparty, equipe_15anos)

### 3. Atualizar `src/components/sections/Services.tsx`
- Aplicar mini galeria (grid) no card "Experiências Interativas" (mesmo padrão do Bar de Drinks) com as 7 fotos
- Clicar na miniatura abre o Lightbox

### 4. Atualizar `src/components/sections/Gallery.tsx`
- Adicionar as 7 fotos de experiências com categorias (`sweet15`, `wedding`, `birthday`)
- Adicionar as 3 fotos de equipe/evento com categorias relevantes

### 5. Atualizar `src/components/sections/About.tsx`
- Substituir ou adicionar as novas fotos de equipe (equipe CK completa, Karine, equipe no evento)

### Arquivos modificados
- 10 imagens criadas em `public/images/experiencias/` e `public/images/team/`
- `src/config/images.ts`
- `src/components/sections/Services.tsx`
- `src/components/sections/Gallery.tsx`
- `src/components/sections/About.tsx`

