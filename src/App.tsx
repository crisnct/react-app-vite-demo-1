import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ListGroup from "./components/list/ListGroup.tsx";
import Alert from "./components/list/Alert.tsx";
import PushButton from "./components/list/Button.tsx";
import "./index.css";
import TaskForm from "./components/cards/TaskForm.tsx";
import TaskStatusGroup from "./components/cards/TaskStatusGroup.tsx";
import type { TaskData } from "./components/cards/TaskData.tsx";
import Movies from "./components/movies/Movies.jsx";

function App() {
  let countries = ["UK", "Romania", "Germany"];

  const handleSelectCountry = (item: string) => {
    console.log("Clicked country", item);
  };
  const [showAlert, setShowAlert] = useState(false);

  const oldTasks = localStorage.getItem("tasks");
  const [tasks, setTasks] = useState<TaskData[]>(
    JSON.parse(oldTasks || "[]") || [],
  );
  const [activeCard, setActiveCard] = useState<number | null>(null);
  console.log("Current tasks:", tasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (index: number) => {
    console.log(`Delete task at index: ${index}`);
    setTasks((currentTasks) => currentTasks.filter((_, i) => i !== index));
  };

  const onDrop = (status: string, index: number) => {
    console.log(
      `${activeCard} is going to be placed into ${status} and ${index}`,
    );
    if (activeCard === null || activeCard === undefined) {
      return;
    }
    const taskToMove = tasks[activeCard];
    if (!taskToMove) {
      return;
    }

    const updatedTasks = tasks.filter((_, pos) => pos !== activeCard);
    const insertionIndex = Math.max(0, Math.min(index, updatedTasks.length));

    updatedTasks.splice(insertionIndex, 0, {
      ...taskToMove,
      status,
    });

    setTasks(updatedTasks);
    setActiveCard(null);
  };

  return (
    <div className="app">
      <section className="app__movies">
        <Movies />
      </section>

      <section className="app__task-manager">
        <TaskForm setTasks={setTasks} />
        <TaskStatusGroup
          tasks={tasks}
          handleDelete={handleDelete}
          setActiveCard={setActiveCard}
          onDrop={onDrop}
        />
      </section>

      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>A simple alert</Alert>
      )}

      <ListGroup
        items={countries}
        heading="Countries"
        onSelectItem={handleSelectCountry}
      />

      <br></br>

      <PushButton
        text="Click me"
        color="danger"
        onPush={() => {
          console.log("Button clicked!");
          setShowAlert(true);
        }}
      />
    </div>
  );
}

export default App;
