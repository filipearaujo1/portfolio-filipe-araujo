/* ==========================================================================
   LÓGICA DE PROGRAMAÇÃO: FUNCIONALIDADE 1 - ALTERNÂNCIA DE TEMA (DARK MODE)
   Essa função mapeia a interação do usuário com o botão de tema e modifica
   o estado de classes do elemento global <body> para aplicar o CSS correto.
   ========================================================================== */

// Seleciona e armazena o elemento HTML do botão de troca de tema utilizando o seu ID exclusivo
const btnTema = document.getElementById('btn-tema');

// Adiciona um escutador de eventos (Event Listener) para monitorar cliques do usuário no botão
btnTema.addEventListener('click', () => {
    // Liga ou desliga (alterna) a classe 'dark-theme' no elemento <body> da árvore DOM
    document.body.classList.toggle('dark-theme');
    
    /* Estrutura condicional (if/else) para validar o estado atual da interface:
       Se o body contiver a classe 'dark-theme', o rótulo visual do botão é modificado para indicar a volta ao Modo Claro. 
       Caso contrário, mantém o indicativo para ativação do Modo Escuro. */
    if (document.body.classList.contains('dark-theme')) {
        btnTema.textContent = '☀️ Modo Claro';
    } else {
        btnTema.textContent = '🌙 Modo Escuro';
    }

    // Emite uma mensagem de rastro no painel de ferramentas de desenvolvedor (console) confirmando a alteração
    console.log("Tema alterado pelo usuário."); 
});


/* ==========================================================================
   LÓGICA DE PROGRAMAÇÃO: FUNCIONALIDADE 2 - VALIDAÇÃO E SIMULAÇÃO DO FORMULÁRIO
   Este bloco implementa as regras de negócio para interceptar dados de contato,
   realizar checagem lógica de preenchimento e disparar mensagens de feedback.
   ========================================================================== */

// Seleciona e referencia a estrutura do formulário de contato via ID no DOM
const form = document.getElementById('form-contato');

// Configura o escutador para interceptar o gatilho de submissão (envio) do formulário
form.addEventListener('submit', function(event) {
    // Interrompe o comportamento padrão do navegador (que recarregaria a página e perderia os dados atuais)
    event.preventDefault(); 

    /* Processamento de Dados de Entrada:
       Captura o texto digitado em cada campo e executa o método .trim(), que limpa 
       caracteres de espaço vazios inseridos acidentalmente no início ou fim das strings. */
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    /* Validação Estrutural da Programação:
       Compara logicamente se as constantes limpas equivalem a sequências totalmente vazias ("").
       O operador lógico '||' (OU) garante que o erro dispare se qualquer um dos campos falhar. */
    if (nome === "" || email === "") {
        // Exibe um feedback nativo de erro em janela pop-up caso falte preenchimento obrigatório
        alert("Erro: Por favor, preencha todos os campos obrigatórios."); 
    } else {
        // Dispara uma string template injetando o nome validado do usuário para simular o recebimento dos dados
        alert(`Obrigado, ${nome}! Sua mensagem foi simulada com sucesso.`); 
        
        // Executa a limpeza completa de todos os campos de texto internos do formulário (reset)
        form.reset(); 
    }
});