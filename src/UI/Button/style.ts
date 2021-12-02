import styled from "styled-components";

export const Button = styled.button`
  height: 35px;
  border: 1px solid #44484C;
  border-radius: 5px;
  outline: none;
  padding: 0 5px;
  background-color: #0D1117;
  color: #C2C3C5;
  font-weight: bold;
  cursor: pointer;
  transition: .5s;
  :hover{
    filter: brightness(150%);
  }
`;