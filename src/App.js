import { useEffect, useState } from "react";
import firebase from "./utils/firebase";

import "./App.css";
import Form from "./components/Form";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);
  return (
    <div className="App">
      <div className="flex flex-col items-center min-h-screen bg-gray-200 justify-center py-10">
        <div className="bg-white rounded-xl p-4 w-80 shadow">
          <Form />
          {todoList
            ? todoList.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />;
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
