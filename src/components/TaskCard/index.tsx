import { Draggable } from "react-beautiful-dnd";
import { TaskCardContainer } from "./styles";
import { Task } from "components/TaskList";
import { useUsers } from "hooks/useUsers";

interface TaskCardProps {
  task: Task;
  index: number;
}

export default function TaskCard({ task, index }: TaskCardProps) {
  const { users } = useUsers();

  const taskUser = users.filter((user) => Number(user.id) === task.user);

  return (
    <Draggable key={task.id} draggableId={String(task.id)} index={index}>
      {(provided, snapshot) => (
        <TaskCardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            backgroundColor: snapshot.isDragging ? "#005fa3" : "",
            ...provided.draggableProps.style,
          }}
        >
          <h4>{task.title}</h4>

          <p>{task.description}</p>
          <br />
          <p>Responsável: {taskUser[0].name}</p>
        </TaskCardContainer>
      )}
    </Draggable>
  );
}
