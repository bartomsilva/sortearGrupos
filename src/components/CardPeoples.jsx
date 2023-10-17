import React, { useEffect, useState } from "react";
import { Button, ButtonSE, Input } from "../styled";
import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';


export function CardPeoples(props) {
  const [edit, setEdit] = useState(false);
  const { people, fetchData } = props;
  const [nameEdit, setNameEdit] = useState()

  useEffect(() => {
    setNameEdit(people.name)
  }, [])

  const updateName = async (itemId, newName) => {
    try {
      const itemDocRef = doc(db, 'peoples', itemId); 
      await updateDoc(itemDocRef, {
        name: newName  
      });
      console.log('Nome atualizado com sucesso!');      
    } catch (error) {
      console.error('Erro ao atualizar nome:', error);
    } 
    fetchData()
    
  };

  const deleteItem = async (itemId) => {
    try {
      const itemDocRef = doc(db, 'peoples', itemId);  // 'peoples' é o nome da coleção
      await deleteDoc(itemDocRef);
      console.log('Item deletado com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar item:', error);
    }
    fetchData()
  };


  return (
    <>
      {edit ? (
        <div>
          <Input
            placeholder="Nome"
            value={nameEdit}
            onChange={(e) => setNameEdit(e.target.value)}
          />
          <ButtonSE onClick={() => {
            setEdit(false)
            const itemIdToUpdate = people.id 
            const newUpdatedName = nameEdit 
            newUpdatedName && updateName(itemIdToUpdate, newUpdatedName);
            !newUpdatedName && deleteItem(itemIdToUpdate);
          }}
          >Salvar</ButtonSE>
          <ButtonSE onClick={() => {
            setEdit(false)
            setNameEdit(people.name)
          }}
          >Fechar</ButtonSE>
        </div>
      ) : (
        <>
        <Button onClick={() => {
          setEdit(!edit)
        }}
        >{people.name}</Button> <button onClick={()=>deleteItem(people.id)}>del</button>
        </>
      )}
    </>
  );
}