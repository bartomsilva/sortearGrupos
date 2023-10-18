import React, { useState } from "react";
import { CardPeoples } from "../components/CardPeoples";
import { CreateGroups } from "../components/CreateGroups";
import {
  AiOutlineCheck, AiOutlineClose, AiOutlinePlus,
  AiOutlineMinus
} from "react-icons/ai"
import { GoPersonAdd } from "react-icons/Go"
import { addDataToFirestore, fetchData, minus, plus } from "../functions/functions";
import * as s from "../styled";
import { Header } from "../components/Header";

export function ShowList(props) {
  const [seeGroup, setSeeGroup] = useState(false)
  const [counter, setCounter] = useState(2)
  const [newPeople, setNewPeople] = useState("")
  const [insert, setInsert] = useState(false)
  const { names, setNames } = props

  let numberNames = names?.length

  return (
    <s.Flow>
      <Header seeGroup={seeGroup} names={names} counter={counter} />
      <main>
        <div>
          {!seeGroup &&
            <>
              <p>clique no nome para modificar</p>
              <s.ContainerList>
                {/* {names?.length > 0 && */}
                {numberNames > 0 &&
                  names.map((people, idx) => (
                    <CardPeoples
                      key={idx}
                      people={people}
                      fetchData={fetchData}
                      setNames={setNames} />
                  ))
                }
                {/* {names?.length <= 0 && */}
                {numberNames <= 0 &&
                  <h4>Nenhum nome na lista!!!</h4>
                }
              </s.ContainerList>
            </>
          }
        </div>

        <div>
          <s.ContainerAddName>
            {!insert && !seeGroup &&
              <s.ButtonAddName onClick={() => setInsert(true)}>
                <GoPersonAdd size='20px' />
              </s.ButtonAddName>
            }
            {insert &&
              <div>
                <s.Input
                  placeholder="Nome"
                  value={newPeople}
                  onChange={(e) => setNewPeople(e.target.value)}
                  autoFocus
                />
                <s.ButtonSE onClick={async () => {
                  if (newPeople) {
                    addDataToFirestore(newPeople)
                    await fetchData(setNames)
                  }
                  setInsert(false)
                  setNewPeople("")
                }}>
                  <AiOutlineCheck />
                </s.ButtonSE>

                <s.ButtonSE onClick={() => { setInsert(false) }}>
                  <AiOutlineClose />
                </s.ButtonSE>
              </div>
            }

          </s.ContainerAddName>

          {!seeGroup && !insert &&
            <>
              <s.ButtonCounter onClick={() => plus(counter, setCounter, numberNames)}><AiOutlinePlus /></s.ButtonCounter>
              <s.Counter color={numberNames>0&&numberNames%counter==0 ? "#005600" : "#f00"}>{counter}</s.Counter>
              <s.ButtonCounter onClick={() => minus(counter, setCounter)}><AiOutlineMinus /></s.ButtonCounter>
            </>
          }
          {!insert &&
            <>
              <s.ButtonGroup onClick={() => setSeeGroup(!seeGroup)}>
                {!seeGroup && "Ver " + Math.ceil(numberNames / counter) + " Grupos"}
                {seeGroup && "Ver lista de Participantes"}
              </s.ButtonGroup>
              <s.ContainerGroups>
                {seeGroup &&
                  <CreateGroups names={names} numberNames={counter} />
                }
              </s.ContainerGroups>
            </>
          }

        </div>
      </main>
    </s.Flow>
  )
}