

# Corrigir sobreposições no mobile + atualizar endereço e mapa

## Problemas identificados

### 1. Step3Services — Badges sobrepondo texto (calculadora)
Os badges (preço, "RECOMENDADO", "Sob consulta") estão com `absolute top-2 right-2` e sobrepõem o título do serviço no mobile, onde o espaço horizontal é limitado.

### 2. Contact — Endereço e mapa
- Endereço errado ("Belo Horizonte, MG") — precisa ser o endereço completo de Santa Luzia
- Google Maps com URL genérica que não aponta para o endereço real
- Mapa não é clicável para abrir no app de mapas

### 3. Contact — Layout mobile
No mobile, as informações de contato (telefone, email, endereço, horário) podem ter textos longos que se sobrepõem.

## Correções planejadas

| Arquivo | Mudança |
|---------|---------|
| `src/components/calculator/Step3Services.tsx` | Remover posicionamento `absolute` dos badges. Mover badges para dentro do fluxo do card, abaixo do título/descrição do serviço, evitando sobreposição |
| `src/components/sections/Contact.tsx` | Atualizar endereço para "R. Poti, 90 - Escritório 2 - São Cosme de Cima (São Benedito), Santa Luzia - MG, 33130-450". Atualizar embed do Google Maps para o endereço real. Envolver mapa em link clicável. Adicionar `break-words` e ajustes de espaçamento no mobile |

### Detalhes técnicos — Step3Services

Trocar o layout do card de posição absoluta para fluxo normal:
- Remover `relative` do container e `absolute top-2 right-2` dos badges
- Mover a `div` de badges para **dentro** do conteúdo, logo após o nome do serviço
- Usar `flex-wrap gap-1` inline com o título
- Remover `pr-2 sm:pr-24` que compensava o posicionamento absoluto

### Detalhes técnicos — Contact

- Atualizar `iframe src` para embed do endereço real em Santa Luzia
- Envolver iframe em `<a target="_blank">` apontando para Google Maps
- Endereço de texto também vira link clicável
- Adicionar `break-all` ou `break-words` no email para evitar overflow no mobile
- Garantir `min-w-0` nos containers flex para permitir truncamento correto

