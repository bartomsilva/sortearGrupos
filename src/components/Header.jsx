import { SubTitle } from "../styled";

export function Header(props) {
  const { seeGroup, names, counter } = props
  return (
    <header>
      {seeGroup &&
        <>
          <h1>Grupos Formados</h1>
          <SubTitle>({Math.ceil(names.length / counter)} Grupos)</SubTitle>
        </>
      }
      {!seeGroup &&
        <>
          <h1>Lista de participantes</h1>
          <SubTitle>({names?.length} Participantes)</SubTitle>
        </>
      }
    </header>
  )
}