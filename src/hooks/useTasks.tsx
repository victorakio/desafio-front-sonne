import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { toast } from "react-toastify";
import { api } from "services/api";

interface Task {
  id: string;
  title: string;
  description: string;
  user: number;
  status: string;
}

type CreateTaskProps = Omit<Task, "id">;

interface TasksProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  createTask: (task: CreateTaskProps) => Promise<void>;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    api.get("tasks").then((response) => setTasks(response.data.tasks));
  }, []);

  console.log(tasks);

  async function createTask(taskInput: CreateTaskProps) {
    const response = await api.post("tasks", { ...taskInput });
    const { task } = response.data;

    setTasks([...tasks, task]);

    toast.success("Tarefa adicionada com sucesso!");
  }

  return (
    <TasksContext.Provider value={{ tasks, createTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  return context;
}
