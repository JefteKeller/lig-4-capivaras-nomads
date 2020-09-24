const button = document.getElementById("reset");

button.addEventListener("click", () => {
  gridDivPai.innerHTML = "";

  grid = [];
  gridHTML = [];

  document
    .querySelector("#vencedorImagem")
    .classList.remove(
      personagem.persona1,
      personagem.persona2,
      personagem.persona3
    );

  personagem = {};

  divJogador1.querySelector("div").remove();
  divJogador2.querySelector("div").remove();

  divJogador1.classList.add("jogadorAtual");
  divJogador2.classList.remove("jogadorAtual");

  jogador = 1;

  vencedorTitulo.textContent = "";

  document.querySelector("#telaInicial").classList.remove("invisivel");
  document.querySelector("#telaFinal").classList.add("invisivel");

  geradorGrid();

  gridDivPai.addEventListener("click", adicionarPersonagem);
});
