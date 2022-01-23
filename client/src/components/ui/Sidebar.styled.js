import styled from 'styled-components';

const Sidebar = styled.aside`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 32px 16px;
  grid-area: lists;
  z-index: 1;
  position: relative;
`;

export default Sidebar;
