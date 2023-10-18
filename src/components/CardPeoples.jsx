import React, { useEffect, useState } from "react";
import { Button, ButtonSE, Input } from "../styled";
import { deleteItem, updateName } from "../functions/functions";
import * as i from "react-icons/ai"
import {PiTrash } from "react-icons/Pi"

export function CardPeoples(props) {
  const [edit, setEdit] = useState(false);
  const [nameEdit, setNameEdit] = useState()
  const { people, fetchData, setNames } = props;

  useEffect(() => {
    setNameEdit(people.name)
  }, [people])

  return (
    <>
      {edit ? (
        <div>
          <Input
            placeholder="Nome"
            value={nameEdit}
            onChange={(e) => setNameEdit(e.target.value)}
            autoFocus 
          />
          <ButtonSE onClick={async () => {
            setEdit(false)
            const itemIdToUpdate = people.id
            const newUpdatedName = nameEdit
            newUpdatedName && updateName(itemIdToUpdate, newUpdatedName);
            !newUpdatedName && deleteItem(itemIdToUpdate);
            await fetchData(setNames)
          }}
          ><i.AiOutlineCheck/></ButtonSE>
          <ButtonSE onClick={() => {
            setEdit(false)
          }}
          ><i.AiOutlineClose/></ButtonSE>
          <ButtonSE onClick={async () => {
            deleteItem(people.id)
            setEdit(false)
            await fetchData(setNames)
          }}><PiTrash/></ButtonSE>
        </div>
      ) : (
        <>
          <Button onClick={() => {
            setNameEdit(people.name)
            setEdit(!edit)
          }}>{people.name}</Button>
        </>
      )}
      {/* <button onClick={()=>getItemById("peoples",people.id)}>exibir</button>
      <button onClick={()=>findByName("peoples",people.name[2])}></button> */}
    </>
  );
}