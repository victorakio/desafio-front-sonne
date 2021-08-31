import { yupResolver } from "@hookform/resolvers/yup";

import Sidebar from "components/Sidebar";
import {
  EditUserContainer,
  EditUserWrapper,
  Form,
  LoadingIcon,
} from "./styles";
import { userSchema } from "utils/userValidation";
import { useForm } from "react-hook-form";
import { useUsers } from "hooks/useUsers";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "services/api";
import { useHistory, useParams } from "react-router-dom";

interface User {
  name: string;
  email: string;
}

interface UserParams {
  id: string;
}

export default function EditUser() {
  const [user, setUser] = useState<User>();
  const { editUser } = useUsers();

  const { id } = useParams<UserParams>();
  let history = useHistory();

  const { register, handleSubmit, formState } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
    resolver: yupResolver(userSchema),
  });

  const { errors } = formState;

  useEffect(() => {
    api.get(`users/${id}`).then((response) => setUser(response.data.user));
  }, [id]);

  console.log(user);

  const onSubmit = handleSubmit((data: User) => {
    console.log(data);

    editUser({ id: id, ...data });

    history.push("/");
  });

  return (
    <EditUserWrapper>
      <Sidebar />

      <EditUserContainer>
        <h1>Editar usuário</h1>
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
            defaultValue={user?.name}
            {...register("name")}
            className={!!errors.name ? "error" : ""}
          />

          <label>Email:</label>
          {!!errors.email ? (
            <p className="error-message">{errors.email.message}</p>
          ) : (
            ""
          )}
          <input
            type="email"
            id="email"
            defaultValue={user?.email}
            {...register("email")}
          />

          <button>
            {formState.isSubmitting ? <LoadingIcon /> : "Atualizar"}
          </button>
        </Form>
      </EditUserContainer>
    </EditUserWrapper>
  );
}
