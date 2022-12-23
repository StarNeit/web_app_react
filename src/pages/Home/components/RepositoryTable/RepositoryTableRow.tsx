import { Repository } from './types';
import styled from 'styled-components';

interface RepositoryRowProps {
  data: Repository;
}

const RepositoryImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
`;

const RepositoryTableCell = styled.td`
  padding: 5px 10px;
  vertical-align: middle;
  border: 1px solid #434245;
`;

export const RepositoryTableRow = ({
  data: repository
}: RepositoryRowProps) => {
  return (
    <tr>
      <RepositoryTableCell>
        <RepositoryImage
          src={repository.image}
          width="50"
          height="50"
          alt={repository.name}
        />
      </RepositoryTableCell>

      <RepositoryTableCell>{repository.name}</RepositoryTableCell>

      <RepositoryTableCell>{repository.repoUrl}</RepositoryTableCell>

      <RepositoryTableCell>{repository.description}</RepositoryTableCell>
    </tr>
  );
};
