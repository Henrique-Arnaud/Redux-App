import { Reducer } from "redux";
import { IHistoryState } from "./types";
import produce from 'immer';

const INITIAL_STATE: IHistoryState = {
  users: []
}

const history: Reducer<IHistoryState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_USER_TO_HISTORY': {
        const { user } = action.payload;
        if (state.users.filter(history => history.user.id === user.id).length === 0) {
          draft.users.push({
            user
          });
        }
        else {
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
