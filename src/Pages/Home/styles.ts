import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: #C9D1D9;

  .image{
    width: 60px;
  }
  .name{
    font-size: 18px;
    width: 140px;
  }
  p{
    word-break: break-all;
  }
  .url{
    min-width: 200px;
    a{
      width: 200px;
      word-break: break-all;
      transition: .5s;

      :hover{
        cursor: pointer;
        color: #6E767E;
      }
    }
  }
`;
export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 62px);
  width: 400px;
  padding: 80px 50px;
  @media(max-width: 1366px){
    padding: 60px 50px;
  }
  >img{
    border-radius: 100%;
    width: 275px;
    height: 275px;
    margin-bottom: 20px;
  }
  >h1{
    font-size: 25px;
  }
  >h2{
    font-size: 18px;
    color: #6E767E;
    margin: 5px 0 15px 0;
  }
  >p{
    line-height: 22.5px;
  }
`;

export const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  min-height: 300px;
  margin: 100px auto;
`;

export const HistoryHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #161B22;
  padding: 15px 20px;
  border-radius: 5px 5px 0 0;
  justify-content: space-between;
  >div{
    width: 120px;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: start;
  }
  span{
    width: 40px;
  }
`

export const HistoryBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0a0e14;
  border-radius: 0px 0px 5px 5px;
  >div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #161B22;
    margin: 10px 10px;
    padding: 5px 5px;
    border-radius: 5px;
    min-height: 60px;
    transition: .5s;
    :hover{
      filter: brightness(80%);
    }

    >.name, .image{
      cursor: pointer;
    }
  >div{
    width: 120px;
    >img{
      width: 55px;
      height: 55px;
      border-radius: 100%;
    }
  }
  span{
    width: 40px;
    >svg{
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
  }
`;