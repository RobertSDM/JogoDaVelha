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

function checaVitoria(lista) {
  for (cont = 0; cont < posiocoesVitoria.length; cont++) {
    let contador = 0;
    for (cont2 = 0; cont2 < lista.length; cont2++) {
      let inclui = posiocoesVitoria[cont].includes(parseInt(lista[cont2]));
      if (inclui) {
        contador++;
        if (contador === 3) {
          console.log('GANHOU');
          return;
        }
      }
    }
  }
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
