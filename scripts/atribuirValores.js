const quadrado = document.querySelectorAll('.quadrado');
adicionarId();

jogadores = {
  Jogador1: 'X',
  Jogador2: 'O',
};

x = 'X';
o = 'O';
let jogadaAtual = x;

const elementoExibirJogada = document.querySelector('.exibe-jogada-atual');
elementoExibirJogada.innerText = jogadaAtual;

quadrado.forEach(q => {
  q.addEventListener('click', c => {
    const elementoAlvo = c.target;
    if (elementoAlvo.innerText === '') {
      elementoAlvo.innerText = jogadaAtual;

      let velha = checaVelha();
      console.log(velha);
      if (velha != true) {
        adicionaIdLista(elementoAlvo);
      }

      jogadaAtual != x ? (jogadaAtual = x) : (jogadaAtual = o);
      elementoExibirJogada.innerText = jogadaAtual;
    }
  });
});

function adicionarId() {
  quadrado.forEach((q, i) => {
    q.id = i + 1;
  });
}

let listaO = [];
let listaX = [];
function adicionaIdLista(alvo) {
  if (alvo.innerText === x) {
    listaX.push(alvo.id);
    checaVitoria(listaX, alvo);
  } else if (alvo.innerText === x) {
    listaO.push(alvo.id);
    checaVitoria(listaO, alvo);
  }
}
