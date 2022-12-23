import styled from 'styled-components';

const Input = styled.input`
  border: 1px solid #434245;
  border-radius: 2px;
  margin-bottom: 12px;
  background: transparent;
  padding: 8px 16px;
  outline: none;
  color: #fafafa;
  transition: 0.25s border-color;

  &:focus {
    border-color: #aaa;
  }
`;

export const RepositoryTableSearch = Input;
