import { styled } from "styled-components";

export const Flow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

`
export const ContainerList = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 20px;
`;

export const ContainerGroups = styled(ContainerList)`
`
export const SubTitle = styled.span`
  font-size: 22px;
  color: black;
  font-weight: 700;
  padding: 10px;
`;
export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: aquamarine;
  cursor: pointer;
  transition: border-color 0.25s;
  &:hover {
    border-color: #646cff;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;

export const ButtonList = styled(Button)`
  background-color: aquamarine;
  font-size: 20px;
  width: fit-content;
`
export const ButtonSE = styled(Button)`
  background-color: beige;
`
export const ButtonGroup = styled(Button)`
  background-color: beige;
  margin: 20px;
  height: 60px;
  width: 140px;
  border: 1px solid black;
`
export const Input = styled.input`
  width: 281px;
  height: 50px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px 0px 0px 20px;
  font-size: 20px;
  border: none;
  padding-left: 15px;
`;