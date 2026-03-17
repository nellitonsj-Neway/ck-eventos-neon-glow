

# Favicon com logo CK (fundo escuro) — todas as plataformas

## O que será feito

A imagem `favicon_CK.jpg` (logo CK com fundo escuro) será usada como favicon em todas as plataformas: desktop, mobile (iOS/Android), e previews de links (Open Graph).

## Arquivos

| Arquivo | Mudança |
|---------|---------|
| `public/favicon.png` | Substituir pelo upload `favicon_CK.jpg` |
| `public/favicon.ico` | Substituir pelo upload `favicon_CK.jpg` |
| `public/apple-touch-icon.png` | Criar — cópia do upload (ícone iOS) |
| `index.html` | Adicionar `<link rel="apple-touch-icon">`, `<meta name="theme-color">`, e garantir og:image |

## Mudanças no `index.html`

Adicionar no `<head>`:
```html
<link rel="icon" href="/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta name="theme-color" content="#0a0a0a">
```

Isso garante:
- **Desktop**: favicon padrão via `rel="icon"`
- **iPhone/iPad**: ícone ao salvar na tela inicial via `apple-touch-icon`
- **Android/Chrome**: ícone via `rel="icon"` (PNG é suportado)
- **WhatsApp/Telegram preview**: og:image já está configurado

