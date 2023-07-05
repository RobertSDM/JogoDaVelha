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

function checaVitoria(lista, alvo) {
  for (cont = 0; cont < posiocoesVitoria.length; cont++) {
    let contador = 0;
    lista.forEach(n => {
      if (posiocoesVitoria[cont].includes(parseInt(lista[cont]))) {
        contador++;
        return contador;
      }
    });
    if (contador === 3) {
      return console.log('ganhow ' + alvo.innerText);
    }
  }
}

function checaVelha() {
  let marca = 0;
  for (contador = 0; contador < quadrado.length; contador++) {
    if (quadrado[contador].innerText != '') {
      marca++;
      console.log(marca);
      if (marca === 9) {
        return true;
      }
    }
  }
}
