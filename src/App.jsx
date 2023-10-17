import React, { useState, useEffect } from "react";
import "./App.css";
// import { peoples } from "./data/peoples";
import * as s from "./styled";
import { CardPeoples } from "./components/CardPeoples";
import { CreateGroups } from "./components/CreateGroups";
import * as i from "react-icons/ai"
import { db } from './firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc  } from 'firebase/firestore';


function App() {
  const [names, setNames] = useState();
  const [seeGroup, setSeeGroup] = useState(false)
  const [counter, setCounter] = useState(2)
  const fetchData = async () => {
    const peopleCollectionRef = collection(db, 'peoples');
    const data = await getDocs(peopleCollectionRef);
    const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setNames(dataArray);
  };
  useEffect(() => {    
      fetchData();
  }, []);

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

  const addDataToFirestore = () => {
    const data = {
      name: 'Bart'      
    };
    // Adiciona os dados ao Firestore
    addDoc(collection(db, 'peoples'), data)
      .then((docRef) => {
        console.log('Documento adicionado com ID: ', docRef.id);
        fetchData()
      })
      .catch((error) => {
        console.error('Erro ao adicionar documento: ', error);
      });
  };



  return (
    <s.Flow>
      <header>
        {
          seeGroup ?
            <>
              <h1>Grupos Formados</h1>
              <s.SubTitle>({Math.ceil(names.length / counter)} Grupos)</s.SubTitle>
            </>
            :
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
                {Array.isArray(names) && names.length > 0 ? (
                  names.map((people, idx) => (
                    <CardPeoples key={idx} people={people} fetchData={fetchData} />
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
              <s.ButtonCounter onClick={() => plus()}><i.AiOutlinePlus /></s.ButtonCounter>
              <s.Counter color={names?.length % counter == 0 ? "#005600" : "#f00"}>{counter}</s.Counter>
              <s.ButtonCounter onClick={() => minus()}><i.AiOutlineMinus /></s.ButtonCounter>
            </>
          }
          <s.ButtonGroup onClick={() => setSeeGroup(!seeGroup)}>
            {!seeGroup ?
              "Ver " + Math.ceil(names?.length / counter) + " Grupos"
              :
              "Ver lista de Participantes"
            }
          </s.ButtonGroup>
          <s.ContainerGroups>
            {
              seeGroup &&
              <CreateGroups names={names} numberNames={counter} />
            }
          </s.ContainerGroups>
        </div>
        <p>breve add e remover com banco de dados</p>
        <div>
          <s.Button onClick={addDataToFirestore}>Adicionar Dados ao Firestore</s.Button>
        </div>
      </main>
    </s.Flow>
  );
}

export default App;