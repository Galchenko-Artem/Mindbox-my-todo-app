import React, { useState } from 'react';
import { Layout, Typography } from 'antd';
import 'antd/dist/reset.css';
import '../App.css';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import FilterPanel from './FilterPanel';
import { Todo } from '../types/todo';

const { Header, Content } = Layout;
const { Title } = Typography;

type Filter = 'all' | 'active' | 'completed';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  let filteredTodos = todos;
  if (filter === 'active') {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filter === 'completed') {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <Layout className="layout" style={{ padding: '50px', background: '#fff' }}>
      <Header style={{ background: '#fff' }}>
        <Title level={2} style={{ textAlign: 'center' }}>Todos</Title>
      </Header>
      <Content style={{ maxWidth: '400px', margin: '0 auto' }}>
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
        <FilterPanel
          activeCount={activeCount}
          filter={filter}
          onChangeFilter={setFilter}
          onClearCompleted={clearCompleted}
        />
      </Content>
    </Layout>
  );
};

export default App;
