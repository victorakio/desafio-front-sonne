import { FiTrello, FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Sidebar() {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">
            <FiUsers />
            Usuários
          </Link>
        </li>
        <hr />
        <li>
          <Link to="/tasks">
            <FiTrello />
            Tarefas
          </Link>
        </li>
      </ul>
    </Container>
  );
}
