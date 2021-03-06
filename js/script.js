let jogador = 1; // Jefte - Variavel que armazena a vez do jogador atual

const gridDivPai = document.querySelector("#grid"); //Elemento pai no HTML que receberá as colunas.

let grid = []; //Grid de elementos vazios/zero que receberá as peças dos jogadores.
let gridHTML = []; //Grid contendo uma referência no html para celula do grid.

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

// Débora - Pega as divs dos jogadores, no HTML
const divJogador1 = document.getElementById("p1");
const divJogador2 = document.getElementById("p2");

// Jefte - Função que adiciona as bolinhas na tela //
const adicionarPersonagem = (evt) => {
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

  const div = document.createElement("div");
  div.classList.add("personaCell");

  //Kevin, Jefte - Seleciona o elemento HTML na posicao especificada e atribui a classe correspondente ao personagem escolhido //
  if (jogador === 1) {
    div.classList.add(personagem.persona1, "entradaJ1");
    gridHTML[posicao[0]][posicao[1]].appendChild(div);
  } else {
    div.classList.add(personagem.persona2, "entradaJ2");
    gridHTML[posicao[0]][posicao[1]].appendChild(div);
  }

  grid[posicao[0]][posicao[1]] = jogador; // Reporta a posicao atual como "ocupada" pelo Jogador da vez
  checkVitoria(posicao, jogador);

  //Caso o jogador tenha o valor 1, será modificado para 2, caso contrario, para 1
  jogador = jogador === 1 ? 2 : 1;

  // Débora - verifica qual é o jogador atual, tira a classe de identificação de turno do outro jogador
  // e atribui a classe de identificação ao jogador atual
  if (jogador === 1) {
    divJogador2.classList.remove("jogadorAtual");
    divJogador1.classList.add("jogadorAtual");
  } else {
    divJogador1.classList.remove("jogadorAtual");
    divJogador2.classList.add("jogadorAtual");
  }
};
gridDivPai.addEventListener("click", adicionarPersonagem); // Jefte - Adiciona um EventHandler que aciona a função de adicionar as Bolinhas na tela //
