let jogador = 1;

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
      celulaDiv.dataset.position = `gridHTML[${i}][${j}]`; // Jefte - Adicionei um Dataset "position" para facilitar a identificação da célula //

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

  // const bolinha2 = document.createElement("div");
  // bolinha2.classList.add("bolinha");

  bolinha.style.background = jogador; // atribuindo o background da bolinha de acordo com o atributo cor, do objeto jogador
  // bolinha2.style.background = jogador2.cor;

  // document.body.appendChild(bolinha); // inserindo a bolinha na tela, só para ver como ela fica
  // document.body.appendChild(bolinha2);
  return bolinha; // Jefte - Retorna a Div "bolinha" na cor correspondente ao jogador //
};

// Jefte - Função que adiciona as bolinhas na tela //
const adicionarBolinha = (evt) => {
  if (jogador == 1) {
    let bolaAtual = criarBolinhas(jogador1); // Jefte - Cria as bolinhas e adiciona no elemento do click //
    evt.path[0].appendChild(bolaAtual);
    jogador = 2;
  } else {
    let bolaAtual = criarBolinhas(jogador2);
    evt.path[0].appendChild(bolaAtual);
    jogador = 1;
  }
};
gridDivPai.addEventListener("click", adicionarBolinha); // Jefte - Adiciona um EventHandler que aciona a função de adicionar as Bolinhas na tela //
