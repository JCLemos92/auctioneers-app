import { useStore } from './useStore';

const ORDER = { ASC: 1, DSC: -1 };

export const useVehicles = (pagination = {}, filters = {}, sort = {}) => {
  const { store } = useStore();

  const allVehicles = store.vehicles || [];

  const filtered = allVehicles.filter((vehicle) => {
    for (const key in filters) {
      if (key === 'startingBid' && vehicle[key] < filters[key]) {
        return false;
      }

      if (key === 'favourite') return vehicle[key];

      if (
        key !== 'startingBid' &&
        key !== 'favourite' &&
        filters[key] &&
        vehicle[key] !== filters[key]
      ) {
        return false;
      }
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    const { sortField, sortOrder } = sort;

    const fieldA = a[sortField];
    const fieldB = b[sortField];

    if (fieldA < fieldB) return -ORDER[sortOrder];
    if (fieldA > fieldB) return ORDER[sortOrder];

    return 0;
  });

  const { page, pageSize } = pagination;

  const pageStart = (page - 1) * pageSize;
  const pageEnd = pageStart + pageSize;
  const paginated = sorted.slice(pageStart, pageEnd);
  const totalPageNumber = Math.ceil(sorted.length / pageSize);

  return {
    vehicles: paginated,
    totalPageNumber: totalPageNumber,
  };
};

export const useSetFavouriteVehicle = (vehicle) => {
  const { store, updateStore } = useStore();

  const setFavourite = () => {
    const allVehicles = store.vehicles || [];

    const updatedVehicles = allVehicles.map((myVehicle) => {
      if (myVehicle.licensePlate === vehicle.licensePlate) {
        return { ...myVehicle, favourite: !myVehicle.favourite };
      }
      return myVehicle;
    });

    updateStore({ ...store, vehicles: updatedVehicles });
  };

  return setFavourite;
};

export const useGetVehicle = (licensePlate) => {
  const { store, updateStore } = useStore();

  const getVehicleByLicensePlate = () => {
    const myVehicle = store.vehicles.find(
      (vehicle) => vehicle.licensePlate === licensePlate,
    );
    return myVehicle;
  };

  return getVehicleByLicensePlate();
};
