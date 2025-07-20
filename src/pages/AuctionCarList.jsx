import { useVehicles } from '../store/vehicles';

export const AuctionCarList = () => {
  const { vehicles } = useVehicles();

  return (
    <div>
      {vehicles.map((vehicle, index) => (
        <div key={vehicle.licensePlate}>
          {index} - {vehicle.make} - {vehicle.startingBid}
        </div>
      ))}
    </div>
  );
};
