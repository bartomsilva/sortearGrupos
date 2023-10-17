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
export const ContainerAddName = styled.div`
  display: inline-block;
  margin-right: 10px;
`
export const SubTitle = styled.span`
  font-size: 22px;
  color: black;
  font-weight: 700;
  padding: 10px;
`;

export const Counter = styled(SubTitle)`
  display: inline-block;
  min-width:35px;
  color: ${(props)=> props.color}
`
export const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f18470;
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

export const ButtonCounter = styled(Button)`
  background-color: beige;
  font-size: 18px;

`
export const ButtonList = styled(Button)`
  background-color: #f18470;
  font-size: 18px;
  font-weight: 700;
  width: fit-content;
`
export const ButtonSE = styled(Button)`
  background-color: beige;
  margin: 0 5px;
`
export const ButtonAddName =styled(ButtonSE)`
`
export const ButtonGroup = styled(Button)`
  background-color: beige;
  margin: 20px;
  height: 60px;
  min-width: 150px;
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