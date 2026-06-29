import React from "react";
import "./TaskStatusGroup.css";
import { Clipboard, Gear, CheckCircleFill } from "react-bootstrap-icons";
import TaskColumn from "./TaskColumn";
import type { TaskData } from "./TaskData";

interface Props {
  tasks: TaskData[];
  handleDelete: (index: number) => void;
  setActiveCard: (index: number | null) => void;
  onDrop: (status: string, index: number) => void;
}

const TaskStatusGroup = ({
  tasks,
  handleDelete,
  setActiveCard,
  onDrop,
}: Props) => {
  return (
    <div className="task_status_group">
      <TaskColumn
        title="To Do"
        icon={<Clipboard size={24} />}
        tasks={tasks}
        status="todo"
        handleDelete={handleDelete}
        setActiveCard={setActiveCard}
        onDrop={onDrop}
      />
      <TaskColumn
        title="Doing"
        icon={<Gear size={24} />}
        tasks={tasks}
        status="doing"
        handleDelete={handleDelete}
        setActiveCard={setActiveCard}
        onDrop={onDrop}
      />
      <TaskColumn
        title="Done"
        icon={<CheckCircleFill size={24} />}
        tasks={tasks}
        status="done"
        handleDelete={handleDelete}
        setActiveCard={setActiveCard}
        onDrop={onDrop}
      />
    </div>
  );
};

export default TaskStatusGroup;
