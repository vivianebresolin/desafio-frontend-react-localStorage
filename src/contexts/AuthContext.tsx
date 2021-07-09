import { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  usersInLocalStorage: UserInLocalStorage[];
  verifyIfUserExists: (userName: string) => boolean
  updateUsersInLocalStorage: (newUser: UserInLocalStorage) => void;
}

type UserInLocalStorage = {
  name: string;
  password: string;
}

interface AuthContextProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [usersInLocalStorage, setUsersInLocalStorage] = useState<UserInLocalStorage[]>(
    localStorage.hasOwnProperty('users')
      ? JSON.parse(localStorage.getItem('users')!)
      : []
  );

  function verifyIfUserExists(userName: string) {
    const userExists = usersInLocalStorage.findIndex(user => user.name === userName);

    if (userExists !== -1) {
      alert('Usuário já cadastrado!');
      return true;
    } else {
      return false;
    }
  }

  function updateUsersInLocalStorage(newUser: UserInLocalStorage) {
    const updatedUsers = [...usersInLocalStorage, {
      name: newUser.name,
      password: newUser.password
    }];

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsersInLocalStorage(updatedUsers);
  }

  return (
    <AuthContext.Provider value={{ usersInLocalStorage, verifyIfUserExists, updateUsersInLocalStorage }}>
      {props.children}
    </AuthContext.Provider>
  );
}