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

function checaVitoria(jogada) {
  for (cont = 0; cont < posiocoesVitoria.length; cont++) {
    let contador = 0;
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
      } else {
        checaVelha() ? reiniciaJogo(2) : false;
      }
    }
  }
}

function apareceVitoria(jogada) {
  const cardVitoria = document.querySelector('.container-anuncio');
  const jogador = document.querySelector('.jogador');
  jogador.innerText = jogada.titulo;
  cardVitoria.classList.remove('escondido');
  setTimeout(() => {
    escondeVitoria(jogada, cardVitoria);
  }, 700);
}

function escondeVitoria(jogada, cardVitoria) {
  alteraPlacar(jogada);
  cardVitoria.classList.add('escondido');
}

function alteraPlacar(jogada) {
  const pontos = jogada.elemento.querySelector('.pontos');
  pontos.innerText = jogada.pontos += 1;
  reiniciaJogo(0);
}

function reiniciaJogo(reiniciarTudo) {
  if (reiniciarTudo != 1) {
    quadrado.forEach(q => {
      q.innerText = '';
    });
    jogador1.listaJogada = [];
    jogador2.listaJogada = [];
  } else {
    reiniciaTudo();
  }
}

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

function checaVelha() {
  let marca = 0;
  for (contador = 0; contador < quadrado.length; contador++) {
    if (quadrado[contador].innerText != '') {
      marca++;
      if (marca === 9) {
        return true;
      }
    }
  }
}

const botaoReiniciar = document.querySelector('.botao-reiniciar');
botaoReiniciar.addEventListener('click', () => {
  reiniciaJogo(1);
});
