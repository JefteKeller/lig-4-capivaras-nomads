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
      console.log("checkHorizontal");
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
        console.log("checkVertical");
        return true;
      }
    }
  }
  return false;
};
const checkDiagonal = (posicao) => {
  let counter = 0;

  try {
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
          console.log("checkDiagonal");
          return true;
        }
      }
    }
  } catch (error) {}
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
        console.log("checkOutraDiagonal");
        return true;
      }
    }
  }
  return false;
};
const checkVitoria = (posicao, jogador) => {
  let vitoria = false;
  vitoria =
    checkHorizontal(posicao) ||
    checkVertical(posicao) ||
    checkDiagonal(posicao) ||
    checkOutraDiagonal(posicao);

  let zeros = JSON.stringify(grid);
  zeros = zeros.includes("0");

  if (!zeros && !vitoria) {
    console.log("empate");
    return "Empate";
  }
  console.log(
    vitoria ? `Vitória do jogador${jogador}` : "Não houve uma vitoria ainda"
  );
  return vitoria
    ? `Vitória do jogador${jogador}`
    : "Não houve uma vitoria ainda";
};
