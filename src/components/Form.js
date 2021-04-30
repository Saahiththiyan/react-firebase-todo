import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import firebase from "../utils/firebase";

export default function Form() {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      complete: false,
    };
    todoRef.push(todo);
    setTitle("");
  };
  return (
    <div className="flex">
      <input
        className="flex-initial bg-gray-100 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full mr-2 pl-4"
        onChange={handleOnChange}
        value={title}
      />
      <button
        className="flex-1 bg-blue-100 hover:bg-blue-200 rounded-xl px-4 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-20"
        onClick={createTodo}
      >
        <FaPlus />
      </button>
    </div>
  );
}
