import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { TextInput, DateInput } from './FormInputs';
import Button from './ui/Button.styled';
import ToggleButton from './ui/ToggleButton';
import TodoWrapper from './ui/TodoWrapper.styled';
import Task from './Task';
import { addTodo, updateTodo } from '../services/api';

function Todos({ tasks, setTasks }) {
  const [showForm, setShowForm] = useState(false);
  // Form fields
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [due, setDue] = useState(new Date().toISOString().slice(0, 10));

  const handleOnDone = async function (id, done = true) {
    if (id >= 0) {
      const completedTodo = await updateTodo(id, { done });
      if (completedTodo) {
        setTasks((prior) =>
          prior.map((todo) => (todo.id === id ? { ...todo, done } : todo))
        );
      }
    }
  };
  const handleSubmit = async function (e) {
    e.preventDefault();
    const newTodo = await addTodo({ name, category, due });
    if (typeof newTodo.name === 'string' && typeof newTodo.id === 'number') {
      setTasks((prior) => [...prior, newTodo]);
    }
    setName('');
    setCategory('');
    setDue(new Date().toISOString().slice(0, 10));
    setShowForm(false);
  };

  return (
    <TodoWrapper>
      <Header>
        <h1>Your tasks</h1>
        <ToggleButton
          onClick={() => setShowForm(!showForm)}
          type={showForm ? undefined : 'secondary'}
        >
          {showForm ? 'Cancel' : 'Add task'}
        </ToggleButton>
      </Header>
      <Form showForm={showForm} onSubmit={handleSubmit}>
        <TextInput
          name="task"
          label="Task"
          placeholder="Write a new task..."
          showForm={showForm}
          value={name}
          setValue={setName}
        />
        <TextInput
          name="category"
          label="Category"
          placeholder="Enter category..."
          width="200px"
          value={category}
          setValue={setCategory}
        />
        <DateInput
          name="due"
          label="Due date"
          width="200px"
          value={due}
          setValue={setDue}
        />
        <Button type="submit">Add Task</Button>
      </Form>
      {tasks.length ? (
        <TaskList>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDone={handleOnDone} />
          ))}
        </TaskList>
      ) : (
        <NoTasks showForm={showForm}>
          <p>😴 No tasks ...</p>
        </NoTasks>
      )}
    </TodoWrapper>
  );
}

export default Todos;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;
const animation = (props) =>
  props.showForm &&
  css`
    ${slideIn} .2s .1s both ease-out;
  `;
const Form = styled.form`
  align-items: flex-end;
  animation: ${animation};
  display: ${({ showForm }) => (showForm ? 'flex' : 'none')};
  flex-wrap: wrap;
  gap: 16px;
  transform-origin: top;
  // slide in from behind sidebar
  z-index: -1;
`;
const Header = styled.div`
  align-items: baseline;
  display: flex;
  justify-content: space-between;
`;
const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
`;
const NoTasks = styled.div`
  color: ${({ theme }) => theme.colors.gray[700]};
  display: grid;
  font-size: 1.6rem;
  height: ${({ showForm }) =>
    showForm ? 'calc(100% - 400px)' : 'calc(100% - 60px)'};
  place-items: center;
  width: 100%;
`;
