

# Corrigir WhatsApp em todo o site

## Problema
`window.open` é bloqueado pelo popup blocker do navegador/iframe em todos os botões de WhatsApp.

## Correção

### 1. `src/lib/whatsapp.ts`
- Criar função auxiliar `openWhatsApp(url)` que cria um `<a>` temporário, clica programaticamente e remove
- Usar essa função em `sendCalculatorToWhatsApp` e `sendSimpleWhatsAppMessage`

### 2. `src/components/ui/floating-whatsapp.tsx`
- Trocar `window.open` pelo mesmo padrão de anchor click, ou importar `sendSimpleWhatsAppMessage` de `whatsapp.ts`

### 3. `src/components/sections/Corporate.tsx`
- Trocar `window.open` por `sendSimpleWhatsAppMessage` importado de `whatsapp.ts`

### 4. `src/components/sections/Contact.tsx`
- Verificar e corrigir o `window.open` no `onSubmit` do formulário de contato (linha ~67)

## Arquivos modificados
| Arquivo | Mudança |
|---------|---------|
| `src/lib/whatsapp.ts` | Adicionar helper `openWhatsApp`, usar nos exports |
| `src/components/ui/floating-whatsapp.tsx` | Usar anchor click |
| `src/components/sections/Corporate.tsx` | Importar e usar `sendSimpleWhatsAppMessage` |
| `src/components/sections/Contact.tsx` | Usar anchor click no submit |

