import { useUsers } from "hooks/useUsers";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import { DeleteUserButton, EditUserButton, UsersListContainer } from "./styles";

export default function UsersList() {
  const { users, deleteUser } = useUsers();
  console.log(users);
  return (
    <UsersListContainer>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>
              <a href={`mailto:${user.email}`}>{user.email}</a>
            </td>
            <td>
              <EditUserButton to={`/users/edit/${user.id}`}>
                <FiEdit />
                Editar
              </EditUserButton>

              <DeleteUserButton onClick={() => deleteUser(String(user.id))}>
                <FiTrash2 /> Excluir
              </DeleteUserButton>
            </td>
          </tr>
        ))}
      </tbody>
    </UsersListContainer>
  );
}
