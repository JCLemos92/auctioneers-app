import { useSearchParams } from 'react-router';
import { useUrlParams } from '../../../hooks/useUrlParams';

const FILTER_FIELDS = ['make', 'model', 'startingBid', 'favourite'];

export const useSortFilters = () => {
  const [searchParams] = useSearchParams();
  const { handleSearchParams } = useUrlParams();

  const sortField = searchParams.get('sortField');
  const sortOrder = searchParams.get('sortOrder');

  const filters = {};

  for (const [key, value] of searchParams) {
    if (FILTER_FIELDS.includes(key)) filters[key] = value;
  }

  const handleMakeFilterParams = (field, value) => {
    handleSearchParams([
      { key: field, value },
      { key: 'model', value: undefined },
      { key: 'page', value: 1 },
    ]);
  };

  const handleFilterParams = (field, value) => {
    handleSearchParams([
      { key: field, value },
      { key: 'page', value: 1 },
    ]);
  };

  const handleSortParams = ({ sortField, sortOrder }) => {
    handleSearchParams([
      { key: 'sortField', value: sortField },
      { key: 'sortOrder', value: sortOrder },
      { key: 'page', value: 1 },
    ]);
  };

  return {
    filters,
    sort: { sortField, sortOrder },
    handleMakeFilterParams,
    handleFilterParams,
    handleSortParams,
  };
};
