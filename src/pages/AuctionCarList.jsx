import { useVehicles } from '../store/vehicles';

const filters = {
  make: 'Toyota',
};

const sort = {
  field: 'startingBid',
  order: 'ASC',
};

const pagination = {
  page: 1,
  pageSize: 40,
};

export const AuctionCarList = () => {
  const { vehicles } = useVehicles({ pagination, filters, sort });

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
