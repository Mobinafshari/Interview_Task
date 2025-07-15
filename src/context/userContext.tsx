import { UserType } from "@/services/types/userService.types";
import { createContext, ReactNode, use, useCallback, useState } from "react";

type UserContextType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserToState] = useState<UserType | null>(null);

  const setUser = useCallback((user: UserType) => {
    setUserToState(user);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = use(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
