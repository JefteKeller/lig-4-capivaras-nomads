const personagem = {}; // Jefte - Objeto que armazena os personagens escolhidos
const opcoesDePersonas = [
  // Jefte - Catalogo de classes de acordo com os personagens disponiveis
  "guerreiro",
  "esqueleto",
  "bandido-white",
  "bandido-blue",
];

const getRamdom = () => {
  return Math.floor(Math.random() * 4);
};

const definirPersonagem = (evt) => {
  personagem.persona1 = evt.target.classList[1]; // Jefte - Define o personagem do jogador 1, baseado na Segunda classe do personagem selecionado na pagina //

  for (let i = 0; i < 1; ) {
    personagem.persona2 = opcoesDePersonas[getRamdom()]; // Jefte - Define o personagem 2 randomicamente, pegando como base o array de referencia //

    if (personagem.persona2 !== personagem.persona1) {
      // Jefte - Executa o loop enquanto o personagem 1 e 2 são iguais //
      i++;
    }
  }
  document.querySelector("#telaInicial").classList.add("invisivel");
  document.querySelector("#players").classList.remove("invisivel");
  document.querySelector("#grid").classList.remove("invisivel");

  // Adicionar imagem dos personagens no placar
  const img1 = document.createElement("img");
  img1.src = `../images/${personagem.persona1}.gif`;

  const p1 = document.getElementById("p1");
  p1.appendChild(img1);

  const img2 = document.createElement("img");
  img2.src = `../images/${personagem.persona2}.gif`;

  const p2 = document.getElementById("p2");
  p2.appendChild(img2);
};

const boxPersonagem = document.querySelector("#personagens");
boxPersonagem.addEventListener("click", definirPersonagem);
