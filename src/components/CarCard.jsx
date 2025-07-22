import { useNavigate } from "react-router";
import { AuctionCountdown } from "./AuctionCountdown";
import { FavouriteButton } from "./FavouriteButton";

export const CarCard = ({ vehicle }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/car/${vehicle.licensePlate}`);
  };

  return (
    <article className="flex items-center justify-between gap-6 rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-6">
        <img
          className="w-48 h-32 bg-center bg-no-repeat bg-cover rounded-lg"
          src="./src/assets/img/stock_car.jpeg"
          alt="Car"
        ></img>
        <div className="flex flex-col gap-2">
          <p className="text-text-primary text-xl font-bold leading-tight">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </p>
          <div className="flex items-center gap-4 text-text-secondary text-sm">
            <span>
              <b>Engine Size: </b>
              {vehicle.engineSize}
            </span>
            <span>•</span>
            <span>
              <b>Fuel: </b>
              {vehicle.fuel}
            </span>
          </div>
          <p className="text-text-secondary text-sm font-normal leading-normal">
            <b>Milage: </b>
            {vehicle.mileage}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <div className="text-right">
          <span>
            <FavouriteButton vehicle={vehicle} />
            </span>
          <p className="text-text-secondary text-sm font-normal leading-normal">
            Starting Bid
          </p>
          <p className="text-text-primary text-2xl font-bold leading-tight">
            <output aria-label="starting-bid">
              {vehicle.startingBid}
            </output>
          </p>
        </div>
        <AuctionCountdown auctionDateTime={vehicle.auctionDateTime} />
        <button
          type="button"
          onClick={handleViewDetails}
          className="mmt-2 inline-flex items-center px-4 py-2 rounded-xl bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default CarCard;
