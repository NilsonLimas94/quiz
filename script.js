/*
    =====================================================
    Banco de questões (array de objetos)
    =====================================================
*/
const perguntas = [
    {
        pergunta: "Qual linguagem roda diretamente no navegador para dar interativdade às páginas web?",
        opcoes: ["Python", "JavaScript", "C++", "Java"],
        correta: 1 // Índice 1 = "JavaScript"
    },
    {
        pergunta: 'Qual planeta do sistema solar é conhecido como o "Planeta Vermelho?"',
        opcoes: ["Vênus", "Júpter", "Marte", "Saturno"],
        correta: 2 // Índice 2 = "Marte"
    },
    {
        pergunta: "No CSS, qual propriedade cria o desfoque de fundo do efeito Glassmorphism (Vidro)?",
        opcoes: ["backdrop-filter", "box-shadow", "opacity", "text-decoration"],
        correta: 0 // Índice 0 = "backdrop-filter"
    },
    {
        pergunta: "Quem pintou a famosa obra de arte 'Mona Lisa'?",
        opcoes: ["Vincent van Gogh", "Pablo Picasso", "Michelangelo", "Leonardo da Vinci"],
        correta: 3 // Índice 3 = "Leonardo da Vinci"
    },
    {
        pergunta: "Qual é o maior oceano do planeta Terra?",
        opcoes: ["Oceano Atlântico", "Oceano Pacífico", "Oceano Índico", "Oceano Ártico"],
        correta: 1 // Índice 1 = "Oceano Pacífico"
    }
];

/*
    ===============================================================Funções de Controle do Quiz
    Selectionando os elementos do HTML (DOM)
    ===============================================================
*/
const telaInicio = document.getElementById("tela-inicio");
const telaPerguntas = document.getElementById("tela-perguntas");
const telaResultado = document.getElementById("tela-resultado");

const btnIniciar = document.getElementById("btn-iniciar");
const btnProxima = document.getElementById("btn-proxima");
const btnReiniciar = document.getElementById("btn-reiniciar");

const contadorPergunta = document.getElementById("contador-pergunta");
const placarAtual = document.getElementById("placar-atual");
const barraProgresso = document.getElementById("barra-progresso-preenchimento");
const textoPergunta = document.getElementById("texto-pergunta");
const listaOpcoes = document.getElementById("lista-opcoes");
const feedbackMsg = document.getElementById("feedback-msg");

const notaFracao = document.getElementById("nota-fracao");
const notaPorcentagem = document.getElementById("nota-porcentagem");
const pontosFinais = document.getElementById("pontos-finais");
const mensagemFinal = document.getElementById("mensagem-final");

/*
    ================================================================
    Variáveis de estado do jogo
    ================================================================
*/
let indiceAtual = 0;
let pontuacao = 0;
let acertos = 0;
const letras = ["A", "B", "C", "D"];

/*
    ===================================================================
    Funções principais do jogo
    ===================================================================
*/
function iniciarQuiz() {
    indiceAtual = 0;
    pontuacao = 0;
    acertos = 0;

    telaResultado.classList.add("hidden");
    telaInicio.classList.add("hidden");
    telaPerguntas.classList.remove("hidden");

    carregarPergunta();
}

function carregarPergunta() {
    // Esconde o botão "Próxima" e limpa o feedback da pergunta anterior
    btnProxima.classList.add("hidden");
    feedbackMsg.textContent = "";
    listaOpcoes.innerHTML = "";

    const questaoAtual = perguntas[indiceAtual];

    // Atualiza textos do cabeçalho e pergunta
    contadorPergunta.textContent = `Questão ${indiceAtual + 1} de ${perguntas.length}`;
    placarAtual.textContent = `Pontos: ${pontuacao}`;
    textoPergunta.textContent = questaoAtual.pergunta;

    // Atualiza a largura da barra de progresso neon (20%, 40%, 60%, 80%, 100%)
    const progresso = ((indiceAtual + 1) / perguntas.length) * 100;
    barraProgresso.style.width = `${progresso}%`;

    // Cria os 4 botões de alternativa (A, B, C, D)
    questaoAtual.opcoes.forEach((textoOpcao, indice) => {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.classList.add("opcao-btn");

        botao.innerHTML = `
            <span class="opcao-letra">${letras[indice]}</span>
            <span>${textoOpcao}</span>
        `;

        // Quando clicar no botão, verifica se acertou ou errou
        botao.addEventListener("click", () => verificarResposta(indice, botao));

        listaOpcoes.appendChild(botao);
    });
}

function verificarResposta(indiceEscolhido, botaoClicado) {
    const questaoAtual = perguntas[indiceAtual];
    const todosBotoes = listaOpcoes.querySelectorAll(".opcao-btn");

    // Desabilita todos os botões para não clicar duas vezes
    todosBotoes.forEach((btn) => {
        btn.disabled = true;
    });

    if (indiceEscolhido === questaoAtual.correta) {
        botaoClicado.classList.add("correta");
        pontuacao += 20;
        acertos++;
        placarAtual.textContent = `Pontos: ${pontuacao}`;
        feedbackMsg.textContent = "✅ Resposta correta! +20 pontos";
        feedbackMsg.style.color = "var(--correct)";
    } else {
        botaoClicado.classList.add("errada");
        // Mostra qual era a alternativa correta em verde
        todosBotoes[questaoAtual.correta].classList.add("correta");
        feedbackMsg.textContent = "❌ Ops! Resposta incorreta.";
        feedbackMsg.style.color = "var(--wrong)";
    }

    // Muda o texto do botão na última pergunta
    if (indiceAtual === perguntas.length - 1) {
        btnProxima.textContent = "Ver Resultado Final 🏁";
    } else {
        btnProxima.textContent = "Próxima Pergunta →";
    }

    btnProxima.classList.remove("hidden");
}

/*
    ===========================================================
    Resultado final e eventos dos botões
    ===========================================================
*/
function mostrarResultado() {
    telaPerguntas.classList.add("hidden");
    telaResultado.classList.remove("hidden");

    const total = perguntas.length;
    const porcentagem = Math.round((acertos / total) * 100);

    notaFracao.textContent = `${acertos}/${total}`;
    notaPorcentagem.textContent = `${porcentagem}% de acerto`;
    pontosFinais.textContent = pontuacao;

    if (acertos === total) {
        mensagemFinal.textContent = "🏆 Perfeito! Você domina os conhecimentos gerais em nível Cyber Mestre!";
    } else if (acertos >= 3) {
        mensagemFinal.textContent = "⚡ Mandou muito bem! Ótimo desempenho, quase gabaritou!";
    } else {
        mensagemFinal.textContent = "💡 Bom começo! Que tal jogar novamente para superar seu recorde?";
    }
}

// Clique no botão "iniciar quiz"
btnIniciar.addEventListener("click", iniciarQuiz);

// Clique no botão "próxima pergunta"
btnProxima.addEventListener("click", () => {
    indiceAtual++;

    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
});

// Clique no botão "jogar novamente"
btnReiniciar.addEventListener("click", iniciarQuiz);