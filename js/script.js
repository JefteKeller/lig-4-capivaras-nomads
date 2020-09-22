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

  let bolaAtual = criarBolinhas(jogador === 1 ? jogador1 : jogador2); // Jefte - Cria as bolinhas e adiciona no elemento do click //
  gridHTML[posicao[0]][posicao[1]].appendChild(bolaAtual); //Kevin - Seleciona o elemento HTML na posicao especificada e realiza o "append" //
  grid[posicao[0]][posicao[1]] = jogador;
  checkVitoria(posicao, jogador);

  jogador = jogador === 1 ? 2 : 1;
};
gridDivPai.addEventListener("click", adicionarBolinha); // Jefte - Adiciona um EventHandler que aciona a função de adicionar as Bolinhas na tela //
