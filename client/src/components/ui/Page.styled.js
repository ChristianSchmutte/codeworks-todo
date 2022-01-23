import styled from 'styled-components';

const Page = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 'lists todos';
  gap: 16px;
  height: 100%;
  padding: 16px;

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'todos'
      'lists';
  }
`;

export default Page;
