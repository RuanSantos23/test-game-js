let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

mensagemInicial()

function mensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto!');
    exibirTextoNaTela('p','Escolha um número de 1 a 10.');
}



function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : 'tentativa!'
        let mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `o número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p',`o número secreto é maior que ${chute}`);
        }
    } tentativas++;
      limparCampo()
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosLista == numeroMaximo) {
        listaDeNumerosSorteados = [];
    }



    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1;
    mensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

