//Kevin - Checagem de posições
const checkHorizontal = (posicao) => {
  let counter = 0;

  for (let i = -3; i <= 3; i++) {
    // A partir da posição onde a peça foi colocada é cheado o valor de 3 casa anteriores até 3 casas posteriores ao elemento horizontalmente
    if (grid[posicao[0]][posicao[1]] === grid[posicao[0]][posicao[1] + i]) {
      counter++;
    } else {
      counter = 0;
    }
    //Se o contador não for interrompido significa que as peças estão em sequencia, sendo assim, um jogador vence
    if (counter === 4) {
      return true;
    }
  }
  return false;
};
const checkVertical = (posicao) => {
  let counter = 0;
  for (let i = -3; i <= 3; i++) {
    //Apenas permite que o loop seja iniciado se o valor "posicao[0]-i" estiver dentro do range do array
    if (posicao[0] - i >= 0 && posicao[0] - i < grid.length) {
      //Realiza a comparação verticalmente
      if (grid[posicao[0]][posicao[1]] === grid[posicao[0] - i][posicao[1]]) {
        counter++;
      } else {
        counter = 0;
      }
      if (counter === 4) {
        return true;
      }
    }
  }
  return false;
};
const checkDiagonal = (posicao) => {
  let counter = 0;

  for (let i = -3; i <= 3; i++) {
    if (posicao[0] - i >= 0 && posicao[0] - i < grid.length) {
      if (
        //Realiza a comparação diagonalmente onde os indexes são iguais
        grid[posicao[0]][posicao[1]] === grid[posicao[0] - i][posicao[1] - i]
      ) {
        counter++;
      } else {
        counter = 0;
      }
      if (counter === 4) {
        return true;
      }
    }
  }
  return false;
};
const checkOutraDiagonal = (posicao) => {
  let counter = 0;

  for (let i = -3; i <= 3; i++) {
    if (posicao[0] - i >= 0 && posicao[0] - i < grid.length) {
      if (
        //Realiza a comparação diagonalmente onde os indexes são invertidos
        grid[posicao[0]][posicao[1]] === grid[posicao[0] - i][posicao[1] + i]
      ) {
        counter++;
      } else {
        counter = 0;
      }
      if (counter === 4) {
        return true;
      }
    }
  }
  return false;
};
//Kevin ->
const checkVitoria = (posicao) => {
  //Vitoria recebe "verdadeiro" em sempre que qualquer um dos checks devolva o valor "true"
  let vitoria = false;
  vitoria =
    checkHorizontal(posicao) ||
    checkVertical(posicao) ||
    checkDiagonal(posicao) ||
    checkOutraDiagonal(posicao);

  //Zeros recebe um string contendo todo o valor do array "grid", caso esse elemento ainda contenha o seu valor padrao (0) -
  // - então o jogador ainda terá espaços para colocar peças, logo, não pode-se declarar um empate
  let zeros = JSON.stringify(grid);
  zeros = zeros.includes("0");

  //Caso não haja mais espaços para colocar peças e nenhum jogador tenha sido declarado vencedor, declara-se um empate
  if (!zeros && !vitoria) {
    finalizaJogo("Empate");
  }
  //Caso haja uma vitória, o jogo será finalizado e as ultimas funções -
  // - que terão o trabalho de remover event handlers e efetivamente finalizar o jogo serão chamadas
  if (vitoria) {
    finalizaJogo();
  }
};

//Kevin ->
const finalizaJogo = () => {
  document.querySelector("#telaFinal").classList.remove("invisivel");

  if (jogador === 1) {
    document
      .querySelector("#vencedorImagem")
      .classList.add(personagem.persona1);
  } else {
    document
      .querySelector("#vencedorImagem")
      .classList.add(personagem.persona2);
  }

  document.querySelector(
    "#vencedorTitulo"
  ).textContent = `O jogador ${jogador} Venceu!!!`;
  gridDivPai.removeEventListener("click", adicionarPersonagem);
};
