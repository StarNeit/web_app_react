import axios from 'axios';
import { RepositoryResponse } from './types';

export const getAllRepositories = () => {
  return axios.get<RepositoryResponse>('/repositories');
};
