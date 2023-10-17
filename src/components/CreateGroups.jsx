import { ButtonList } from "../styled";

export function CreateGroups(props) {

  const { names: peoples, numberNames } = props
  const listOrdenada = ordenarNomes(peoples);
  const listaEmbaralhada = misturarNomes(listOrdenada);
  const gruposFormados = formarGrupos(listaEmbaralhada, numberNames);

  return (
    <>
    {
      gruposFormados.map( (group,i) => 
        <ButtonList key={i}>{group}</ButtonList>)
    }
    </>
  )

  function ordenarNomes(names) {
    const newNames = [...names]
    newNames.sort((a, b) => a.name.localeCompare(b.name));
    return newNames
  }

  function misturarNomes(names) {
    const newNames = [...names]
    for (let i = newNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newNames[i], newNames[j]] = [newNames[j], newNames[i]];
    }
    return newNames
  }

  function formarGrupos(list, numeroDeComponentes) {
    const grupos = [];
    let numGrupo = 0;
    let componentesGrupo=""
    while (list.length >= numeroDeComponentes) {
      componentesGrupo = " - ";
      for (let i = 0; i < numeroDeComponentes; i++) {
        componentesGrupo += "( "+list[i].name + " ) - ";
      }
      // adiciona ao grupo os alunos sorteados
      grupos[numGrupo] = componentesGrupo;
      numGrupo++;
      // remove da lista os alunos sorteados
      list.splice(0, numeroDeComponentes);
    }
    // caso existam pessoas sem grupo ainda
    if (list.length > 0) {
      numGrupo++;
      componentesGrupo = " - ";
      for (let i = 0; i < list.length; i++) {
        componentesGrupo += "( "+list[i].name + " ) - ";
      }
      grupos[numGrupo] = componentesGrupo;
      list.splice(0, list.length);
    }
    return grupos;
  }
}

