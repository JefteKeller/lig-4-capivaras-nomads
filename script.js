let jogador = 1; // Jefte - Variavel que armazena a vez do jogador atual

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
      celulaDiv.dataset.position = `${i}${j}`; // Jefte - Adicionei um Dataset "position" identificação da célula //

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

// Criando objetos de jogador com o atributo cor, definida estaticamente (por enquanto)
let jogador1 = "red";

let jogador2 = "black";

// Função para criar as bolinhas // Jefte - Fiz algumas modificações para a função receber um parâmetro dinâmico //
const criarBolinhas = (jogador) => {
  const bolinha = document.createElement("div"); // criando a div da bolinha
  bolinha.classList.add("bolinha"); // adicionando a classe bolinha, que define a altura e largura
  bolinha.style.background = jogador; // atribuindo o background da bolinha de acordo com o atributo cor, do objeto jogador

  return bolinha; // Jefte - Retorna a Div "bolinha" na cor correspondente ao jogador
};

// Jefte - Função que adiciona as bolinhas na tela //
const adicionarBolinha = (evt) => {
  if (evt.target.className !== "cellContainer") {
    // Verifica se o destino do click é elegivel para receber a bolinha  //
    return;
  }

  let posicao = evt.target.dataset.position.split(""); // Jefte - Declara a variavel "posicao" de acordo com o "Dataset" da celula seleciona pelo click //
  posicao[0] = 0;
  posicao[1] = parseInt(posicao[1]);

  if (grid[posicao[0]][posicao[1]] !== 0) {
    return;
  }

  for (let i = 0; i < grid.length; i++) {
    //Kevin -  Procura pela ultima posicao vazia
    if (grid[i][posicao[1]] === 0) {
      posicao[0] = i;
    }
  }

  if (jogador === 1) {
    let bolaAtual = criarBolinhas(jogador1); // Jefte - Cria as bolinhas e adiciona no elemento do click //
    gridHTML[posicao[0]][posicao[1]].appendChild(bolaAtual); //Kevin - Seleciona o elemento HTML na posicao especificada e realiza o "append" //
    grid[posicao[0]][posicao[1]] = jogador;
    jogador = 2;
  } else {
    let bolaAtual = criarBolinhas(jogador2);
    gridHTML[posicao[0]][posicao[1]].appendChild(bolaAtual);
    grid[posicao[0]][posicao[1]] = jogador;
    jogador = 1;
  }
  checkVitoria(posicao);
};
gridDivPai.addEventListener("click", adicionarBolinha); // Jefte - Adiciona um EventHandler que aciona a função de adicionar as Bolinhas na tela //

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
const checkVitoria = (posicao) => {
  let vitoria =
    checkHorizontal(posicao) ||
    checkVertical(posicao) ||
    checkDiagonal(posicao) ||
    checkOutraDiagonal(posicao);
  console.log(vitoria);
};
