import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";

function CarCard({ car, onFavouriteToggle }) {
  const [isFavourite, setIsFavourite] = useState(car.favourite);

  const toggleFavourite = () => {
    setIsFavourite((prev) => {
      const newState = !prev;
      onFavouriteToggle(car, newState);
      return newState;
    });
  };

  return (
    <div className="p-4 rounded-2xl bg-white shadow-md m-4 drop-shadow-2xl max-w-6xl mx-auto">
      <div className="flex items-center justify-between border-b border-gray-300 pb-4 mb-6 w-full">
        <h2 className="text-2xl font-semibold text-gray-800 ml-8">{`${car.make} ${car.model}`}</h2>
        <div className="relative group z-20">
          <button
            onClick={toggleFavourite}
            className="text-2xl text-yellow-500 align-right"
          >
            {isFavourite ? <FaStar /> : <FaRegStar />}
          </button>
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
            {isFavourite ? "Remove from favourites" : "Add to favourites"}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src="./src/assets/img/stock_car.jpeg"
          alt="Car"
          className="w-full md:w-1/3 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">
            Specifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-gray-700">
            <div>
              <p className="font-medium">Engine Size:</p>
              <p>{car.engineSize}</p>
            </div>
            <div>
              <p className="font-medium">Fuel:</p>
              <p>{car.fuel}</p>
            </div>
            <div>
              <p className="font-medium">Year:</p>
              <p>{car.year}</p>
            </div>
            <div>
              <p className="font-medium">Mileage:</p>
              <p>{car.mileage}</p>
            </div>
            <div>
              <p className="font-medium">Auction Date:</p>
              <p>{car.auctionDateTime}</p>
            </div>
            <div>
              <p className="font-medium">Starting Bid:</p>
              <p>{car.startingBid}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
