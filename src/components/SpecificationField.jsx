export const SpecificationField = ({field, data}) => {
  return (
    <p>
      {field}:
      <span className="text-gray-800 font-medium">
        {data}
      </span>
    </p>
  );
};
