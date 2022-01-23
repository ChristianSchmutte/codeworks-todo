import styled from 'styled-components';
import Badge from './ui/Badge.styled';

function Task({ task, handleDone }) {
  return (
    <TaskWrapper done={task.done}>
      <TextGroup>
        {task.done ? (
          <CheckedDoneButton onClick={() => handleDone(task.id, false)}>
            x
          </CheckedDoneButton>
        ) : (
          <DoneButton onClick={() => handleDone(task.id)} />
        )}
        <TaskName>{task.name}</TaskName>
      </TextGroup>
      <TextGroupExtra>
        {task.due ? (
          <Badge>
            {new Date(task.due).toLocaleDateString('en-GB', {
              month: 'short',
              day: '2-digit',
            })}
          </Badge>
        ) : null}
        {task.category ? <Badge>{task.category}</Badge> : null}
      </TextGroupExtra>
    </TaskWrapper>
  );
}

export default Task;

const TaskWrapper = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  color: ${({ theme, done }) => done && theme.colors.gray[500]};
  display: flex;
  justify-content: space-between;
  padding: 16px;
  text-decoration: ${({ done }) => done && 'line-through'};
`;
const DoneButton = styled.button`
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  height: 1.2rem;
  transition: all 0.2s;
  width: 1.2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.gray[500]};
  }
`;
const CheckedDoneButton = styled(DoneButton)`
  background-color: #d1fae5;
  color: #047857;
  font-weight: 700;
  line-height: 1.2rem;
  padding: 0;
  &:hover {
    background-color: #fecaca;
    color: #b91c1c;
  }
  &:active {
    background-color: #fca5a5;
    color: #b91c1c;
  }
`;
const TextGroup = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
`;
const TextGroupExtra = styled(TextGroup)`
  @media (max-width: 800px) {
    display: none;
  }
`;
const TaskName = styled.p`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
