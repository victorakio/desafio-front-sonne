import PageHeader from "components/PageHeader";
import Sidebar from "components/Sidebar";
import UsersList from "components/UsersList";

import { ContentContainer, HomeWrapper } from "./styles";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <HomeWrapper>
      <Sidebar />

      <ContentContainer>
        <PageHeader
          title="Usuários"
          buttonText="Adicionar usuário"
          linkTo="/users/create"
        />

        <UsersList />
      </ContentContainer>
    </HomeWrapper>
  );
}
