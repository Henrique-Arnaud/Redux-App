import { Reducer } from "redux";
import { IHistoryState } from "./types";
import produce from 'immer';

// Em history, o estado inicial de users é um array vazio
const INITIAL_STATE: IHistoryState = {
  users: []
}

// array function que recebe como parâmetros seu estado, e a ação, vinda do dispatch
const history: Reducer<IHistoryState> = (state = INITIAL_STATE, action) => {
  //produce é uma função da biblioteca immer que serve para mudar o estado criando uma cópia de si mesmo

  return produce(state, draft => {
    // state é o nosso objeto inicial, draft é a cópia, onde podemos fazer as alterações, e retornar o valor alterado

    // switch que verifica o type da função em actions
    switch (action.type) {
      case 'ADD_USER_TO_HISTORY': {
        // Aqui eu recebo o objeto user do payload que enviamos em actions
        const { user } = action.payload;
        // verifico se existe alguem no state atual com o mesmo id que o user passado no payload
        if (state.users.filter(history => history.user.id === user.id).length === 0) {
          // caso não tenha, executo o push (adiciono no array o novo user)
          draft.users.push({
            user
          });
        }
        else {
          // caso tenha, retiro o in
          draft.users.push(draft.users.splice(state.users.indexOf(state.users.filter(history => history.user.id === user.id)[0]), 1)[0])
        }
        break;
      }
      case 'REMOVE_USER_OF_HISTORY': {
        const { user } = action.payload;
        if (state.users.filter(history => history.user.id === user.id).length !== 0) {
          draft.users.splice(state.users.indexOf(state.users.filter(history => history.user.id === user.id)[0]), 1)
        }
        break;
      }
      default: {
        return draft;
      }
    }
  });
}
export default history;
