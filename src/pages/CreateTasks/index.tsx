import { yupResolver } from "@hookform/resolvers/yup";
import Sidebar from "components/Sidebar";
import { useTasks } from "hooks/useTasks";
import { useUsers } from "hooks/useUsers";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { taskSchema } from "utils/userValidation";
import {
  CreateTasksWrapper,
  CreateTaskContainer,
  LoadingIcon,
  Form,
} from "./styles";

interface Task {
  title: string;
  description: string;
  user: number;
}

export default function CreateTasks() {
  const { users } = useUsers();
  const { createTask } = useTasks();

  let history = useHistory();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(taskSchema),
  });

  const { errors } = formState;

  const onSubmit = handleSubmit((data: Task) => {
    createTask({ ...data, status: "inProgress" });
    history.push("/tasks");
  });

  return (
    <CreateTasksWrapper>
      <Sidebar />
      <CreateTaskContainer>
        <h1>Criar tarefa</h1>

        <Form onSubmit={onSubmit}>
          <label>Título:</label>
          {!!errors.title ? (
            <p className="error-message">{errors.title.message}</p>
          ) : (
            ""
          )}
          <input
            type="text"
            id="title"
            {...register("title")}
            className={!!errors.title ? "error" : ""}
          />

          <label>Descrição:</label>
          {!!errors.description ? (
            <p className="error-message">{errors.description.message}</p>
          ) : (
            ""
          )}
          <textarea rows={4} id="description" {...register("description")} />

          <label>Usuário responsável</label>
          <select id="user" {...register("user")}>
            {users.map((user) => (
              <option key={user.id} value={user.name}>
                {user.name}
              </option>
            ))}
          </select>

          <button>
            {formState.isSubmitting ? <LoadingIcon /> : "Cadastrar"}
          </button>
        </Form>
      </CreateTaskContainer>
    </CreateTasksWrapper>
  );
}
