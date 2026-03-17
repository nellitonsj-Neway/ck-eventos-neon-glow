
# Plano de Atualização Completa - CK Eventos

## Resumo Executivo
Atualizar o site para refletir os serviços oficiais da CK Eventos, organizados em 3 categorias principais.

---

## Estrutura Final de Serviços

```text
CK EVENTOS
├── 🍹 BAR DE DRINKS
│   ├── CK Essencial (cardápio clássico)
│   └── CK Exclusive (cardápio premium)
│
├── 📸 EXPERIÊNCIAS INTERATIVAS
│   ├── Plataforma 360° (vídeos com iPhone 14 Plus)
│   ├── Cabine de Fotos (impressão instantânea)
│   └── Totem Fotográfico (versão compacta)
│
└── 🍫 ESTAÇÃO GOURMET (Novidade)
    ├── Carrinho de Açaí
    ├── Carrinho de Milk Shake
    └── Carrinho de Fondue
```

---

## Fase 1: Remover Serviços Não Oferecidos

**Arquivos:** `services.ts`, `pricing.ts`

Serviços a remover:
- Buffet Completo
- Som e Iluminação
- Decoração Temática
- Cerimonial

---

## Fase 2: Atualizar Bar de Drinks

### Preços Atualizados (conforme documentos)

| Cardápio | 100 pax | 200 pax |
|----------|---------|---------|
| CK Essencial | R$ 2.700 | R$ 4.800 |
| CK Exclusive | R$ 3.300 | R$ 5.800 |

### Cardápio CK Essencial
Piña Colada, Caipirinha, Caipifruta, Sex on the Beach, Gin Fruits, Pink Limonade, Gin Energy

### Cardápio CK Exclusive (Best-Seller)
Todos do Essencial + Gin Tropical, Green Apple Vibe, Moscow Mule, CK Cream, CK Sensation, Cuba Libre, Kids Dream

### Incluso
- 5h de atendimento
- Bartenders e copa
- Taças, copos e utensílios
- Gelo e insumos

---

## Fase 3: Experiências Interativas

### Plataforma 360° (Vídeos)
| Duração | Preço |
|---------|-------|
| 1 hora | R$ 750 |
| 2 horas | R$ 850 |
| 3 horas | R$ 1.050 |
| 4 horas | R$ 1.250 |

**Incluso:** Plataforma LED, iPhone 14 Plus, 1 monitor, vídeos ilimitados, arte personalizada

### Cabine de Fotos (Impressão)
| Duração | Preço |
|---------|-------|
| 1 hora | R$ 800 |
| 2 horas | R$ 900 |
| 3 horas | R$ 1.100 |
| 4 horas | R$ 1.300 |

**Incluso:** 2 monitores, fotos ilimitadas, impressão instantânea, adereços

### Totem Fotográfico (Compacto) - Novo
| Duração | Preço |
|---------|-------|
| 1 hora | R$ 700 |
| 2 horas | R$ 800 |
| 3 horas | R$ 1.000 |
| 4 horas | R$ 1.200 |

**Incluso:** 1 monitor, fotos ilimitadas, impressão instantânea

---

## Fase 4: Estação Gourmet (Nova Categoria)

### Carrinho de Açaí
- **Descrição:** Refrescante e personalizável com diversos toppings
- **Ideal para:** Casamentos diurnos e formaturas
- **Preço:** Sob consulta (baseado em convidados)

### Carrinho de Milk Shake
- **Descrição:** Visual retrô, atrai público jovem, cria fotos divertidas
- **Ideal para:** Eventos jovens e descontraídos
- **Preço:** Sob consulta

### Carrinho de Fondue
- **Descrição:** Elegância para eventos noturnos ou de inverno, frutas frescas com chocolate nobre
- **Ideal para:** Casamentos e eventos sofisticados
- **Preço:** Sob consulta (baseado em convidados)

---

## Fase 5: Adicionais Opcionais

| Adicional | Preço |
|-----------|-------|
| Hora do Shot | R$ 250 |
| Bartender Extra | R$ 250 |
| Balcão de Madeira Rústico | R$ 120 |
| Guestbook | R$ 200 |

---

## Fase 6: Correções Gerais

### Anos de Experiência
- Alterar "10 Anos" para "5 Anos"
- Atualizar "Fundada em 2015" para "Fundada em 2020"

### Textos e Diferenciais
- Slogan: "Aqui você não contrata apenas drinks, contrata tranquilidade"
- Destaque: iPhone 14 Plus na Plataforma 360°
- Badge "Best-Seller" no Bar Exclusive

---

## Arquivos a Modificar

| Arquivo | Alterações |
|---------|------------|
| `src/config/services.ts` | Remover 4 serviços, adicionar Totem e Milk Shake, reorganizar em categorias |
| `src/config/pricing.ts` | Novos preços bar (Essencial/Exclusive), preços experiências, gourmet sob consulta |
| `src/components/sections/Services.tsx` | Novo layout com 3 categorias visuais |
| `src/components/calculator/Step3Services.tsx` | Seleção tipo bar, duração experiências, gourmet sem cálculo automático |
| `src/components/sections/Stats.tsx` | 10 anos → 5 anos |
| `src/components/sections/About.tsx` | Ano fundação, diferenciais |
| `src/config/images.ts` | Adicionar/atualizar imagens dos novos serviços |

---

## Lógica da Calculadora

### Bar de Drinks
1. Usuário seleciona "Bar de Drinks"
2. Pergunta: "Qual cardápio?" → Essencial ou Exclusive
3. Cálculo baseado em convidados + tipo selecionado

### Experiências
1. Usuário seleciona Plataforma 360° / Cabine / Totem
2. Pergunta: "Por quantas horas?" → 1-4h
3. Cálculo baseado na tabela de preços

### Estação Gourmet
1. Usuário seleciona carrinho desejado
2. Exibe mensagem: "Preço sob consulta - será calculado conforme número de convidados"
3. Não soma ao total, mas aparece no resumo como "A consultar"

---

## Considerações Técnicas

1. **Interface de Services:** Reorganizar com headers de categoria (Bar, Experiências, Gourmet)
2. **Calculadora:** Serviços "sob consulta" aparecem no resumo mas não no total
3. **Mobile:** Cards de categoria devem funcionar bem em telas pequenas
4. **SEO:** Atualizar meta descriptions com serviços reais

