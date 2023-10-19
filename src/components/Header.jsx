import { SubTitle } from "../styled";

export function Header(props) {
  const { seeGroup, names, counter } = props
  const numNames=names?.length
  return (
    <header>
      {seeGroup &&
        <>
          <h1>Grupos Formados</h1>
          <SubTitle>({Math.ceil(numNames/counter)} Grupos)</SubTitle>
        </>
      }
      {!seeGroup &&
        <>
          <h1>Lista de participantes</h1>
          <SubTitle>({numNames} {numNames>1?"Participantes":"Participante"})</SubTitle>
        </>
      }
    </header>
  )
}