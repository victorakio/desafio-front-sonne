import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { toast } from "react-toastify";
import { api } from "services/api";

interface User {
  id: string;
  name: string;
  email: string;
}

type CreateUserProps = Omit<User, "id">;

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersContextData {
  users: User[];
  createUser: (user: CreateUserProps) => Promise<void>;
  editUser: (user: User) => void;
  deleteUser: (id: string) => void;
}

const UsersContext = createContext<UsersContextData>({} as UsersContextData);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get("users").then((response) => setUsers(response.data.users));
  }, []);

  async function createUser(userInput: CreateUserProps) {
    const response = await api.post("users", { ...userInput, tasks: [] });
    const { user } = response.data;

    setUsers([...users, user]);

    toast.success("Usuário adicionado com sucesso!");
  }

  async function editUser(userInput: User) {
    const response = await api.patch(`users/${userInput.id}`, {
      ...userInput,
    });

    const { name, email } = response.data.user;

    const userIndex = users.findIndex((user) => {
      return user.id === String(userInput.id);
    });

    if (userIndex === -1) {
      return false;
    }

    const arrayWithEditedUser = users.map((user, index) => {
      if (index === userIndex) {
        return {
          ...user,
          name,
          email,
        };
      } else {
        return user;
      }
    });

    setUsers(arrayWithEditedUser);

    toast.success("Usuário editado com sucesso!");
  }

  async function deleteUser(id: string) {
    api.delete(`users/${id}`);

    const userIndex = users.findIndex((user) => {
      return user.id === String(id);
    });

    if (userIndex === -1) {
      return false;
    }

    setUsers(users.filter((user) => user.id !== id));

    toast.success("Usuário deletado com sucesso!");
  }

  return (
    <UsersContext.Provider value={{ users, createUser, editUser, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}
