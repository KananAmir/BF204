import PropTypes from "prop-types";

function SearchToDo({ setSearchQuery }) {
  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }
  return (
    <input
      onKeyUp={(e) => handleSearch(e)}
      type="text"
      placeholder="search todo"
    />
  );
}

SearchToDo.propTypes = {
  setSearchQuery: PropTypes.func,
};

export default SearchToDo;
