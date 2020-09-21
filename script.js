const gridDiv = document.querySelector("#grid"); //Elemento pai no HTML que receberá as colunas.

const grid = []; //Grid de elementos vazios/zero que receberá as peças dos jogadores.
const gridHTML = []; //Grid contendo uma referência no html para celula do grid.

//Função responsável por escrever os elementos no documento HTML e preencher os arrats "grid" e "gridHTML".
const gridWriter = () => {
  for (i = 0; i <= 5; i++) {
    const row = []; //List que contém cada elemento referente a uma linha do array.
    const cellsHTML = []; //List que contém cada celula de uma linha no html.

    const rowHTML = document.createElement("div"); //Div que ira conter as celulas criadas.
    rowHTML.classList.add("row");

    for (j = 0; j <= 6; j++) {
      const celulaHTML = document.createElement("div"); //Criando o elemento.
      celulaHTML.classList.add("cellContainer"); //Adicionando a classe cellContainer.

      cellsHTML.push(celulaHTML);
      rowHTML.append(celulaHTML);

      row.push(0);
    }
    gridDiv.append(rowHTML); //Adicionando uma row ao HTML.
    gridHTML.push(cellsHTML); //Adicionando uma linha ao gridHTML.
    grid.push(row); //Adicionando uma linha ao grid.
  }
};

gridWriter();
