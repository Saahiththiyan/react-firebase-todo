import React from "react";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import firebase from "../utils/firebase";

export default function TodoItem({ todo }) {
  const deleteTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };
  const completeTodo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete,
    });
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        x: -10,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -10,
      }}
      transition={{
        duration: 0.1,
      }}
      className={
        "bg-gray-100 rounded-xl p-2 mb-2 " +
        (todo.complete ? "bg-green-100" : "")
      }
    >
      <div className="flex">
        <div className="flex-auto pl-2">
          <div
            className={
              "leading-tight text-gray-500 " +
              (todo.complete ? "line-through" : "")
            }
          >
            {todo.title}
          </div>
        </div>
        <div className="flex-none pr-2">
          <div
            className="text-red-500 hover:text-red-600 float-right"
            onClick={deleteTodo}
          >
            <FaTrashAlt />
          </div>
        </div>
        <div className="flex-none">
          <div
            className="text-green-500 hover:text-green-600 float-right"
            onClick={completeTodo}
          >
            <FaCheckCircle />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
