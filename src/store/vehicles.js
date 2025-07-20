import { useStore } from './useStore';

const ORDER = { ASC: 1, DSC: -1 };

export const useVehicles = ({ pagination = {}, filters = {}, sort = {} }) => {
  const { store } = useStore();

  const allVehicles = store.vehicles || [];

  const filtered = allVehicles.filter((vehicle) => {
    for (const key in filters) {
      if (key === 'startingBid' && vehicle[key] < filters[key]) {
        return false;
      }

      if (
        key !== 'startingBid' &&
        filters[key] &&
        vehicle[key] !== filters[key]
      ) {
        return false;
      }
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    const { field, order } = sort;

    const fieldA = a[field];
    const fieldB = b[field];

    if (fieldA < fieldB) return -ORDER[order];
    if (fieldA > fieldB) return ORDER[order];

    return 0;
  });

  const { page, pageSize } = pagination;

  const pageStart = (page - 1) * pageSize;
  const pageEnd = pageStart + pageSize;
  const paginated = sorted.slice(pageStart, pageEnd);

  return { vehicles: paginated };
};
