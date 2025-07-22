import { useSearchParams } from 'react-router';

export const useUrlParams = () => {
  const [_, setSearchParams] = useSearchParams();

  const handleSearchParams = (newParams) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      newParams.map(({ key, value }) => {
        value ? params.set(key, value) : params.delete(key);
      });

      return params;
    });
  };

  return { handleSearchParams };
};
