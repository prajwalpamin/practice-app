
import './App.css';
import React,{useState,useEffect} from 'react';
import TestC from "./components/lifecycle"

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  },[]);
  return (
    <div>
      <TestC/>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
