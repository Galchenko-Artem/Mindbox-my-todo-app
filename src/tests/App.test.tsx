import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../components/App';

test('adds a new todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.submit(input);
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles a todo', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(input, { target: { value: 'Test Toggle' } });
  fireEvent.submit(input);
  const todoItem = screen.getByText('Test Toggle');
  expect(todoItem).toBeInTheDocument();
  fireEvent.click(todoItem);
  expect(todoItem.innerHTML).toMatch(/<s>Test Toggle<\/s>/);
});
