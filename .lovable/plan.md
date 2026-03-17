

# Inserir Fotos Reais na Seção Sobre

## Alterações

### 1. Salvar as 4 imagens em `public/images/team/`
- `karine_camisa_preta.jpeg`
- `philipe_camisa_preta.jpeg`
- `philipe_ekarine.png`
- `foto_quemsomos.png`

### 2. Atualizar `src/config/images.ts`
Substituir URLs do Unsplash pelos caminhos locais:
- `team.karine` → `/images/team/karine_camisa_preta.jpeg`
- `team.philipe` → `/images/team/philipe_camisa_preta.jpeg`
- `team.team1` → `/images/team/philipe_ekarine.png`
- `team.team2` → `/images/team/foto_quemsomos.png`

### 3. Grid no About.tsx
Manter o grid 2x2 existente, apenas os alts serão ajustados para refletir as fotos reais.

