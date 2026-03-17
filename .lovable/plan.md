

# Restaurar Seção "Sobre" com 4 Fotos de Philipe e Karine

## Problema
Os arquivos `equipe_letsparty.jpeg` e `equipe_15anos.jpeg` foram sobrescritos com fotos novas. O About.tsx referencia essas fotos, mas agora mostram imagens erradas.

## Solução
Usar as 4 fotos de Philipe e Karine que ainda existem no projeto com nomes diferentes:

| Posição no grid | Foto atual (referência) | Substituir por |
|---|---|---|
| Esquerda topo | `images.team.karine` (karine_camisa_preta.jpeg) | **Manter** ✓ |
| Esquerda baixo | `images.team.equipe_letsparty` (sobrescrita) | `images.team.team1` (philipe_ekarine.png) |
| Direita topo | `images.team.philipe` (philipe_camisa_preta.jpeg) | **Manter** ✓ |
| Direita baixo | `images.team.equipe_15anos` (sobrescrita) | `images.team.team2` (foto_quemsomos.png) |

## Alteração
**`src/components/sections/About.tsx`** — Trocar as 2 referências de imagem sobrescritas por fotos existentes de Philipe e Karine (`philipe_ekarine.png` e `foto_quemsomos.png`).

