import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/current-user";

export const User = () => {
  const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
  
  return (
    <div>
      { currentUser 
        ? <p>
            {currentUser}
            <button onClick={() => setCurrentUser(null)}>Выйти</button>  
          </p>
        : <button onClick={() => setCurrentUser('Пользователь-1')}>
          Войти
        </button>
      }
    </div>
  );
};
