import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { IState } from '../../store';
import { removeUserOfHistory } from '../../store/modules/history/actions';
import { IHistoryUsers, IUser } from '../../store/modules/history/types';
import { Container, HistoryBody, HistoryContainer, HistoryHeader, Perfil } from './styles'
import { FiTrash2 } from 'react-icons/fi';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const historyUsers = useSelector<IState, IHistoryUsers[]>(state => state.history.users);
  const [currentUser, setCurrentUser] = useState<IUser>();

  useEffect(() => {
    historyUsers.length !== 0 && setCurrentUser(historyUsers[historyUsers.length - 1].user);
  }, [historyUsers]);

  const handleSetCurrentUser = useCallback((user: IUser) => {
    setCurrentUser(user);
  }, [currentUser])

  const handleRemoveUser = useCallback((user: IUser) => {
    dispatch(removeUserOfHistory(user));
  }, [dispatch])

  return (
    <Container>
      <Perfil>
        {historyUsers.length !== 0 ? (
          <>
            <img src={currentUser?.avatar_url} alt="" />

            <h1>{currentUser?.name}</h1>

            <h2>{currentUser?.login}</h2>

            <p>{currentUser?.bio}</p>
          </>
        ) : (
          <>
            <img src="/githubIcon.png" alt="" />

            <h1>Username</h1>

            <h2>Login</h2>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa impedit tenetur laboriosam inventore exercitationem magni deleniti repudiandae? </p>
          </>
        )}
      </Perfil>

      <HistoryContainer>
        <HistoryHeader>
          <div className="image">
            <p>Avatar</p>
          </div>
          <div className="name">
            <p>Name</p>
          </div>
          <div>
            <p>Login</p>
          </div>
          <div>
            <p>Company</p>
          </div>
          <div className="url">
            <p>GitHub url</p>
          </div>
          <span></span>
        </HistoryHeader>
        <HistoryBody>
          {historyUsers.length !== 0 && (
            historyUsers.map((history, i) => (
              <div key={i}>
                <div className="image" onClick={() => handleSetCurrentUser(history.user)}>
                  <img src={history.user.avatar_url} alt="" />
                </div>
                <div className="name" onClick={() => handleSetCurrentUser(history.user)}>
                  <p className="name">{history.user.name}</p>
                </div>
                <div>
                  <p>{history.user.login}</p>
                </div>
                <div>
                  <p>{history.user.company}</p>
                </div>
                <div className="url">
                  <a href={history.user.html_url} target="_blank">{history.user.html_url}</a>
                </div>
                <span><FiTrash2 onClick={() => handleRemoveUser(history.user)} /> </span>
              </div>
            ))
          )}
        </HistoryBody>
      </HistoryContainer>
    </Container >
  )
}

