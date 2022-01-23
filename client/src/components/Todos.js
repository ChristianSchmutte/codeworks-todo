import { useState } from 'react';
import { TextInput, DateInput } from './FormInputs';
import Button from './ui/Button.styled';
import TodoWrapper from './ui/TodoWrapper.styled';
import Task from './Task';
import styled, { keyframes, css } from 'styled-components';

function Todos({ tasks }) {
  const [showForm, setShowForm] = useState(false);

  const toggleFormHandler = function () {
    setShowForm((prior) => !prior);
  };

  const submitHandler = function (e) {
    e.preventDefault();
  };

  const showTasks = tasks.map((task) => <Task key={task.id} task={task} />);

  return (
    <TodoWrapper>
      <Header>
        <h1>Your tasks</h1>
        {showForm ? (
          <ToggleButton onClick={toggleFormHandler}>Cancel</ToggleButton>
        ) : (
          <ToggleButton onClick={toggleFormHandler} type="secondary">
            Add task
          </ToggleButton>
        )}
      </Header>
      <Form showForm={showForm}>
        <TextInput
          name="task"
          label="Task"
          placeholder="Write a new task..."
          showForm={showForm}
        />
        <TextInput
          name="list"
          label="Category"
          placeholder="Enter category..."
          width="200px"
        />
        <DateInput name="due" label="Due date" width="200px" />
        <Button type="submit">Add Task</Button>
      </Form>
      {tasks.length ? <TaskList>{showTasks}</TaskList> : <h2>😴 No tasks..</h2>}
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
const ToggleButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.gray[700]};
  width: 8rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
`;
