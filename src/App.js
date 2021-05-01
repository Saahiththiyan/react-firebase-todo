import { useEffect, useState } from "react";
import firebase from "./utils/firebase";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

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
      <AnimateSharedLayout>
        <div className="flex flex-col items-center min-h-screen bg-gray-200 justify-center py-10">
          <motion.div
            layout
            transition={{
              duration: 0.1,
            }}
            className="bg-white rounded-xl p-4 w-80 shadow"
          >
            <motion.p layout className="font-bold pb-2 text-gray-600">
              Add Todo
            </motion.p>
            <Form />
            <AnimatePresence>
              {todoList
                ? todoList.map((todo) => {
                    return <TodoItem key={todo.id} todo={todo} />;
                  })
                : ""}
            </AnimatePresence>
          </motion.div>
        </div>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
