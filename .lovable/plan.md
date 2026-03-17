

# Trocar email de contato para ckeventos.s@gmail.com

## Mudança

Substituir todas as ocorrências de `contato@ckeventos.com.br` por `ckeventos.s@gmail.com` em 5 arquivos:

| Arquivo | Ocorrências |
|---------|-------------|
| `src/utils/mailto.ts` | 1 (link mailto) |
| `src/components/sections/Contact.tsx` | 2 (href + texto visível) |
| `src/components/sections/Footer.tsx` | 2 (href + texto visível) |
| `src/pages/Terms.tsx` | 1 (texto) |
| `src/pages/Privacy.tsx` | 2 (texto) |

Todos os links `mailto:` serão atualizados para garantir que ao clicar abra o cliente de email com o endereço correto.

