import { yupResolver } from "@hookform/resolvers/yup";

import Sidebar from "components/Sidebar";
import {
  CreateUserContainer,
  CreateUserWrapper,
  Form,
  LoadingIcon,
} from "./styles";
import { userSchema } from "utils/userValidation";
import { useForm } from "react-hook-form";
import { useUsers } from "hooks/useUsers";
import { useHistory } from "react-router-dom";

interface User {
  name: string;
  email: string;
}

export default function CreateUser() {
  const { createUser } = useUsers();
  let history = useHistory();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(userSchema),
  });

  const { errors } = formState;

  const onSubmit = handleSubmit((data: User) => {
    createUser(data);
    history.push("/");
  });

  return (
    <CreateUserWrapper>
      <Sidebar />

      <CreateUserContainer>
        <h1>Criar usuário</h1>

        <Form onSubmit={onSubmit}>
          <label>Nome:</label>
          {!!errors.name ? (
            <p className="error-message">{errors.name.message}</p>
          ) : (
            ""
          )}
          <input
            type="text"
            id="name"
            {...register("name")}
            className={!!errors.name ? "error" : ""}
          />

          <label>Email:</label>
          {!!errors.email ? (
            <p className="error-message">{errors.email.message}</p>
          ) : (
            ""
          )}
          <input type="email" id="email" {...register("email")} />

          <button>
            {formState.isSubmitting ? <LoadingIcon /> : "Cadastrar"}
          </button>
        </Form>
      </CreateUserContainer>
    </CreateUserWrapper>
  );
}
