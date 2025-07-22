import { useState } from 'react';
import MODEL_FILTERS from '../../db/models.json';
import { FaStar, FaRegStar } from 'react-icons/fa6';

const MAKE_FILTERS = [
  { key: 'All Make', value: '' },
  { key: 'Toyota', value: 'Toyota' },
  { key: 'Ford', value: 'Ford' },
  { key: 'Volkswagen', value: 'Volkswagen' },
  { key: 'Audi', value: 'Audi' },
  { key: 'Volvo', value: 'Volvo' },
  { key: 'Citroen', value: 'Citroen' },
  { key: 'BMW', value: 'BMW' },
  { key: 'Mercedes-Benz', value: 'Mercedes-Benz' },
];


export const AuctionCarListFilters = ({
  filter = {},
  onMakeChange,
  onModelChange,
  onStartingBidChange,
  onFavouriteChange,
}) => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const {
    make = '',
    model = '',
    startingBid = '',
    favourite = '',
  } = filter || {};

  const handleMakeChange = (event) => {
    const value = event.target.value;
    setSelectedMake(value);
    onMakeChange(value);
  };

  const handleModelChange = (event) => {
    const model = event.target.value;
    setSelectedModel(model);
    onModelChange(model);
  };

  const handleBidChange = (e) => {
    const value = event.target.value;
    onStartingBidChange(value === '' ? '' : Number(value));
  };

  const handleFavouriteChange = (event) => {
    onFavouriteChange(event);
  };

  const availableModels = make
    ? MODEL_FILTERS[make] || []
    : Object.values(MODEL_FILTERS).flat();

  return (
    <div className="w-full">
      <div className="flex gap-3 flex-wrap">

        {/* Make Select */}
        <select
          className="flex items-center justify-center px-4 text-sm font-semibold text-gray-800 rounded-lg hover:bg-gray-200 transition cursor-pointer h-10"
          value={make}
          onChange={handleMakeChange}
        >
          {MAKE_FILTERS.map(({ key, value }) => (
            <option key={key} value={value}>
              {key}
            </option>
          ))}
        </select>

        <select
          className="flex items-center justify-center px-4 text-sm font-semibold text-gray-800 rounded-lg hover:bg-gray-200 transition cursor-pointer h-10"
          value={model}
          onChange={handleModelChange}
        >
          <option value="">All Models</option>
          {availableModels.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Min Bid"
          className="flex items-center justify-center px-4 text-sm font-semibold text-gray-800 rounded-lg hover:bg-gray-200 transition cursor-pointer h-10"
          value={startingBid}
          onChange={handleBidChange}
          min={0}
        />

        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-700">Favourites</span>
          <button
            type="button"
            role="switch"
            aria-checked={filter.favourite}
            onClick={() => handleFavouriteChange(!filter.favourite)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
              filter.favourite ? 'bg-gray-400' : 'bg-gray-200'
            }`}
          >
            <span
              className={`justify-self-end inline-block h-4 w-4 transform rounded-full bg-white transition flex items-center justify-center ${
                filter.favourite ? 'translate-x-6' : 'translate-x-1'
              }`}
            >
              {filter.favourite ? (
                <FaStar className="text-yellow-400 text-s" />
              ) : (
                <FaRegStar className="text-gray-400 text-s" />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
