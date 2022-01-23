import { useEffect, useRef } from 'react';
import styled from 'styled-components';

function TextInput({ name, label, placeholder = '', width, showForm }) {
  const ref = useRef();

  useEffect(() => {
    if (showForm) {
      ref.current.focus();
    }
  }, [showForm]);

  return (
    <InputField width={width}>
      <label>{label}</label>
      <Input type="text" name={name} placeholder={placeholder} ref={ref} />
    </InputField>
  );
}

function DateInput({ name, label, width }) {
  return (
    <InputField width={width}>
      <label>{label}</label>
      <Input type="date" name={name} />
    </InputField>
  );
}

export { TextInput, DateInput };

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: ${(props) => (props.width ? props.width : '100%')};
  flex-grow: 1;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.gray[200]};
  border-radius: ${({ theme }) => theme.radius.md};
  border: none;
  color: ${({ theme }) => theme.colors.gray[700]};
  padding: 8px 16px;
`;
