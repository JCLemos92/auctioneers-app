import { useVehicles } from '../../store/vehicles';
import { usePagination } from './hooks/usePagination';
import { useSortFilters } from './hooks/useSortFilters';
import { AuctionCarListFilters } from '../../components/AuctionCarListFilters';
import { AuctionCarListSort } from '../../components/AuctionCarListSort';
import CarCard from '../../components/CarCard';
import { PaginationButton } from '../../components/PaginationButton';

export const AuctionCarList = () => {
  const { pagination, nextPage, previousPage, handlePaginationParams } =
    usePagination();
  const {
    filters,
    sort,
    handleMakeFilterParams,
    handleFilterParams,
    handleSortParams,
  } = useSortFilters();
  const { vehicles, totalPageNumber } = useVehicles(pagination, filters, sort);
  const { page } = pagination;

  return (
    <div className="max-w mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <AuctionCarListFilters
        filter={filters}
        onMakeChange={(value) => handleMakeFilterParams('make', value)}
        onModelChange={(value) => handleFilterParams('model', value)}
        onStartingBidChange={(value) =>
          handleFilterParams('startingBid', value)
        }
        onFavouriteChange={(value) => handleFilterParams('favourite', value)}
      />
      <AuctionCarListSort
        sort={sort}
        pagination={pagination}
        onSortFieldChange={({ sortField, sortOrder }) =>
          handleSortParams({ sortField, sortOrder })
        }
        onPaginationChange={(page, pageSize) =>
          handlePaginationParams(page, pageSize)
        }
      />

      <div className="space-y-6 p-4">
        {vehicles.map((vehicle) => (
          <CarCard key={vehicle.licensePlate} vehicle={vehicle} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between">
        <PaginationButton onClick={previousPage} disabled={page <= 1}>
          Back
        </PaginationButton>
        <div className="text-gray-700 font-medium">
          Page {page} of {totalPageNumber}
        </div>
        <PaginationButton onClick={nextPage} disabled={page >= totalPageNumber}>
          Next
        </PaginationButton>
      </div>
    </div>
  );
};
