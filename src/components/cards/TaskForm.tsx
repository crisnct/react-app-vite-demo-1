import React from "react";
import "./TaskForm.css";
import Tag from "./Tag";
import type { TaskData } from "./TaskData";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = React.useState<TaskData>({
    taskName: "",
    status: "todo",
    tags: [],
  });

  const handleChangeData = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => [...prevTasks, taskData]);
    setTaskData({
      taskName: "",
      status: "todo",
      tags: [],
    });
    console.log("Task submitted:", taskData);
  };

  const handleSelectTag = (tag: string) => {
    setTaskData((prevData) => {
      const updatedTags = prevData.tags.includes(tag)
        ? prevData.tags.filter((t) => t !== tag)
        : [...prevData.tags, tag];
      console.log("Updated tags:", updatedTags);
      return {
        ...prevData,
        tags: updatedTags,
      };
    });
  };

  const checkTagSelected = (tag: string) => {
    return taskData.tags.includes(tag);
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="taskName"
          className="task_input"
          value={taskData.taskName}
          onChange={handleChangeData}
          placeholder="Add a new task..."
        />
        <div className="task_bottom_line">
          <div>
            <Tag
              selectTag={handleSelectTag}
              selected={checkTagSelected("HTML")}
            >
              HTML
            </Tag>
            <Tag selectTag={handleSelectTag} selected={checkTagSelected("CSS")}>
              CSS
            </Tag>
            <Tag
              selectTag={handleSelectTag}
              selected={checkTagSelected("JavaScript")}
            >
              JavaScript
            </Tag>
            <Tag
              selectTag={handleSelectTag}
              selected={checkTagSelected("React")}
            >
              React
            </Tag>
          </div>
          <div>
            <select
              name="status"
              className="task_status"
              value={taskData.status}
              onChange={handleChangeData}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="task_submit" type="submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
