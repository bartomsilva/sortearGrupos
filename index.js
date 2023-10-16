const alunos = require("./data");

// definir o número de membro por grupo
const numeroDeComponentes = 3;

// Ordenar a lista em ordem alfabética
ordenarNomes();
console.table("lista de alunos em ordem alfabética");
listarAlunos();

// Embaralhando a lista de alunos
misturarNomes(alunos);

// Formando os grupos
const gruposFormados = formarGrupos(numeroDeComponentes);

console.log("\nGrupos formados");
console.log(gruposFormados);
console.log("lista de alunos restantes....");
listarAlunos();

// FUNÇÕES
function listarAlunos() {
  console.log(alunos);
}

function ordenarNomes() {
  return alunos.sort((a, b) => a.localeCompare(b));
}

////////////
function misturarNomes(nomes) {
  for (let i = nomes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nomes[i], nomes[j]] = [nomes[j], nomes[i]];
  }
}

function formarGrupos(numeroDeComponentes) {
  const grupos = {};
  let numGrupo = 0;
  while (alunos.length >= numeroDeComponentes) {
    let componentesGrupo = "- ";
    numGrupo++;
    for (let i = 0; i < numeroDeComponentes; i++) {
      componentesGrupo += alunos[i] + " -";
    }
    // adiciona ao grupo os alunos sorteados
    grupos[numGrupo] = componentesGrupo;
    // remove da lista os alunos sorteados
    alunos.splice(0, numeroDeComponentes);
  }
  // caso existam pessoas sem grupo ainda
  if (alunos.length > 0) {
    numGrupo++;
    componentesGrupo = " - ";
    for (let i = 0; i < alunos.length; i++) {
      componentesGrupo += alunos[i];
    }
    grupos[numGrupo] = componentesGrupo;
    alunos.splice(0, alunos.length);
  }
  return grupos;
}
