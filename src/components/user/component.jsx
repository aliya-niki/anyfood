import { useCallback, useContext, useState } from "react";
import { CurrentUserContext } from "../../contexts/current-user/context";
import { Button } from "../button/component";
import { LoginForm } from "../login-form/component";
import { Modal } from "../modal/component";

export const User = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [ isModalOpen, setModalOpen ] = useState(false);

  const handleModalClose = useCallback(() => setModalOpen(false), []);

  const handleLogin = useCallback(
    (value) => {
      setCurrentUser(value);
      handleModalClose();
    },
    [handleModalClose, setCurrentUser],
  );
  
  return (
    <div>
      { currentUser 
        ? <p>
            {currentUser}
            <Button onClick={() => setCurrentUser(null)}>Выйти</Button>  
          </p>
        : <Button onClick={() => setModalOpen(true)}> Войти </Button>
      }

      { isModalOpen && <Modal onClose={handleModalClose}>
          <LoginForm onLogin={handleLogin} onCancel={handleModalClose} />
        </Modal>
      }
    </div>
  );
};
