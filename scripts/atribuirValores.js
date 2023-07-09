const quadrado = document.querySelectorAll('.quadrado');

adicionarIdAElementos();

jogador1 = {
  jogada: 'X',
  listaJogada: [],
  elemento: document.querySelector('.jogador1'),
};
jogador2 = {
  jogada: 'O',
  listaJogada: [],
  elemento: document.querySelector('.jogador2'),
};
let jogadaAtual = jogador2.jogada;
trocaJogador();

quadrado.forEach(q => {
  q.addEventListener('click', c => {
    const elementoAlvo = c.target;
    validaJogada(elementoAlvo);

    trocaJogador();
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
    checaVitoria(jogador1.listaJogada);
  } else if (alvo.innerText === jogador2.jogada) {
    jogador2.listaJogada.push(alvo.id);
    checaVitoria(jogador2.listaJogada);
  }
}

function validaJogada(elementoAlvo) {
  if (elementoAlvo.innerText === '') {
    elementoAlvo.innerText = jogadaAtual;
    adicionaIdLista(elementoAlvo);
  }
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
