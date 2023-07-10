const quadrado = document.querySelectorAll('.quadrado');

adicionarIdAElementos();

jogador1 = {
  titulo: 'Jogador 1',
  jogada: 'X',
  listaJogada: [],
  pontos: 0,
  elemento: document.querySelector('.jogador1'),
};
jogador2 = {
  titulo: 'Jogador 2',
  jogada: 'O',
  listaJogada: [],
  pontos: 0,
  elemento: document.querySelector('.jogador2'),
};
let jogadaAtual = jogador2.jogada;
trocaJogador();

quadrado.forEach(q => {
  q.addEventListener('click', c => {
    const elementoAlvo = c.target;
    if (validaJogada(elementoAlvo)) {
      elementoAlvo.innerText = jogadaAtual;
      adicionaIdLista(elementoAlvo);
      trocaJogador();
    }
  });
});

function adicionarIdAElementos() {
  quadrado.forEach((q, i) => {
    q.id = i + 1;
  });
}

function adicionaIdLista(alvo) {
  if (alvo.innerText === jogador1.jogada) {
    jogador1.listaJogada.push(alvo.id);
    checaVitoria(jogador1);
  } else if (alvo.innerText === jogador2.jogada) {
    jogador2.listaJogada.push(alvo.id);
    checaVitoria(jogador2);
  }
}

function validaJogada(elementoAlvo) {
  return elementoAlvo.innerText === '';
}

function adicionaClasseJogadorAtual(jogada) {
  jogada === jogador1
    ? removeClasseJogadaAtual(jogador2)
    : removeClasseJogadaAtual(jogador1);

  jogada.elemento.classList.add('selecionado-letras');
  barraDeBaixo = jogada.elemento.querySelector('.barra-de-baixo');
  barraDeBaixo.classList.add('selecionado-barra');
}

function removeClasseJogadaAtual(jogada) {
  jogada.elemento.classList.remove('selecionado-letras');
  barraDeBaixo = jogada.elemento.querySelector('.barra-de-baixo');
  barraDeBaixo.classList.remove('selecionado-barra');
}

function trocaJogador() {
  if (jogadaAtual === jogador1.jogada) {
    adicionaClasseJogadorAtual(jogador2);
    jogadaAtual = jogador2.jogada;
  } else {
    adicionaClasseJogadorAtual(jogador1);
    jogadaAtual = jogador1.jogada;
  }
}
