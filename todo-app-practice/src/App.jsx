import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Task from "./components/Task";

function App() {
  const [allTasks, sAllTasks] = useState([]);

  const [task, stask] = useState("");

  const render = (e) => {
    e.preventDefault();

    // sAllTasks(prev=> [...prev, {task, checkBox: false, id:Date.now()}])
    sAllTasks([...allTasks, { task, checkBox: false, id: Date.now() }]);
  };

  const del = (id) => {
    sAllTasks(
      allTasks.filter((e, i) => {
        return e.id != id;
      }),
    );
  };

  const pendingRender = (id, condition) =>{
    sAllTasks(allTasks.map((e,i)=>{
        if(e.id == id){
            return {id: id, checkBox: condition, task: e.task}
        }else{
            return e
        }
    }))
  }

  return (
    <div className="App">
      <div className="container">
        <div className="mainHeading">
          <h1>To-Do List</h1>
        </div>

        <form className="valueGet" onSubmit={render}>
          <div className="input">
            <input
              type="text"
              placeholder="Add you task"
              onChange={(e) => stask(e.target.value)}
            />
          </div>
          <div className="btn-div">
            <button type="submit">Add</button>
          </div>
        </form>

        {allTasks.map((e, i) => {
          return (
            <Task key={e.id} taskName={e.task} index={i} id={e.id} del={del} pendingRender={pendingRender} />
          );
        })}
      </div>

      <div className="container">
        You have{" "}
        {allTasks.filter((e) => {
          if (!e.checkBox) {
            return e;
         } 
        }).length 
        } pending tasks <button onClick={()=>{
            sAllTasks([])
        }}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
