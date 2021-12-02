import { createStore } from 'redux';
import { IHistoryState } from './modules/history/types';
import rootReducer from './modules/rootReducer';

export interface IState {
  history: IHistoryState;
}

const store = createStore(rootReducer);

export default store;
