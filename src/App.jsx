import React, { useState, useEffect } from "react";
import "./App.css";
// import { peoples } from "./data/peoples";
import * as s from "./styled";
import { CardPeoples } from "./components/CardPeoples";
import { CreateGroups } from "./components/CreateGroups";
import * as i from "react-icons/ai"
import { addDataToFirestore, fetchData } from "./functions/functions";

function App() {

  const [names, setNames] = useState();
  const [seeGroup, setSeeGroup] = useState(false)
  const [counter, setCounter] = useState(2)
  const [newPeople, setNewPeople] = useState("")
  const [insert, setInsert] = useState(false)

  useEffect(() => {
    fetchData(setNames);
  },[]);

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
        {seeGroup &&
          <>
            <h1>Grupos Formados</h1>
            <s.SubTitle>({Math.ceil(names.length / counter)} Grupos)</s.SubTitle>
          </>
        }
        {!seeGroup &&
          <>
            <h1>Lista de participantes</h1>
            <s.SubTitle>({names?.length} Participantes)</s.SubTitle>
          </>
        }
      </header>
      <main>
        <div>
          {!seeGroup &&
            <>
              <p>clique no nome para modificar</p>
              <s.ContainerList>
                <div>
                  {insert &&
                    <div>
                      <s.Input
                        placeholder="Nome"
                        value={newPeople}
                        onChange={(e) => setNewPeople(e.target.value)}
                        autoFocus 
                      />
                      <s.ButtonSE onClick={async () => {
                        setInsert(false)
                        newPeople && addDataToFirestore(newPeople)
                        newPeople && await fetchData(setNames)
                        setNewPeople("")
                      }}>Salvar</s.ButtonSE>
                      <s.ButtonSE onClick={() => {
                        setInsert(false)
                      }}>Cancelar</s.ButtonSE>
                    </div>
                  }
                  {!insert &&
                    <>
                      <s.Button onClick={() => setInsert(true)}>Add Nome</s.Button>
                    </>
                  }
                </div>

                {names?.length > 0 &&
                  names.map((people, idx) => (
                    <CardPeoples
                      key={idx}
                      people={people}
                      fetchData={fetchData}
                      setNames={setNames} />
                  ))
                }
                {names?.length <= 0 &&
                  <h4>Nenhum nome na lista!!!</h4>
                }
              </s.ContainerList>
            </>
          }
        </div>

        <div>
          {!seeGroup &&
            <>
              <s.ButtonCounter onClick={() => plus()}><i.AiOutlinePlus /></s.ButtonCounter>
              <s.Counter color={names?.length % counter == 0 ? "#005600" : "#f00"}>{counter}</s.Counter>
              <s.ButtonCounter onClick={() => minus()}><i.AiOutlineMinus /></s.ButtonCounter>
            </>
          }

          <s.ButtonGroup onClick={() => setSeeGroup(!seeGroup)}>
            {!seeGroup && "Ver " + Math.ceil(names?.length / counter) + " Grupos"}
            {seeGroup && "Ver lista de Participantes"}
          </s.ButtonGroup>

          <s.ContainerGroups>
            {seeGroup &&
              <CreateGroups names={names} numberNames={counter} />
            }
          </s.ContainerGroups>

        </div>

      </main>
    </s.Flow>
  );
}

export default App;