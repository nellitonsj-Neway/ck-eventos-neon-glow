

# Incluir Novas Fotos do Bar nos Serviços e Galeria

O usuário enviou 6 novas fotos do bar (somando às 7 anteriores que ainda não foram inseridas). Total de 13 fotos do bar para integrar.

## Fotos anteriores (7)
- barescuro.jpg, palavra_bar_iluminada.JPG, cliente_drinknamao.jpg, coketeleira_e_laranjas_bar.jpg, morangos_bar.JPG, cliente_drink_na_mao2.JPG, Banheirinha_azul.JPG

## Novas fotos (6)
- Banheirinha_azul-2.JPG, ckeventosfolder.JPEG, drinknamao.jpg, Cliente_drink_na_mão3.JPG, balcao_bar.JPG, balcaobar2.JPEG

## Alterações

### 1. Salvar todas as 13 imagens em `public/images/bar/`

### 2. Atualizar `src/config/images.ts`
- Substituir `services.bar` pela foto principal (ex: `barescuro.jpg`)
- Adicionar todas as 13 fotos na seção `gallery` com novas chaves (ex: `bar1` a `bar13`)

### 3. Atualizar `src/components/sections/Services.tsx`
- O card "Bar de Drinks" passará a usar a foto real automaticamente via `images.services.bar`

### 4. Atualizar `src/components/sections/Gallery.tsx`
- Adicionar as 13 fotos ao array `galleryImages` com categoria `['wedding', 'birthday']` (bar aparece em vários tipos de evento)
- Considerar adicionar um filtro "Bar" na galeria para facilitar navegação

