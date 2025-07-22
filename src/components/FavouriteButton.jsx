import { FaStar, FaRegStar } from 'react-icons/fa6';
import { useSetFavoutiteVehicle } from '../store/vehicles';

export const FavouriteButton = ({ vehicle }) => {
  const setFavourite = useSetFavoutiteVehicle(vehicle);

  return (
    <div className="relative group z-20">
      <button
        onClick={() => setFavourite()}
        type="button"
        className="text-2xl text-yellow-500 align-right"
      >
        {vehicle.favourite ? <FaStar /> : <FaRegStar />}
      </button>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
        {vehicle.favourite ? 'Remove from favourites' : 'Add to favourites'}
      </div>
    </div>
  );
};
