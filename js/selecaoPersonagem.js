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
      // Jefte - Executa o loop enquanto o personagem 1 e 2 sao iguais //
      i++;
    }
  }
  document.querySelector("#telaInicial").classList.add("invisivel");
};

const boxPersonagem = document.querySelector("#personagens");
boxPersonagem.addEventListener("click", definirPersonagem);
