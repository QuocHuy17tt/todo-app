import React from "react";
import Todo from "./Todo";

export default function todoList({ todoList, onCheckBtnclick }) {
  return (
    <>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} onCheckBtnclick={onCheckBtnclick} />
      ))}
    </>
  );
}
