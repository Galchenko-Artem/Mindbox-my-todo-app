import React from 'react';
import { List } from 'antd';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <List
      bordered
      dataSource={todos}
      renderItem={(todo) => (
        <TodoItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      )}
      style={{ marginBottom: '20px' }}
    />
  );
};

export default TodoList;
