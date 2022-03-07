import React from "react";

export function TodoItems({ todo }) {
  const { id, task, completed } = todo;
  return <li>{task}</li>;
}
