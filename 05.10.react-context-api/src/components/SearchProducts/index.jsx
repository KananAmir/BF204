import { useContext } from "react";
import { MainContext } from "../../context/mainContext";

const SearchProducts = () => {
  const { setSearchQuery } = useContext(MainContext);
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <input
      style={{ margin: "20px 0" }}
      type="search"
      placeholder="search here.."
      onChange={(e) => handleSearch(e)}
    />
  );
};

export default SearchProducts;
