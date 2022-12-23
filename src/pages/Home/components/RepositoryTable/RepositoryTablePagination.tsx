import styled from 'styled-components';
import { PaginationData } from './types';

const Pagination = styled.div`
  margin-top: 12px;
  text-align: right;
`;

const PaginationItem = styled.div`
  padding: 5px 5px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin-right: 12px;
  background: #232323;
  border: 1px solid #424345;
  border-radius: 2px;
  display: inline-block;
  cursor: pointer;
  transition: 0.25s background-color;
  vertical-align: middle;
`;

const ActivePaginationItem = styled(PaginationItem)`
  background-color: #424345;
  color: #000;
`;

export interface RepositoryTablePaginationProps {
  paginationData: PaginationData;
  onPaginationChange: (page: number) => void;
}

export const RepositoryTablePagination = ({
  paginationData,
  onPaginationChange
}: RepositoryTablePaginationProps) => {
  const paginationItemsCount = Math.ceil(
    paginationData.total / paginationData.perPage
  );

  const onPaginationItemClick = (index: number) =>
    onPaginationChange && onPaginationChange(index + 1);

  return (
    <Pagination>
      {Array(paginationItemsCount)
        .fill(null)
        .map((_, index) =>
          index + 1 === paginationData.currentPage ? (
            <ActivePaginationItem
              key={index}
              onClick={() => onPaginationItemClick(index)}>
              {index + 1}
            </ActivePaginationItem>
          ) : (
            <PaginationItem
              onClick={() => onPaginationItemClick(index)}
              key={index}>
              {index + 1}
            </PaginationItem>
          )
        )}
    </Pagination>
  );
};
