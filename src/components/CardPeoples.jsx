import React, { useEffect, useState } from "react";
import { Button, ButtonSE, Input } from "../styled";

export function CardPeoples(props) {
  const [edit, setEdit] = useState(false);
  const { name, setNames, names } = props;
  const [nameEdit, setNameEdit] = useState()
  const [nameOld, setNameOld] = useState()

  useEffect(() => {
    setNameEdit(name)
  }, [])
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
            const newNames = []
            names?.map((name) => {
              if (name == nameOld) name = nameEdit
              if (name) newNames.push(name)
              setNameOld(nameEdit)
            })
            setEdit(false)
            setNames(newNames)
          }}
          >Salvar</ButtonSE>
          <ButtonSE onClick={() => {
            setEdit(false)
            setNameEdit(name)
          }}
          >Fechar</ButtonSE>
        </div>
      ) : (
        <Button onClick={() => {
          setEdit(!edit)
          setNameOld(name)
        }}
        >{name}</Button>
      )}
    </>
  );
}