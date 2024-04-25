import PropTypes from "prop-types";

const Header = ({ fullName }) => {
  // const { userName, userObj } = props;

  return (
    <div>
      <h1>Header</h1>
      <h4>Full Name: {fullName}</h4>
    </div>
  );
};

Header.propTypes = {
  fullName: PropTypes.string,
};

export default Header;
