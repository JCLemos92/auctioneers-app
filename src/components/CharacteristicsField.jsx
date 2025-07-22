export const CharacteristicsField = ({field, data, data2 = undefined}) => {
  return (
    <p className="text-sm text-gray-500">
      {field}: <span className="font-medium text-gray-700">{data} {data2}</span>
    </p>
  );
};
