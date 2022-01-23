import styled from 'styled-components';
import Badge from './ui/Badge.styled';

function Task({ task }) {
  return (
    <TaskWrapper>
      <TextGroup>
        <DoneButton />
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
  display: flex;
  justify-content: space-between;
  padding: 16px;
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
