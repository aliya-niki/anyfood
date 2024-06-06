import { useMemo, useState } from "react";
import { CurrentUserContext } from "./context";

export const CurrentUserContextProvider = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState(null);

  const contextValue = useMemo(
    () => ({currentUser, setCurrentUser}), 
    [currentUser]
  );

  return (
    <CurrentUserContext.Provider value={contextValue}>
      {children}
    </CurrentUserContext.Provider>
  );
};
