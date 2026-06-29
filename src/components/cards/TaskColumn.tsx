import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import type { TaskData } from "./TaskData";
import DropArea from "./DropArea.tsx";

interface Props {
  title: string;
  icon?: React.ReactNode;
  tasks: TaskData[];
  status: string;
  handleDelete: (index: number) => void;
  setActiveCard: (index: number | null) => void;
  onDrop: (status: string, index: number) => void;
}

const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  setActiveCard,
  onDrop,
}: Props) => {
  return (
    <section className="task_column">
      {icon}
      <h2>{title}</h2>
      <DropArea onDrop={() => onDrop(status, 0)} />
      {tasks.map((task, index) =>
        task.status.toLowerCase() === status.toLowerCase() ? (
          <React.Fragment key={`${task.taskName}-${task.status}-${index}`}>
            <TaskCard
              task={task}
              handleDelete={handleDelete}
              setActiveCard={setActiveCard}
              index={index}
            />
            <DropArea onDrop={() => onDrop(status, index + 1)} />
          </React.Fragment>
        ) : null,
      )}
    </section>
  );
};

export default TaskColumn;
