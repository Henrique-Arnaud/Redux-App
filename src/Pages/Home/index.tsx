import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { IState } from '../../store';
import { removeUserOfHistory } from '../../store/modules/history/actions';
import { IHistoryUsers, IUser } from '../../store/modules/history/types';
import { Container, HistoryBody, HistoryContainer, HistoryHeader, Perfil } from './styles'
import { FiTrash2 } from 'react-icons/fi';

export const Home: React.FC = () => {

  // chamo o hook useDispatch. "dispatch" É uma função que recebe como parâmetro a uma função da pasta actions do redux
  const dispatch = useDispatch();

  // Pego o estado inicial de dentro do redux. Toda vez que eu atualizar o estado users de dentro do redux, o useSelector pega o valor novamente e manda pra const historyUsers
  const historyUsers = useSelector<IState, IHistoryUsers[]>(state => state.history.users);

  // estado do usuário atual
  const [currentUser, setCurrentUser] = useState<IUser>();

  /* O hook useEffect é uma função que é executada sempre que o estado passado no colchete atualizar. Por exemplo, eu não passei nada: então executa quando entrar na página; eu passei o estado historyUsers: a função é executada sempre que esse estado for atualizado. 
  * Dá para fazer muitas coisas com ele, por exemplo bloquear um botão caso algum campo não esteja do jeito que você quer, caso esteja usando estado nos inputs. Você pode literalmente passar 20 estados, e a função vai executar a CADA vez que QUALQUER estado observado dentro dos colchetes for modificado.
  */
  useEffect(() => {
    historyUsers.length !== 0 && setCurrentUser(historyUsers[historyUsers.length - 1].user);
  }, [historyUsers]);

  // O useCallback é um jeito seguro de evitar renderização desnecessária e atualizar estados por meio de uma função. Sempre "observe" o estado que será atualizado dentro de [], para renderizar em "tempo real".
  const handleSetCurrentUser = useCallback((user: IUser) => {
    setCurrentUser(user);
  }, [currentUser])

  // Aqui eu to observando a função dispatch dentro dos colchetes para a atualização do estado dentro do redux.
  const handleRemoveUser = useCallback((user: IUser) => {
    // dispatch para remoção do usuário da tabela.
    dispatch(removeUserOfHistory(user));
  }, [dispatch])

  return (
    <Container>
      <Perfil>
        {/* Ternário para verificar se já tem algum usuário no estado que vem do redux. Se não tiver, monta um perfil modelo com informações estáticas*/}
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
          {/* Verifico se há algum elemento no array antes de renderizar o componente dinámico com o map*/}
          {historyUsers.length !== 0 && (
            // (map padrão, pegando o index do looping com "i" para jogar no looping depois)
            historyUsers.map((history, i) => (
              // "key" é uma propriedade que ajuda o react a identificar os itens, como quais sofreram atualização, foram adicionados ou foram removidos. Pode ser usado o próprio id do elemento, mas como já tive problemas com o uso do id ao tentar usar Ref(não precisa ter pressa nesse daqui, geralmente se aprende por necessidade mesmo), uso "i" mesmo.
              <div key={i}>
                {/* onClick pode ser usado na maioria das tags clássicas do html. A função que eu to chamando aqui é um hook do react, o useCallback que eu explico lá no começo */}
                <div className="image" onClick={() => handleSetCurrentUser(history.user)}>
                  <img src={history.user.avatar_url} alt="" />
                </div>
                <div className="name" onClick={() => handleSetCurrentUser(history.user)}>
                  <p className="name">{history.user.id}</p>
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

