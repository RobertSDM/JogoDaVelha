const botaoReiniciar = document.querySelector('.botao-reiniciar');
botaoReiniciar.addEventListener('click', () => {
  reiniciaTudo();
});

//lista com objetos com sequencias que possam dar a vitoria ao jogador
const posiocoesVitoria = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

/*verifica se na listaJogada de um jogador tem uma sequencia
de numeros que representam os blocos que ele clicou no jogo,

caso a lista posicoesVitoria possua um elemento que esta 
na listaJogada o contador adicionara um a contagem

se o contador chegar a tres a vitoria é registada ao jogador que
clicou*/
function checaVitoria(jogada) {
  for (cont = 0; cont < posiocoesVitoria.length; cont++) {
    let contador = 0;
    let velha = 0;
    for (cont2 = 0; cont2 < jogada.listaJogada.length; cont2++) {
      let inclui = posiocoesVitoria[cont].includes(
        parseInt(jogada.listaJogada[cont2])
      );
      if (inclui) {
        contador++;
        if (contador === 3) {
          apareceVitoria(jogada);
          return;
        }
      }
    }
  }
  checaVelha();
}

/*apareceVitoria retira a classe escondido do container-anuncio, 
para que o elemento possa aparecer na tela, 
também coloca o titulo do jogador que ganhou no elemento*/
function apareceVitoria(jogada) {
  const cardVitoria = document.querySelector('.container-anuncio');
  const jogador = document.querySelector('.jogador');
  jogador.innerText = jogada.titulo;
  cardVitoria.classList.remove('escondido');
  setTimeout(() => {
    escondeVitoria(jogada, cardVitoria);
  }, 700);
}

//escondeVitoria adiciona a classe escondido ao elemento container-anuncio
function escondeVitoria(jogada, cardVitoria) {
  alteraPlacar(jogada);
  cardVitoria.classList.add('escondido');
}

//alteraPlacar muda o contador de vitoria do jogador que venceu
function alteraPlacar(jogada) {
  const pontos = jogada.elemento.querySelector('.pontos');
  pontos.innerText = jogada.pontos += 1;
  reiniciaJogo();
}

/*reiniciaJogo redefine os espaços do jogo que estejam com alguma joga,
também redefine as listaJogada*/
function reiniciaJogo() {
  quadrado.forEach(q => {
    q.innerText = '';
  });
  jogador1.listaJogada = [];
  jogador2.listaJogada = [];
}

/*reiniciaJogo redefine os espaços do jogo que estejam com alguma joga,
também redefine as listaJogada e redefine o placar*/
function reiniciaTudo() {
  const pontos = document.querySelectorAll('.pontos');

  pontos.forEach(p => {
    p.innerText = 0;
  });

  quadrado.forEach(q => {
    q.innerText = '';
  });

  jogador1.listaJogada = [];
  jogador2.listaJogada = [];
  jogador1.pontos = 0;
  jogador2.pontos = 0;
  trocaJogador();
}

/*checaVelha verifica que todos os espacos do jogo estejam cheios
e ele retornara verdadeiro*/
function checaVelha() {
  let velha = 0;
  for (contador = 0; contador < quadrado.length; contador++) {
    if (quadrado[contador].innerText != '') {
      velha++;
      if (velha === 9) {
        reiniciaJogo();
      }
    }
  }
}
