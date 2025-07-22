const SORT_FIELDS = [
  { label: '', value: undefined},
  { label: 'Make', value: 'make' },
  { label: 'Starting Bid', value: 'startingBid' },
  { label: 'Mileage', value: 'mileage' },
  { label: 'Auction Date', value: 'auctionDateTime' },
];

const ITEMS_PER_PAGE_OPTIONS = [5, 10, 25, 50, 100];

export const AuctionCarListSort = ({
  sort = {},
  pagination = {},
  onSortFieldChange,
  onPaginationChange,
}) => {
  const { sortField, sortOrder } = sort || {};
  const { page, pageSize } = pagination || {};

  const handleSortFieldChange = (event) => {
    const newOrder = sortOrder ? sortOrder : 'DSC'
    const sortField = event;
    (sortField, newOrder)
    if (sortField && newOrder) {
      onSortFieldChange({ sortField, sortOrder: sortOrder });
    }
  };

  const handleSortOrderChange = (event) => {
    const newOrder = event === 'ASC' ? 'DSC' : 'ASC';
    const newField = sortField ? sortField : 'make';
    if (sortField && newOrder) {
      onSortFieldChange({ sortField, sortOrder: newOrder });
    }
  };

  const handlePaginationChange = (event) => {
    const newPageSize = event;
    onPaginationChange(page, newPageSize);
  };

  return (
    <div className="w-full">
      <div className="flex gap-3 justify-end">
        <p className="flex items-center justify-center px-4 text-sm font-semibold text-gray-800 rounded-lg hover:bg-gray-200 transition cursor-pointer">Sort by:</p>

        <select
          className="flex items-center justify-center px-4 text-sm font-semibold text-gray-800 rounded-lg hover:bg-gray-200 transition cursor-pointer h-11"
          aria-label="Sort field"
          value={sortField ?? ''}
          onChange={(event) => handleSortFieldChange(event.target.value)}
        >
          {SORT_FIELDS.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <button
          type="button"
          aria-label="Sort order"
          value={sortOrder}
          onClick={() => handleSortOrderChange(sortOrder)}
          className="flex items-center justify-center px-4 text-sm font-semibold text-gray-800 rounded-lg hover:bg-gray-200 transition cursor-pointer h-11"
        >
          {sortOrder === 'ASC' ? 'Ascending ↑' : 'Descending ↓'}
        </button>

        <div className="flex items-center gap-2">
          <label
            htmlFor="PageSize"
            className="text-sm text-gray-700 font-medium"
          >
            Items per page:
          </label>
          <select
            id="PageSize"
            className="flex items-center justify-center px-4 text-sm font-semibold text-gray-800 rounded-lg hover:bg-gray-200 transition cursor-pointer h-11"
            value={pageSize}
            onChange={(event) => handlePaginationChange(parseInt(event.target.value))}
          >
            {ITEMS_PER_PAGE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
