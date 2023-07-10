const quadrado = document.querySelectorAll('.quadrado');

adicionarIdAElementos();

//objetos que representam os players
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

/*percorre a nodeList que esta no quadrado e adiciona addEventListener 
de clique a cada um*/
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

//cria os id contendo o numero nos elementos que representam os quadrados do jogo
function adicionarIdAElementos() {
  quadrado.forEach((q, i) => {
    q.id = i + 1;
  });
}

/*adicionaIdLista adiciona o numero do id que esta quardado no
no elemento que ele clicou a listaJogagadas que esta no objeto do jogador*/
function adicionaIdLista(alvo) {
  if (alvo.innerText === jogador1.jogada) {
    jogador1.listaJogada.push(alvo.id);
    checaVitoria(jogador1);
  } else if (alvo.innerText === jogador2.jogada) {
    jogador2.listaJogada.push(alvo.id);
    checaVitoria(jogador2);
  }
}

//validaJogada verifica se o local clicado pelo jogador está vazio
function validaJogada(elementoAlvo) {
  return elementoAlvo.innerText === '';
}

/*adicionaClasseJogadorAtual adiciona a classe que altera 
a cor de selecionado ao placar*/
function adicionaClasseJogadorAtual(jogada) {
  jogada === jogador1
    ? removeClasseJogadaAtual(jogador2)
    : removeClasseJogadaAtual(jogador1);

  jogada.elemento.classList.add('selecionado-letras');
  barraDeBaixo = jogada.elemento.querySelector('.barra-de-baixo');
  barraDeBaixo.classList.add('selecionado-barra');
}

/*removeClasseJogadaAtual remove a classe que altera
a cor de selecionado ao placar*/
function removeClasseJogadaAtual(jogada) {
  jogada.elemento.classList.remove('selecionado-letras');
  barraDeBaixo = jogada.elemento.querySelector('.barra-de-baixo');
  barraDeBaixo.classList.remove('selecionado-barra');
}

//trocaJogador realiza a mudança da variavel jogada atual
function trocaJogador() {
  if (jogadaAtual === jogador1.jogada) {
    adicionaClasseJogadorAtual(jogador2);
    jogadaAtual = jogador2.jogada;
  } else {
    adicionaClasseJogadorAtual(jogador1);
    jogadaAtual = jogador1.jogada;
  }
}
