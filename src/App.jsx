import React, { useState } from "react";
import "./App.css";
import { peoples } from "./data/peoples";
import * as s from "./styled";
import { CardPeoples } from "./components/CardPeoples";
import { CreateGroups } from "./components/CreateGroups";

function App() {
  const [names, setNames] = useState(peoples);
  const [seeGroup, setSeeGroup] = useState(false)
  const [counter, setCounter] = useState(2)

  const plus = () => {
    if (counter < names.length / 2) {
      setCounter(prevState => prevState + 1)
    }
  }
  const minus = () => {
    if (counter > 2) {
      setCounter(prevState => prevState - 1)
    }
  }
  return (
    <s.Flow>
      <header>
        {
          seeGroup ?
            <>
              <h1>Grupos Formados</h1>
              <s.SubTitle>({Math.ceil(names.length/counter)} Grupos)</s.SubTitle>
            </>
            :
            <>
              <h1>Lista de participantes</h1>
              <s.SubTitle>({names.length} Participantes)</s.SubTitle>
            </>
        }
      </header>
      <main>
        <div>
          {!seeGroup &&
            <>
              <p>clique no nome para modificar</p>
              <s.ContainerList>
                {Array.isArray(names) && names.length > 0 ? (
                  names.map((name, idx) => (
                    <CardPeoples key={idx} names={names} name={name} setNames={setNames} idx={idx} />
                  ))
                ) : (
                  <p>Nenhum nome disponível.</p>
                )}
              </s.ContainerList>
            </>
          }
        </div>
        <div>
          {!seeGroup &&
            <>
              <s.Button onClick={() => plus()}>+</s.Button>
              <s.SubTitle>{counter}</s.SubTitle>
              <s.Button onClick={() => minus()}>-</s.Button>
            </>
          }
          <s.ButtonGroup onClick={() => setSeeGroup(!seeGroup)}>
            {!seeGroup ? "Ver Grupos" : "Ver lista de Participantes"}
          </s.ButtonGroup>

          <s.ContainerGroups>
            {
              seeGroup &&
              <CreateGroups names={names} numberNames={counter} />
            }
          </s.ContainerGroups>
        </div>
        <p>breve add e remover com banco de dados</p>
      </main>
    </s.Flow>
  );
}

export default App;