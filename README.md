# ⚡ Quiz de Conhecimentos Gerais — Cyber Glass

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Design System](https://img.shields.io/badge/Design_System-Cyber_Neon_%2B_Glassmorphism-6366F1?style=for-the-badge)
[![Deploy Vercel](https://img.shields.io/badge/Vercel-Jogar_Agora-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://quiz-blush-gamma-96.vercel.app)

Aplicação web interativa de **Quiz de Conhecimentos Gerais** desenvolvida com **HTML5 Semântico**, **CSS3 Avançado** e **JavaScript Puro (Vanilla JS)**, seguindo as especificações visuais do **Design System (Cyber Neon + Glassmorphism)**.

🔗 **Acesse o projeto online (Deploy):** [https://quiz-blush-gamma-96.vercel.app](https://quiz-blush-gamma-96.vercel.app)

---

## Sobre o Projeto

O **Quiz Cyber Glass** foi projetado para oferecer uma experiência futurista, fluida e responsiva em formato de **SPA (Single Page Application)** sem dependência de frameworks externos.

O projeto explora técnicas modernas de estilização (como superfícies translúcidas em vidro fosco, máscaras de composição CSS para bordas animadas e animações em `@keyframes`) aliadas à manipulação dinâmica do DOM em JavaScript.

---

## Funcionalidades Principais

- **Fluxo Dinâmico em 3 Telas (SPA):**
  1. **Tela de Início:** Apresentação do desafio, painel de resumo em vidro (*5 questões*, *+20 pts por acerto*, *nível misto*) e botão de início.
  2. **Tela de Perguntas:** Cabeçalho com contador de questões e placar em tempo real, barra de progresso neon animada, geração dinâmica das alternativas (`A`, `B`, `C`, `D`) e feedback imediato de acerto/erro.
  3. **Tela de Resultado Final:** Círculo em vidro com a fração de acertos (`ex: 4/5`), cálculo automático de porcentagem (`%`), pontuação total acumulada, mensagem personalizada de desempenho e opção de reiniciar a partida.
- **Prevenção de Duplo Clique:** Bloqueio automático dos botões (`disabled = true`) após a escolha de uma alternativa, destacando simultaneamente a resposta correta caso o jogador erre.
- **Barra de Progresso Inteligente:** Atualização suave (`transition: width 0.4s ease`) proporcional ao avanço nas perguntas.

---

## Design System (Cyber Neon + Glassmorphism)

### 1. Paleta de Cores (`:root`)

| Token CSS | Valor | Aplicação |
| :--- | :--- | :--- |
| `--bg-page` | `#0F172A` | Fundo principal da página (Slate Dark) |
| `--glass-card-bg` | `rgba(30, 41, 59, 0.48)` | Superfície translúcida do Card Principal |
| `--glass-option-bg` | `rgba(51, 65, 85, 0.42)` | Superfície em vidro dos botões de alternativa |
| `--glass-border` | `rgba(255, 255, 255, 0.14)` | Bordas sutis de refração do vidro |
| `--primary` | `#6366F1` | Azul Índigo Neon principal (`Hover: #4F46E5`) |
| `--neon-cyan` | `#38BDF8` | Destaques luminosos em Ciano Neon |
| `--neon-purple` | `#A855F7` | Gradientes e brilhos em Roxo Neon |
| `--text-main` | `#F8FAFC` | Tipografia principal de alto contraste |
| `--text-secondary` | `#CBD5E1` | Subtítulos e textos de apoio |
| `--text-muted` | `#94A3B8` | Rótulos secundários |
| `--correct` | `#22C55E` | Estado de resposta correta (Verde Neon) |
| `--wrong` | `#EF4444` | Estado de resposta incorreta (Vermelho Neon) |

### 2. Efeitos Especiais em CSS

1. **Ambient Orbs (Esferas de Luz Desfocadas):**
   - Três esferas luminosas (`#6366F1`, `#38BDF8` e `#A855F7`) com `filter: blur(55px)` flutuam continuamente ao fundo (`@keyframes flutuarOrb`), criando profundidade real para o desfoque `backdrop-filter: blur(22px) saturate(180%)` do card.
2. **Borda Iluminada Girando 360° sem Tampar o Vidro (`.quiz-border-spinner`):**
   - Utiliza um `conic-gradient` em rotação contínua (`@keyframes girarBorda`) combinado com máscara de exclusão CSS (`-webkit-mask-composite: xor` e `mask-composite: exclude`). Isso recorta o centro do elemento e mantém a luz girando exclusivamente nos `3px` da moldura, preservando 100% da transparência do vidro no interior do card.
3. **Expansão + Neon Piscando nas Alternativas (`.opcao-btn:hover:not(:disabled)`):**
   - Ao passar o cursor sobre uma alternativa disponível, o botão expande suavemente (`transform: scale(1.03)`) e aciona a animação `@keyframes neonPiscando`, alternando o brilho (`box-shadow`) e a cor da borda entre Índigo, Ciano e Roxo.

---

## Estrutura de Arquivos

```text
📦 quiz
 ┣ 📜 index.html   # Estrutura semântica HTML5, Ambient Orbs e as 3 seções de tela
 ┣ 📜 style.css    # Design System v3.0, variáveis CSS, Glassmorphism e animações @keyframes
 ┣ 📜 script.js    # Banco de questões, controle de estado, manipulação do DOM e eventos
 ┗ 📜 README.md    # Documentação técnica do projeto
```

---

## Como Executar o Projeto

Como o projeto foi construído utilizando tecnologias nativas da Web (**Vanilla JS**), não é necessário instalar dependências ou servidores complexos:

1. Clone este repositório:
   ```bash
   git clone https://github.com/NilsonLimas94/quiz.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd quiz
   ```
3. Abra o arquivo `index.html` diretamente no seu navegador de preferência (ou utilize a extensão **Live Server** no VS Code / Antigravity IDE).

---

## Conceitos de Programação Aplicados

- **HTML5:** Tags semânticas (`<main>`, `<section>`, `<header>`, `<footer>`), atributos de acessibilidade (`aria-hidden="true"`) e organização modular de telas.
- **CSS3:** Custom Properties (`:root`), Flexbox, `backdrop-filter`, gradientes cônicos e lineares, `mask-composite`, pseudo-elementos (`::before`), pseudo-classes (`:hover`, `:disabled`, `:not()`) e animações `@keyframes`.
- **JavaScript (ES6+):** Estrutura de dados com Arrays de Objetos, seleção e criação dinâmica de elementos DOM (`getElementById`, `querySelectorAll`, `createElement`, `appendChild`), manipulação de classes (`classList.add` / `remove`), *Template Literals* e *Event Listeners*.

---

## Autor

Desenvolvido por **Nilson Junior** (`@NilsonLimas94`).
