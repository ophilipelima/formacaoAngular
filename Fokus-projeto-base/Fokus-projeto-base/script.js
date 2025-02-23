const html = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('sons/play.wav');
const audioPausa = new Audio('sons/pause.mp3');
const audioTempoFinalizado = new Audio('sons/beep.mp3');
const textoPlayOuPause = document.querySelector('#start-pause span');
const iconePlayOuPause = document.querySelector('.app__card-primary-butto-icon');

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

btnFoco.addEventListener('click', () => {
    alterarContexto('foco');
    btnFoco.classList.add('active');
})

btnCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    btnCurto.classList.add('active');
});

btnLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    btnLongo.classList.add('active');
})

function alterarContexto (contexto){
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);
    botoes.forEach(function(contexto){
        contexto.classList.remove('active');
    });
    
    switch(contexto){
        case 'foco':
            titulo.innerHTML = 'Otimize sua produtividade, <strong class="app__title-strong">mergulhe no que importa.</strong>';
            break;
        case 'descanso-curto':
            titulo.innerHTML = 'Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa Curta</strong>';
            break;
        case 'descanso-longo':
            titulo.innerHTML = 'Hora de voltar à superfície. <strong class="app__title-strong">Faça uma pausa longa.</strong>';
            break;
        default:
            break;                      
    }
}

const contagemRegressiva = () => {
    tempoDecorridoEmSegundos -= 1;
    console.log('Temporizador: ' + tempoDecorridoEmSegundos);
    if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play();
        alert('Tempo finalizado!');
        zerar();
        return;
    }
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId){
        audioPausa.play();
        zerar();
        return;
    }
    textoPlayOuPause.textContent = 'Pausar';
    iconePlayOuPause.setAttribute('src','imagens/pause.png');
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    textoPlayOuPause.textContent = 'Começar';
    iconePlayOuPause.setAttribute('src','imagens/play_arrow.png');
    clearInterval(intervaloId);
    intervaloId = null;
}
