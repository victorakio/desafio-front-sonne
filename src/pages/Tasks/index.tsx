import PageHeader from "components/PageHeader";
import Sidebar from "components/Sidebar";
import TaskList from "components/TaskList";
import { useTasks } from "hooks/useTasks";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { TasksContainer, TasksWrapper } from "./styles";

export default function Tasks() {
  const { tasks } = useTasks();

  const taskLists = {
    /* eslint-disable-next-line */
    ["inProgress"]: {
      name: "Em andamento",
      items: tasks,
    },
    /* eslint-disable-next-line */
    ["done"]: {
      name: "Finalizadas",
      items: [],
    },
  };

  const [columns, setColumns] = useState(taskLists);

  const onDragEnd = (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <TasksWrapper>
      <Sidebar />
      <TasksContainer>
        <PageHeader
          title="Tarefas"
          buttonText="Criar tarefa"
          linkTo="/tasks/create"
        />
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          <div>
            {Object.entries(columns).map(([columnId, column]) => (
              <TaskList key={columnId} id={columnId} list={column} />
            ))}
          </div>
        </DragDropContext>
      </TasksContainer>
    </TasksWrapper>
  );
}
