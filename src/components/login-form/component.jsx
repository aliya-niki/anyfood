import { useRef } from "react";
import { Button } from "../button/component";

export const LoginForm = ({ onLogin, onCancel }) => {
  const inputRef = useRef();

  return (
    <form action="#" onSubmit={() => onLogin(inputRef.current.value)}>
      <label>
        Ваше имя: 
        <input ref={inputRef} type="text" name="user" />
      </label>
      <Button type="submit">Войти</Button>
      <Button onClick={onCancel}>Отмена</Button>
    </form>
  )
};
