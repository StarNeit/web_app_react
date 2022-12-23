import styled from 'styled-components';
import { RepositoryTableRow } from './RepositoryTableRow';
import { RepositoryTableProps } from './types';
import { RepositoryTableSearch } from './RepositoryTableSearch';
import { RepositoryTablePagination } from './RepositoryTablePagination';

const Table = styled.table`
  border-collapse: collapse;
`;

const TableWrapper = styled.div`
  max-height: 80vh;
  overflow: auto;
`;

export const RepositoryTable = ({
  repositories,
  paginationProps,
  onSearch
}: RepositoryTableProps) => {
  const hasPaginationData = Boolean(
    paginationProps &&
      paginationProps.paginationData &&
      paginationProps.onPaginationChange
  );

  return (
    <>
      <RepositoryTableSearch
        onChange={(e) => onSearch && onSearch(e.target.value)}
      />

      <TableWrapper>
        <Table>
          {repositories.map((repository) => (
            <RepositoryTableRow key={repository.id} data={repository} />
          ))}
        </Table>
      </TableWrapper>

      {hasPaginationData && (
        <RepositoryTablePagination
          paginationData={paginationProps!.paginationData!}
          onPaginationChange={paginationProps!.onPaginationChange!}
        />
      )}
    </>
  );
};
