import styled from 'styled-components';
import Button from './Button.styled';

const ToggleButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  color: ${({ theme }) => theme.colors.gray[700]};
  width: ${(props) => props.width || '8rem'};
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }
`;

export default ToggleButton;
