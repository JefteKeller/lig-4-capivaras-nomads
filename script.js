const gridDivPai = document.querySelector("#grid"); //Elemento pai no HTML que receberá as colunas.

const grid = []; //Grid de elementos vazios/zero que receberá as peças dos jogadores.
const gridHTML = []; //Grid contendo uma referência no html para celula do grid.

//Função responsável por escrever os elementos no documento HTML e preencher os arrats "grid" e "gridHTML".
const geradorGrid = () => {
  for (let i = 0; i <= 5; i++) {
    const linha = []; //List que contém cada elemento referente a uma linha do array.
    const listaCelulasDiv = []; //List que contém cada celula de uma linha no html.

    const linhaDiv = document.createElement("div"); //Div que ira conter as celulas criadas.
    linhaDiv.classList.add("row");

    for (j = 0; j <= 6; j++) {
      const celulaDiv = document.createElement("div"); //Criando o elemento.
      celulaDiv.classList.add("cellContainer"); //Adicionando a classe cellContainer.

      listaCelulasDiv.push(celulaDiv);
      linhaDiv.append(celulaDiv);

      linha.push(0);
    }
    gridDivPai.append(linhaDiv); //Adicionando uma row ao HTML.
    gridHTML.push(listaCelulasDiv); //Adicionando uma linha ao gridHTML.
    grid.push(linha); //Adicionando uma linha ao grid.
  }
};

geradorGrid();

const checkHorizontal = () => {
  for (let linha = grid.length - 1; linha >= 0; linha--) {
    for (let coluna = grid[0].length - 1; coluna >= 0; coluna--) {
      if (
        grid[linha][coluna] !== 0 && //Verifica se o elemento foi preenchido
        coluna - 3 >= 0 && //Verifica se o elemento após 3 casas existe
        grid[linha][coluna] === grid[linha][coluna - 3] //Verifica se o elemento 0 é igual ao elemento após 3 casas são iguais
      ) {
        return (
          grid[linha][coluna] === grid[linha][coluna - 1] && //Verifica se o elemento 0 é igual ao elemento após 1 casas são iguais
          grid[linha][coluna] === grid[linha][coluna - 2] //Verifica se o elemento 0 é igual ao elemento após 2 casas são iguais
        );
      }
    }
  }
  return false;
};

const checkVertical = () => {
  for (let linha = grid.length - 1; linha >= 0; linha--) {
    for (let coluna = grid[0].length - 1; coluna >= 0; coluna--) {
      if (
        grid[linha][coluna] !== 0 &&
        linha - 3 >= 0 &&
        grid[linha][coluna] === grid[linha - 3][coluna]
      ) {
        return (
          grid[linha][coluna] === grid[linha - 1][coluna] &&
          grid[linha][coluna] === grid[linha - 2][coluna]
        );
      }
    }
  }
  return false;
};

const checkDiagonalEsquerdaDireita = () => {
  for (let linha = grid.length - 1; linha >= 0; linha--) {
    for (let coluna = grid[0].length - 1; coluna >= 0; coluna--) {
      if (
        grid[linha][coluna] !== 0 &&
        linha - 3 >= 0 &&
        coluna - 3 >= 0 &&
        grid[linha][coluna] === grid[linha - 3][coluna - 3]
      ) {
        return (
          grid[linha][coluna] === grid[linha - 1][coluna - 1] &&
          grid[linha][coluna] === grid[linha - 2][coluna - 2]
        );
      }
    }
  }
  return false;
};

const checkDiagonalDireitaEsquerda = () => {
  for (let linha = grid.length - 1; linha >= 0; linha--) {
    for (let coluna = 0; coluna < grid[0].length; coluna++) {
      if (
        grid[linha][coluna] !== 0 &&
        linha - 3 >= 0 &&
        coluna + 3 >= 0 &&
        grid[linha][coluna] === grid[linha - 3][coluna + 3]
      ) {
        return (
          grid[linha][coluna] === grid[linha - 1][coluna + 1] &&
          grid[linha][coluna] === grid[linha - 2][coluna + 2]
        );
      }
    }
  }
  return false;
};
const checagemVitoria = (jogador) => {};
