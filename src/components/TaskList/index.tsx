import TaskCard from "components/TaskCard";
import { Droppable } from "react-beautiful-dnd";
import { FiClipboard } from "react-icons/fi";
import { TaskListContainer } from "./styles";

export interface Task {
  id: string;
  title: string;
  description: string;
  user: number;
  status: string;
}

interface TaskListProps {
  id: string;
  list: any;
}

export default function TaskList({ id, list }: TaskListProps) {
  return (
    <TaskListContainer>
      <h3>
        <FiClipboard />
        {list.name}
      </h3>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <ul
            className="tasks"
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              background: snapshot.isDraggingOver ? "lightblue" : "",
              width: 250,
              minHeight: 500,
            }}
          >
            {list.items.map((task: any, index: number) => {
              return <TaskCard task={task} index={index} />;
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </TaskListContainer>
  );
}
