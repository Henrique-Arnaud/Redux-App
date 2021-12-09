import { IUser } from "./types";

// criação da função de ação.
export function addUserToHistory(user: IUser) {
  return {
    // É como ele vai ser identificado dentro do switch no reducer.ts
    type: 'ADD_USER_TO_HISTORY',
    // payload são os dados que você quer enviar para o reducer, por ex.: Se eu quero atualizar o estado do usuario do tipo IUser, eu posso enviar um response ou um objeto qualquer do tipo IUser.
    payload: {
      user
    }
  }
}

export function removeUserOfHistory(user: IUser) {
  return {
    type: 'REMOVE_USER_OF_HISTORY',
    payload: {
      user
    }
  }
}