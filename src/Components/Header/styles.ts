import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 62px;
  background-color: #161B22;
  
  >div{
    width: 90%;
    height: 62px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    >img{
      width: 42px;
      height: 42px;
    }
  }
`;