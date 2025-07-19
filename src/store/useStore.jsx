import { useContext, useState } from 'react';
import { StoreContext } from './storeContext';

export const StoreProvider = ({ initialValues, children }) => {
  const [store, updateStore] = useState(initialValues);

  return (
    <StoreContext.Provider value={{ store, updateStore }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
