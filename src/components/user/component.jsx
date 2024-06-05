import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/current-user";
import { Button } from "../button/component";

export const User = () => {
  const {currentUser, setCurrentUser} = useContext(CurrentUserContext);
  
  return (
    <div>
      { currentUser 
        ? <p>
            {currentUser}
            <Button onClick={() => setCurrentUser(null)}>Выйти</Button>  
          </p>
        : <Button onClick={() => setCurrentUser('Пользователь-1')}>
          Войти
        </Button>
      }
    </div>
  );
};
