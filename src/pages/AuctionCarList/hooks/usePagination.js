import { useSearchParams } from 'react-router';
import { useUrlParams } from '../../../hooks/useUrlParams';

export const usePagination = () => {
  const [searchParams] = useSearchParams();
  const { handleSearchParams } = useUrlParams();

  const page = Number(searchParams.get('page')) || 1;
  const pageSize = Number(searchParams.get('pageSize')) || 10;

  const handlePaginationParams = (page, pageSize) => {
    handleSearchParams([
      { key: 'page', value: page },
      { key: 'pageSize', value: pageSize },
    ]);
  };

  const nextPage = () => {
    handlePaginationParams(page + 1, pageSize);
  };

  const previousPage = () => {
    handlePaginationParams(page - 1, pageSize);
  };

  return { pagination: { page, pageSize }, nextPage, previousPage, handlePaginationParams };
};
