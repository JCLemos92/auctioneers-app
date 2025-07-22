import dayjs from 'dayjs';
import { useParams } from 'react-router';
import image1 from '../../assets/img/image1.png';
import image2 from '../../assets/img/image2.png';
import image3 from '../../assets/img/image3.png';
import { CharacteristicsField } from '../../components/CharacteristicsField';
import { FavouriteButton } from '../../components/FavouriteButton';
import { SpecificationField } from '../../components/SpecificationField';
import { useGetVehicle } from '../../store/vehicles';

export const CarDetails = () => {
  const { licensePlate } = useParams();
  const vehicle = useGetVehicle(licensePlate);

  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-white p-6 rounded-xl shadow-md">
      {/* Left: Images */}
      <div className="g:w-1/2 grid grid-col gap-4">
        <img
          src={image1}
          alt="Car front"
          className="rounded-lg w-full h-72 object-cover"
        />
        <div className="flex gap-4">
          <img
            src={image2}
            alt="Car side"
            className="w-1/2 h-36 object-cover rounded-lg"
          />
          <img
            src={image3}
            alt="Car interior"
            className="w-1/2 h-36 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Right: Car Characteristics */}
      <div className="lg:w-1/2 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-800">
              {vehicle.make} {vehicle.model}
            </h2>
            <span>{FavouriteButton({ vehicle })}</span>
          </div>
          <CharacteristicsField field={'Year'} data={vehicle.year} />

          <CharacteristicsField
            field={'Engine'}
            data={vehicle.mileage}
            data2={vehicle.fuel}
          />

          <CharacteristicsField field={'Mileage'} data={vehicle.mileage} />

          <CharacteristicsField
            field={'Starting Bid'}
            data={vehicle.startingBid}
          />

          <CharacteristicsField
            field={'Auction Date'}
            data={dayjs(vehicle.auctionDateTime).format('DD/MM/YYYY')}
          />
        </div>

        {/* Specification */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-1">
            Specification
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <SpecificationField
              field={'Type'}
              data={vehicle.details.specification.vehicleType}
            />

            <SpecificationField
              field={'Color'}
              data={vehicle.details.specification.colour}
            />

            <SpecificationField
              field={'Fuel'}
              data={vehicle.details.specification.fuel}
            />

            <SpecificationField
              field={'Transmission'}
              data={vehicle.details.specification.transmission}
            />

            <SpecificationField
              field={'Doors'}
              data={vehicle.details.specification.numberOfDoors}
            />

            <SpecificationField
              field={'CO₂ Emissions'}
              data={vehicle.details.specification.co2Emissions}
            />

            <SpecificationField
              field={'NOx Emissions'}
              data={vehicle.details.specification.noxEmissions}
            />

            <SpecificationField
              field={'Keys'}
              data={vehicle.details.specification.numberOfKeys}
            />
          </div>

          {/* Ownership */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Ownership
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <SpecificationField
                field={'Log Book'}
                data={vehicle.details.ownership.logBook}
              />

              <SpecificationField
                field={'Owners'}
                data={vehicle.details.ownership.numberOfOwners}
              />

              <SpecificationField
                field={'Date of Registration'}
                data={dayjs(vehicle.details.ownership.dateOfRegistration).format('DD/MM/YYYY')}
              />

            </div>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Equipment
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {vehicle.details.equipment.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
