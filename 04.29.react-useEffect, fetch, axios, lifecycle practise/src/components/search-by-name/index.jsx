const SearchByName = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      onChange={(e) => {
        setSearchQuery(e.target.value);
      }}
    />
  );
};

export default SearchByName;
