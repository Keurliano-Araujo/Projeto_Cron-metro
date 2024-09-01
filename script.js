// Criando variáveis de acesso aos minutos - segundos - milissegundos
const min = document.querySelector("#minutes");
const seg = document.querySelector("#seconds");
const mili = document.querySelector("#milliseconds");

// Criar as variáveis de acesso aos botões
const startBtn = document.querySelector("#iniciar");
const pauseBtn = document.querySelector("#pausar");
const continueBtn = document.querySelector("#continuar");
const resetBtn = document.querySelector("#reset");

// Criando variáveis do tipo let, para que possam ter seu conteúdo alterado, para controle de tempo
let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
// Variável para armazenar o controle de tempo, se o cronômetro está pausado ou iniciado
let isPaused = false;

// Função para rodar o temporizador
function starTimer() {
    // Tornar os botões de continuar e pausar visíveis, quando clicamos em iniciar
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
    
    // Atribuir o método de setInterval à variável interval, que vai se atualizando a cada 10 milissegundos
    interval = setInterval(() => {
        // Verificar se o cronômetro não está pausado para atualizar o tempo
        if (!isPaused) {
            milliseconds += 10;

            if (milliseconds >= 1000) {
                seconds++;
                milliseconds = 0;
            }

            if (seconds >= 60) {
                minutes++;
                seconds = 0;
            }

            // Atualizar o conteúdo dos elementos de minutos, segundos e milissegundos
            min.textContent = formatTime(minutes);
            seg.textContent = formatTime(seconds);
            mili.textContent = formatTime(milliseconds);
        }
    }, 10);
}

// Função para pausar o temporizador
function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = 'none';
    continueBtn.style.display = 'block';
}

//Função para retomar o cronômetro
function continueTimer() {
    // Retomar o cronômetro
    isPaused = false;
    // Esconder o botão de continuar
    continueBtn.style.display = 'none';
    // Mostrar o botão de pausar
    pauseBtn.style.display = 'block';
}

//Função para zerar o cronômetro
function resetTimer(){
    // Parar o cronômetro
    clearInterval(interval);

    //Após limpar, ele define o valor como null
    interval = null;  // Resetar a variável do intervalo

    // Zerar as variáveis de tempo
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    // Atualizar a exibição do cronômetro
    min.textContent = '00';
    seg.textContent = '00';
    mili.textContent = '000';

    // Mostrar o botão "Iniciar" novamente e esconder os outros botões
    startBtn.style.display = 'block';
    pauseBtn.style.display = 'none';
    continueBtn.style.display = 'none';

    // Garantir que o cronômetro está em estado não pausado
    isPaused = false;
}

// Criando uma função para formatar o tempo
function formatTime(value) {
    // O valor retornado será formatado como uma string (toString()) com 2 dígitos, preenchidos com zeros à esquerda
    return value.toString().padStart(2, '0');
}

// Eventos para os botões
startBtn.addEventListener("click", starTimer);
pauseBtn.addEventListener("click", pauseTimer);
continueBtn.addEventListener("click", continueTimer);
resetBtn.addEventListener("click", resetTimer);