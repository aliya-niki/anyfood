import { useDispatch } from "react-redux";
import { getUsers } from "../../redux/entities/user/thunks/get-users";
import { User } from "./component";
import { useEffect } from "react";

export const UserContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <User />
  )
};
