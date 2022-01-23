import styled from 'styled-components';

const Button = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-weight: 600;
  line-height: 1.6rem;
  padding: 8px 16px;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[800]};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

export default Button;
