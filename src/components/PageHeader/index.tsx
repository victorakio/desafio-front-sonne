import { FiPlusCircle } from "react-icons/fi";

import { AddNewButton, PageHeaderContainer } from "./styles";

interface PageHeaderProps {
  title: string;
  buttonText: string;
  linkTo: string;
}

export default function PageHeader({
  title,
  buttonText,
  linkTo,
}: PageHeaderProps) {
  return (
    <PageHeaderContainer>
      <h1>{title}</h1>

      <AddNewButton to={linkTo}>
        <FiPlusCircle />
        {buttonText}
      </AddNewButton>
    </PageHeaderContainer>
  );
}
