import { IUser } from "./types";

export function addUserToHistory(user: IUser) {
  return {
    type: 'ADD_USER_TO_HISTORY',
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