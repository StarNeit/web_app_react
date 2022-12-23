import { getAllRepositories } from '@/services/repository';
import { useQuery } from 'react-query';
import { RepositoryTable } from './components';
import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { PaginationData } from './components/RepositoryTable/types';

type HomeRepositories = React.ComponentProps<
  typeof RepositoryTable
>['repositories'];

const HomeStyled = styled.div``;

export const Home = () => {
  const { data: repositoryData, isLoading } = useQuery(
    'Home.getAllRepositories',
    () => getAllRepositories()
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const repositories = useMemo(() => {
    return (
      repositoryData?.data.map<HomeRepositories[number]>((repoResponse) => ({
        id: `${repoResponse.id}`,
        image: repoResponse.owner.avatar_url,
        name: repoResponse.name,
        repoUrl: repoResponse.url,
        description: repoResponse.description
      })) ?? []
    );
  }, [repositoryData]);

  const filteredRepositories = useMemo(() => {
    // Filter by search input
    const result = repositories.filter((item) =>
      JSON.stringify(item).toLowerCase().includes(searchQuery.toLowerCase())
    );

    return result;
  }, [repositories, searchQuery]);

  const paginationData = useMemo<PaginationData>(() => {
    return {
      currentPage: currentPage,
      perPage: 20,
      total: filteredRepositories.length
    };
  }, [filteredRepositories]);

  const paginatedRepositories = useMemo(() => {
    if (!paginationData) return [];

    const { perPage, currentPage } = paginationData;

    // Filter by pagination
    const result = [...filteredRepositories].splice(
      perPage * (currentPage - 1),
      perPage
    );

    return result;
  }, [filteredRepositories, paginationData]);

  const searchRepository = (searchValue: string) => {
    setSearchQuery(searchValue);
  };

  const onPaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(
    function onRepositoryDataChanges() {
      if (!repositoryData) return;

      setCurrentPage(1);
    },
    [repositoryData]
  );

  return (
    <HomeStyled>
      {paginationData?.currentPage}
      <div>{filteredRepositories?.length}</div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <RepositoryTable
          paginationProps={{
            onPaginationChange,
            paginationData
          }}
          onSearch={searchRepository}
          repositories={paginatedRepositories}
        />
      )}
    </HomeStyled>
  );
};
export default Home;
