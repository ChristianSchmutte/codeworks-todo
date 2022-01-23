import styled from 'styled-components';

const ListItem = styled.button`
  align-items: baseline;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.sm};
  border: ${({ theme, selected }) =>
    selected
      ? `1px solid ${theme.colors.gray[500]}`
      : `1px solid ${theme.colors.white}`};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  transition: all 0.15s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
export default ListItem;
