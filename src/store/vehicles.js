import { useStore } from './useStore';

export const useVehicles = () => {
  const { store } = useStore();

  const allVehicles = store.vehicles || [];

  return { vehicles: allVehicles };
};
