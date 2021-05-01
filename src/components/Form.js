import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

import firebase from "../utils/firebase";

export default function Form() {
  const [title, setTitle] = useState("");

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const createTodo = () => {
    if (title.length > 0) {
      const todoRef = firebase.database().ref("Todo");
      const todo = {
        title,
        complete: false,
      };
      todoRef.push(todo);
      setTitle("");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createTodo();
    }
  };
  return (
    <motion.div
      className="flex"
      layout
      transition={{
        duration: 0.1,
      }}
    >
      <input
        className="flex-initial bg-gray-100 rounded-xl p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full mr-2 pl-4"
        onChange={handleOnChange}
        onKeyPress={handleKeyPress}
        value={title}
        placeholder="Start typing here..."
      />
      <button
        className={
          title.length > 0
            ? "flex-1 bg-blue-100 hover:bg-blue-200 focus:ring-blue-600 rounded-xl px-4 mb-2 focus:outline-none focus:ring-2  w-20"
            : " flex-1 bg-gray-100 hover:bg-gray-200 focus:ring-gray-600 rounded-xl px-4 mb-2 focus:outline-none focus:ring-2  w-20"
        }
        onClick={createTodo}
        disabled={title.length <= 0}
      >
        <FaPlus />
      </button>
    </motion.div>
  );
}
