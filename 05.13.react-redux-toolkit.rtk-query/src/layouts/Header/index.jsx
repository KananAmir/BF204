import { useSelector } from "react-redux";

const Header = () => {
  const { favs } = useSelector((state) => state.favs);

  return <div>Fav count: {favs.length}</div>;
};

export default Header;
