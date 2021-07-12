import { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  usersInLocalStorage: User[];
  verifyIfUserExists: (userName: string) => boolean
  updateUsersInLocalStorage: (newUser: User) => void;
  isAuthenticated: boolean;
  authenticateUser: () => void;
}

type User = {
  name: string;
  password: string;
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [usersInLocalStorage, setUsersInLocalStorage] = useState<User[]>(
    localStorage.hasOwnProperty('users')
      ? JSON.parse(localStorage.getItem('users')!)
      : []
  );
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function authenticateUser() {
    setIsAuthenticated(true);
  }


  function verifyIfUserExists(userName: string) {
    const userExists = usersInLocalStorage.findIndex(user => user.name === userName);

    if (userExists !== -1) {
      alert('Usuário já cadastrado!');
      return true;
    } else {
      return false;
    }
  }

  function updateUsersInLocalStorage(newUser: User) {
    const updatedUsers = [...usersInLocalStorage, {
      name: newUser.name,
      password: newUser.password
    }];

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsersInLocalStorage(updatedUsers);
  }

  return (
    <AuthContext.Provider value={{ usersInLocalStorage, verifyIfUserExists, updateUsersInLocalStorage, isAuthenticated, authenticateUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}