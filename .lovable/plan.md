# Animações e Microinterações Premium

Este plano detalha a implementação de animações suaves e microinterações discretas na landing page, focando em elegância, performance e acessibilidade.

## Mudanças Propostas

### 1. Scroll Reveal e Stagger (Geral)
- Aplicar `motion.div` em títulos, subtítulos, cards e imagens em todas as seções.
- Padrão: `opacity: 0 -> 1` e `y: 20 -> 0`.
- Duração: 0.6s.
- Stagger: Adicionar `transition={{ delay: i * 0.1 }}` em listas e grids.
- Respeitar `prefers-reduced-motion` via Framer Motion.

### 2. Hero Section
- Adicionar movimento flutuante sutil à imagem principal: `animate={{ y: [0, -10, 0] }}` com `duration: 6, repeat: Infinity, ease: "easeInOut"`.
- Garantir que no mobile a ordem de carregamento priorize texto e botões antes da imagem.

### 3. Microinterações em Cards
- Em `ProblemSection`, `MethodSection`, `RoutineSection`, `ForWhoSection` e `OfferSection`:
- Hover desktop: `whileHover={{ y: -4, shadow: "lg" }}` com transição de 0.3s.

### 4. Feedback em Botões (CTA)
- Atualizar `CTAButton` para incluir:
- Hover: `whileHover={{ y: -2, shadow: "md" }}`.
- Tap: `whileTap={{ scale: 0.98 }}`.
- Remover transições manuais de CSS onde o Framer Motion for aplicado para evitar conflitos.

### 5. Elementos Decorativos (Glow)
- Adicionar gradientes rosados de baixa opacidade (`bg-[#D99B92]/5 blur-3xl`) em seções estratégicas como `MethodSection` e `WhatsIncluded` para criar profundidade.

### 6. Sequências e Etapas
- Em `HowItWorks` e `MethodSection`, garantir que os números e descrições apareçam progressivamente (01 -> 02 -> 03) usando o Intersection Observer (via `whileInView` do Framer Motion).

### 7. Detalhes Técnicos
- Utilizar `useReducedMotion` do `framer-motion` para desativar animações desnecessárias.
- Configurar `viewport={{ once: true, margin: "-50px" }}` para evitar disparos repetitivos e melhorar a performance.
- Ajustar intensidades no mobile (reduzir deslocamentos verticais de 20px para 10px).

## Detalhes Técnicos
- Bibliotecas: Framer Motion (já instalada).
- Arquivos afetados: Todos os componentes em `src/components/` e `src/components/ui/CTAButton.tsx`.
