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


// Criando objetos de jogador com o atributo cor, definida estaticamente (por enquanto)
let jogador1 = {
  cor: "red",
};

let jogador2 = {
  cor: "black",
};

// Função para criar as bolinhas
const criarBolinhas = () => {
  const bolinha1 = document.createElement("div"); // criando a div da bolinha
  bolinha1.classList.add("bolinha"); // adicionando a classe bolinha, que define a altura e largura

  const bolinha2 = document.createElement("div");
  bolinha2.classList.add("bolinha");

  bolinha1.style.background = jogador1.cor; // atribuindo o background da bolinha de acordo com o atributo cor, do objeto jogador
  bolinha2.style.background = jogador2.cor;

  document.body.appendChild(bolinha1); // inserindo a bolinha na tela, só para ver como ela fica
  document.body.appendChild(bolinha2);
};

criarBolinhas();