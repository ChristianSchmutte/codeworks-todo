import styled from 'styled-components';

const Badge = styled.p`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: ${({ theme }) => theme.radius.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: 0.8rem;
  padding: 8px;
  white-space: nowrap;
`;

export default Badge;
