import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import ListGroup from "./components/list/ListGroup.tsx";
import Alert from "./components/list/Alert.tsx";
import PushButton from "./components/list/Button.tsx";
import "./index.css";
import TaskForm from "./components/cards/TaskForm.tsx";
import TaskStatusGroup from "./components/cards/TaskStatusGroup.tsx";
import type { TaskData } from "./components/cards/TaskData.tsx";

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
    setTasks(tasks.filter((task, i) => i !== index));
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
      <TaskForm setTasks={setTasks} />
      <TaskStatusGroup
        tasks={tasks}
        handleDelete={handleDelete}
        setActiveCard={setActiveCard}
        onDrop={onDrop}
      />

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

function AppOld() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
