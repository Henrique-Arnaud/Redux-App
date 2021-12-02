export interface IUser{
  login: string;
  id: number;
  bio: string;
  avatar_url: string;
  company: string;
  name: string;
  html_url: string;
}

export interface IHistoryUsers{
  user: IUser;
}

export interface IHistoryState{
  users: IHistoryUsers[];
}