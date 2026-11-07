import { useState } from "react";
import Clock from "./Clock.jsx";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="app">
      <button onClick={() => setShow(!show)}>
        {show ? "Hide clock" : "Show clock"}
      </button>
      {show && <Clock />}
    </div>
  );
}

export default App;
