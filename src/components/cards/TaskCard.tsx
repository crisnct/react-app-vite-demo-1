import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import { TrashFill } from "react-bootstrap-icons";
import type { TaskData } from "./TaskData";

interface Props {
  task: TaskData;
  handleDelete: (index: number) => void;
  index: number;
  setActiveCard: (index: number | null) => void;
}

const TaskCard = ({ task, handleDelete, index, setActiveCard }: Props) => {
  return (
    <article
      className="task_card"
      draggable="true"
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{task.taskName}</p>
      <div className="task_bottom_line">
        <div className="task_tags">
          {task.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </div>
        <div className="task_delete" onClick={() => handleDelete(index)}>
          <TrashFill className="icon" size={20} />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
