import { RepositoryTablePaginationProps } from './RepositoryTablePagination';

export interface Repository {
  id: string;
  name: string;
  image: string;
  repoUrl: string;
  description?: string;
}
export interface RepositoryTableProps {
  onSearch?: (value: string) => void;
  paginationProps?: Partial<RepositoryTablePaginationProps>;
  repositories: Repository[];
}

export interface PaginationData {
  total: number;
  perPage: number;
  currentPage: number;
}
