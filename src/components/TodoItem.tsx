import React from 'react';
import { Todo } from '../types/todo';
import { List, Checkbox, Button } from 'antd';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <List.Item
      actions={[
        <Button type="text" danger onClick={() => deleteTodo(todo.id)}>Delete</Button>
      ]}
    >
      <Checkbox checked={todo.completed} onChange={() => toggleTodo(todo.id)}>
        {todo.completed ? <s>{todo.text}</s> : todo.text}
      </Checkbox>
    </List.Item>
  );
};

export default TodoItem;
