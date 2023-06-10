import { ChangeEventHandler, useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState<string[]>([]);
  const [text, setText] = useState("");

  const add = () => {
    setTodo([...todo, text]);
    setText("");
  };

  const change: ChangeEventHandler<HTMLInputElement> = (event) => {
    const target = event.target;
    const text = target.value;
    setText(text);
  };

  return (
    <>
      <h1>ToDo Hinzufügen</h1>
      {todo.map((s, i) => (
        <h2>
          {i + 1} {s}
        </h2>
      ))}
      <button onClick={add} className="add-button">
        Hinzufügen
      </button>
      <input type="text" onChange={change} value={text}></input>
    </>
  );
}

export default App;
