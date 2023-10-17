import React, { useEffect, useState } from "react";
import { Button, ButtonSE, Input } from "../styled";
import { deleteItem, updateName } from "../functions/functions";

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
          >Salvar</ButtonSE>
          <ButtonSE onClick={() => {
            setEdit(false)
          }}
          >Fechar</ButtonSE>
          <ButtonSE onClick={async () => {
            deleteItem(people.id)
            setEdit(false)
            await fetchData(setNames)
          }}>Excluir</ButtonSE>
        </div>
      ) : (
        <>
          <Button onClick={() => {
            setNameEdit(people.name)
            setEdit(!edit)
          }}>{people.name}</Button>
        </>
      )}
    </>
  );
}