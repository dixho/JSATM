import React from 'react'
import { TodoItems } from './TodoItems';

export function TodoList({ todos }) {
  return (
    <ul>
        {todos.map((todo) => (
            <TodoItems todo={todo} />
        ))}
    </ul>
  );
}
